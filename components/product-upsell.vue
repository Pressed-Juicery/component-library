<template>
	<card v-if="upsell && upsell.variants && upsell.variants.length" :class="{[$style.isOpen]: isOpen}">
		<div :class="$style.header" @click="$emit('toggle-accordion')">
			<div>{{ upsell.title }}</div>
			<arrow-icon :class="$style.arrow" />
		</div>

		<div v-if="isOpen" :class="$style.body">
			<div :class="$style.bodyText">
				{{upsell.description }}
				<div :class="$style.imageWrap">
					<img v-if="firstUpsellItem
						&& firstUpsellItem
						&& !doesQualifyForSingleProductUpsell"
						:class="$style.productImage"
						:src="firstUpsellItem.imageUrl"
						:alt="firstUpsellItem.name"
					/>
				</div>
			</div>

			<div v-if="upsell.isApplied" :class="$style.successMessage">
				<circle-check :class="$style.circleCheck" />
				This promo has been applied to your cart.
			</div>

			<div v-else>
				<div v-if="amountNeededToQualifyForOffer">
					<progress-bar :class="$style.progressBar"
						:current="cart.subtotal"
						:goal="upsell.additionalSubtotalRequirement"
					/>

					<div :class="$style.bodyText">{{ progressText }}</div>

					<div :class="$style.actionLabel"
						@click="$emit('continue-shopping')">
						Keep Shopping
					</div>
				</div>

				<div v-else>
					<div v-if="isMultipleItemUpsell"
						:class="$style.actionLabel"
						@click="$emit('choose-product')">
						{{ actionLabel }}
					</div>
				</div>

				<upsell-product-card v-if="doesQualifyForSingleProductUpsell"
					:variant="firstUpsellItem"
					:tier="wallet.tier"
					@add-product="item => $emit('add-product', item)"
				/>
			</div>
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
		wallet: {
			type: Object,
			required: true,
			validator: value => value.tier,
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
			return !this.isMultipleItemUpsell && !this.amountNeededToQualifyForOffer && !this.upsell.isApplied;
		},

		amountNeededToQualifyForOffer() {
			const subtotal = this.cart && this.cart.subtotal;
			const additionalSubtotalRequirement = this.upsell && this.upsell.additionalSubtotalRequirement;

			if (subtotal >= additionalSubtotalRequirement) return 0;

			return additionalSubtotalRequirement - subtotal;
		},

		/* eslint-disble-line multiline-comment-style
			OFFER TITLE NEEDS TO START WITH A VERB
			e.g. "Get a bundle for $20", "Recieve a free hat", etc.
		*/
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

	.imageWrap {
		width: 100%;
		height: auto;
	}

	.productImage {
		display: block;
		max-width: 100px;
		margin-left: auto;
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
