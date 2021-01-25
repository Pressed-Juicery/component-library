<template>
	<card v-if="upsell && upsell.variants && upsell.variants.length" :class="{[$style.isOpen]: isOpen}">
		<div :class="$style.header" @click="$emit('toggle-accordion')">
			<div>{{ upsell.title }}</div>
			<arrow-icon :class="$style.arrow" />
		</div>

		<div v-if="isOpen" :class="$style.body">
			<div :class="$style.bodyText">
				{{upsell.description }}
				<div v-if="upsell.isApplied || isMultipleItemUpsell || upsell.additionalSubtotalRequirement" :class="$style.imageWrap">
					<img
						v-if="firstUpsellItem && !doesQualifyForSingleProductUpsell"
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
				<div v-if="upsell.additionalSubtotalRequirement">
					<progress-bar
						:class="$style.progressBar"
						:current="cart.subtotal"
						:goal="cart.subtotal + upsell.additionalSubtotalRequirement"
					/>

					<div :class="$style.bodyText">{{ progressText }}</div>

					<div :class="$style.actionLabel" @click="$emit('continue-shopping')">
						Keep Shopping
					</div>
				</div>

				<div v-else>
					<div
						v-if="isMultipleItemUpsell"
						:class="$style.actionLabel"
						@click="$emit('choose-product')">
						{{ actionLabel }}
					</div>

					<upsell-product-card
						v-else
						:variant="firstUpsellItem"
						:tier="userTier"
						@add-product="item => $emit('add-product', item)"
					/>
				</div>
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
			validator: value => value && value.tier,
		},
		isOpen: Boolean,
	},

	computed: {
		actionLabel() {
			const { productType } = (this.upsell || {});

			if (!productType) return 'Choose a Product';

			const vowels = ['a', 'e', 'i', 'o', 'u'];
			const firstLetter = productType[0].toLowerCase();
			const startsWithVowel = vowels.includes(firstLetter);
			const article = startsWithVowel ? 'an' : 'a';

			return `Choose ${article} ${productType}`;
		},

		firstUpsellItem() {
			return this.upsell && this.upsell.variants[0];
		},

		isMultipleItemUpsell() {
			return this.upsell && this.upsell.variants.length > 1;
		},

		userTier() {
			return this.wallet && this.wallet.tier;
		},

		// eslint-disable-next-line multiline-comment-style,spaced-comment
		/**************************************************************
			OFFER TITLE NEEDS TO START WITH A VERB
			e.g. "Get a bundle for $20", "Receive a free hat", etc.
		**************************************************************/
		progressText() {
			const offerTitle = this.upsell && this.upsell.title.toLowerCase();
			const formattedAmount = this.formatCurrency(this.upsell.additionalSubtotalRequirement);

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

	.isOpen .arrow {
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
