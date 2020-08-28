<template>
	<div v-if="selectedVariant">
		<div :class="$style.variantName">{{ selectedVariant.name }}</div>
		<img :class="$style.image" :src="selectedVariant.imageUrl">

		<div :class="$style.information">
			<div :class="$style.price">
				<span v-if="shouldShowSalePrice">{{ salePrice | currency }}</span>
				<span :class="{[$style.slashed]: shouldShowSalePrice}">{{ price | currency }}</span>
			</div>
			<div v-if="selectedVariant.nutritionSummary && selectedVariant.nutritionSummary.calories">
				{{ selectedVariant.nutritionSummary.calories }} cal/serving
			</div>
		</div>

		<div v-if="shouldShowCta" :class="$style.cta">
			Just <span v-if="shouldShowMemberSale">{{ selectedVariant.memberSalePrice | currency }}</span>
			<span :class="{[$style.slashed]: shouldShowMemberSale}">{{ selectedVariant.memberPrice | currency }}</span>
			for our VIP Members

			<div :class="$style.learnMore">
				<slot />
			</div>
		</div>

		<validated-select
			v-if="variantOptions.length > 1"
			:class="$style.variantSelector"
			:options="variantOptions"
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
		product: {
			type: Object,
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
		};
	},
	computed: {
		variantOptions() {
			return (this.product || []).variants.map(variant => {
				return {
					name: variant.name,
					value: variant,
				};
			});
		},
		shouldShowCta() {
			return !this.isVip && this.selectedVariant.memberPrice !== this.selectedVariant.nonMemberPrice;
		},
		shouldShowSalePrice() {
			return Boolean(this.salePrice && (this.hasMemberSalePrice || this.nonMemberSale));
		},
		shouldShowMemberSale() {
			return Boolean(this.selectedVariant.memberSalePrice && this.hasMemberSalePrice);
		},
		price() {
			return this.isVip
				? this.selectedVariant.memberPrice
				: this.selectedVariant.nonMemberPrice;
		},
		salePrice() {
			return this.isVip
				? this.selectedVariant.memberSalePrice
				: this.selectedVariant.nonMemberSalePrice;
		},
		hasMemberSalePrice() {
			return Boolean(this.selectedVariant.memberSalePrice);
		},
		nonMemberSale() {
			return Boolean(this.selectedVariant.nonMemberSalePrice);
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
};
</script>

<style module lang="scss">
	@import "../styles/variables";
	@import "../styles/mixins";

	.variantName {
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

	.variantSelector {
		margin-bottom: $spacing-03;
	}

	.slashed {
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
