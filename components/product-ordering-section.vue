<template>
	<div v-if="selectedVariant">
		<div :class="$style.productName">{{ selectedVariant.name }}</div>
		<img :class="$style.image" :src="selectedVariant.imageUrl">

		<div :class="$style.information">
			<div :class="$style.price">{{ price | currency }}</div>
			<div v-if="selectedVariant.nutritionSummary.calories">
				{{ selectedVariant.nutritionSummary.calories }} cal/serving
			</div>
		</div>

		<div v-if="shouldShowCta" :class="$style.cta">
			<div>Just {{ selectedVariant.memberPrice | currency }} for our VIP Members</div>
			<a :class="$style.learnMore" href="https://pressedjuicery.com/">Learn More</a>
		</div>

		<validated-select
			v-if="options.length > 1"
			:class="$style.variant"
			:options="options"
			:value="selectedVariant"
			@input="value => this.$emit('variant-change', value)"
		/>

		<div :class="$style.actionsGroup">
			<input
				:class="$style.quantity"
				type="number"
				v-model="quantity"
				min="1"
			/>
			<button @click="addToCart">Add to cart</button>
		</div>
	</div>
</template>

<script>
import ValidatedSelect from './validated-select';
import { formatCurrency } from '../utilities/formatters';

export default {
	components: { ValidatedSelect },
	props: {
		isVip: {
			type: Boolean,
			required: true,
		},
		options: {
			type: Array,
			required: true,
		},
		selectedVariant: {
			type: Object,
			required: true,
		},
	},
	data() {
		return {
			quantity: 1,
			hasSale: false,
		};
	},
	computed: {
		shouldShowCta() {
			return !this.isVip && this.selectedVariant.memberPrice !== this.selectedVariant.nonMemberPrice;
		},
		price() {
			return this.isVip ? this.selectedVariant.memberPrice : this.selectedVariant.nonMemberPrice;
		},
		salePrice() {
			return this.isVip
				? this.selectedVariant.memberSalePrice
				: this.selectedVariant.nonMemberSalePrice;
		},
	},
	methods: {
		addToCart() {
			this.$emit('addToCart', {
				variantId: this.selectedVariant.id,
				quantity: Number(this.quantity),
			});
		},
	},
	filters: {
		currency(value) {
			return formatCurrency(value);
		},
	},
	created() {
		if (this.selectedVariant.memberSalePrice && this.selectedVariant.nonMemberSalePrice) {
			this.hasSale = true;
		}
	},
};
</script>

<style module lang="scss">
	@import "../styles/variables";
	@import "../styles/mixins";

	.productName {
		@include text-heading-4();
		margin-bottom: $spacing-05;
	}

	.image {
		width: 100%;
	}

	.information {
		display: flex;
		justify-content: space-between;
		margin-bottom: $spacing-06;
	}

	.cta {
		margin-bottom: $spacing-06;
	}

	.learnMore {
		@include text-body-small();
		text-decoration: underline;
	}

	.price {
		@include text-heading-5();
	}

	.variant {
		margin-bottom: $spacing-03;
	}

	.slashedPrice {
		@include text-strikethrough();
		@include text-subtle();
	}

	.actionsGroup {
		display: grid;
		grid-template-columns: $spacing-11 1fr;
		grid-gap: $spacing-03;
	}

	.quantity {
		text-align: center;
	}
</style>
