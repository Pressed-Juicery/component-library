<template>
	<card v-if="upsell && upsell.variants && upsell.variants.length" :class="{[$style.isOpen]: isOpen}">
		<div :class="$style.header" @click="$emit('toggle-accordion')">
			<div>{{ upsell.title }}</div>
			<arrow-icon :class="$style.arrow" />
		</div>

		<div v-if="isOpen" :class="$style.body">
			<div :class="$style.bodyText">
				{{upsell.description }}
				<img v-if="firstUpsellItem
					&& firstUpsellItem
					&& !doesQualifyForSingleProductUpsell"
					:class="$style.productImage"
					:src="firstUpsellItem.imageUrl"
					:alt="firstUpsellItem.name"
				/>
			</div>

			<div v-if="isPromotionApplied" :class="$style.successMessage">
				<circle-check :class="$style.circleCheck" />
				This promo has been applied to your cart.
			</div>

			<div v-else-if="amountNeededToQualifyForOffer">
				<progress-bar :class="$style.progressBar"
					:current="cart.total"
					:goal="upsell.minimumSubtotalRequirement"
				/>
				<div :class="$style.bodyText">{{ progressText }}</div>
			</div>

			<div v-if="!isPromotionApplied && !amountNeededToQualifyForOffer && isMultipleItemUpsell"
				:class="$style.actionLabel"
				@click="$emit('choose-product')">
				{{ actionLabel }}
			</div>

			<div v-else-if="!isPromotionApplied && amountNeededToQualifyForOffer"
				:class="$style.actionLabel"
				@click="$emit('continue-shopping')">
				Keep Shopping
			</div>

			<upsell-product-card v-if="doesQualifyForSingleProductUpsell"
				:product="firstUpsellItem"
				:upsell-price="upsell.upsellPrice"
				@add-product="item => $emit('add-product', item)"
			/>
		</div>
	</card>
</template>

<script>
import ArrowIcon from './icons/arrow-down-icon';
import Card from './card';
import CircleCheck from './icons/circle-check';
import ProgressBar from './progress-bar';
import UpsellProductCard from './upsell-product-card';
import { formatCurrency } from '../utilities/formatters';

export default {
	components: {
		ArrowIcon,
		Card,
		CircleCheck,
		ProgressBar,
		UpsellProductCard,
	},

	props: {
		cart: {
			type: Object,
			required: true,
		},
		upsell: {
			type: Object,
			required: true,
		},
		isOpen: Boolean,
	},

	computed: {
		actionLabel() {
			return this.upsell && this.upsell.productType
				? `Choose a ${this.upsell.productType}`
				: 'Choose a Product';
		},

		firstUpsellItem() {
			return this.upsell && this.upsell.variants[0];
		},

		isMultipleItemUpsell() {
			return this.upsell && this.upsell.variants.length > 1;
		},

		doesQualifyForSingleProductUpsell() {
			return !this.isMultipleItemUpsell && !this.amountNeededToQualifyForOffer && !this.isPromotionApplied;
		},

		isPromotionApplied() {
			const upsellIds = this.upsell
				&& this.upsell.variants.map(item => item.id);
			const hasPromotionItemInCart = this.cart
				&& this.cart.items
				&& this.cart.items.some(item => upsellIds.includes(item.variantId));
			const doesCartQualifyForPromotion = !this.amountNeededToQualifyForOffer;

			return doesCartQualifyForPromotion && hasPromotionItemInCart;
		},

		amountNeededToQualifyForOffer() {
			const total = this.cart && this.cart.total;
			const minimumSubtotalRequirement = this.upsell && this.upsell.minimumSubtotalRequirement;

			if (total >= minimumSubtotalRequirement) return 0;

			return minimumSubtotalRequirement - total;
		},

		progressText() {
			const offerTitle = this.upsell && this.upsell.title.toLowerCase();
			const formattedAmount = this.formatCurrency(this.amountNeededToQualifyForOffer);

			return `Spend ${formattedAmount} more and ${offerTitle}`;
		},
	},

	methods: {
		formatCurrency(number) {
			return formatCurrency(number);
		},
	},
};
</script>

<style module lang="scss">
	@import '../styles/mixins';

	.header {
		@include text-heading-6;
		display: flex;
		align-items: center;
		justify-content: space-between;
		cursor: pointer;
	}

	.isOpen .header{
		margin-bottom: $spacing-05;
	}

	.arrow {
		width: $spacing-05;
	}

	.isOpen .arrow{
		transform: rotate(180deg);
	}

	.bodyText {
		@include text-subtle;
		display: flex;
		justify-content: space-between;
		margin-bottom: $spacing-05;
	}

	.productImage {
		max-width: 100px;
	}

	.progressBar {
		margin-bottom: $spacing-03;
	}

	.successMessage {
		@include text-body-small;
		@include text-bold;
		display: flex;
		align-items: center;
		border-top: 1px solid $gray-20;
		padding-top: $spacing-03;
		padding-bottom: $spacing-02;
	}

	.circleCheck {
		margin-right: $spacing-03;
	}

	.actionLabel {
		@include button-link;
	}

</style>
