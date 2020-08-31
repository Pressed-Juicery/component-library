<template>
	<div v-if="selectedVariant">
		<div :class="$style.variantName">{{ selectedVariant.name }}</div>
		<img :class="$style.image" :src="selectedVariant.imageUrl">

		<div :class="$style.information">
			<div :class="$style.price">
				<span v-if="salePrice">{{ salePrice | currency }}</span>
				<span :class="{ [$style.strikethrough]: salePrice }">{{ price | currency }}</span>
			</div>
			<div v-if="selectedVariant.nutritionSummary && selectedVariant.nutritionSummary.calories">
				{{ selectedVariant.nutritionSummary.calories }} cal/serving
			</div>
		</div>

		<div v-if="shouldShowCta" :class="$style.cta">
			Just <span v-if="hasMemberSalePrice">{{ selectedVariant.memberSalePrice | currency }}</span>
			<span :class="{ [$style.strikethrough]: hasMemberSalePrice }">
				{{ selectedVariant.memberPrice | currency }}
			</span>
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

		<addon-options
			v-if="hasAddons"
			:class="$style.addonOptions"
			:addon-group="product.addonGroup"
			:selected-addons="selection"
			@submit="addSelected"
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
import AddonOptions from './addon-options';
import ValidatedSelect from './validated-select';
import { formatCurrency } from '../utilities/formatters';

export default {
	components: { AddonOptions, ValidatedSelect },
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
		},
	},
	data() {
		return {
			quantity: 1,
			selection: [],
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
		hasModifiers() {
			return Boolean(this.product.toppingModifiers && Object.keys(this.product.toppingModifiers).length > 0);
		},
		hasAddons() {
			return Boolean(this.product.addonGroup && Object.keys(this.product.addonGroup).length > 0);
		},
	},
	methods: {
		addToCart() {
			this.$emit('addToCart', {
				variantId: this.selectedVariant.id,
				quantity: Number(this.quantity),
				addons: this.selection,
			});
		},
		addSelected(selected) {
			this.selection = selected;
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

	.price {
		@include text-heading-5();
	}

	.cta {
		margin-bottom: $spacing-06;
	}

	.learnMore {
		@include text-body-small();
		text-decoration: underline;
	}

	.variantSelector,
	.addonOptions {
		margin-bottom: $spacing-03;
	}

	.strikethrough {
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
