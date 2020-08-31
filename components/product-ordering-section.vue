<template>
	<div v-if="selectedVariant">
		<div :class="$style.variantName">{{ selectedVariant.name }}</div>
		<img :class="$style.image" :src="selectedVariant.imageUrl">

		<div :class="$style.information">
			<div>
				<span v-if="salePrice" :class="$style.price">{{ salePrice | currency }}</span>
				<span :class="[{ [$style.strikethrough]: salePrice }, $style.price]">{{ price | currency }}</span>
				<span :class="$style.addonSummary" v-if="selectedAddons.length">
					{{ addonSummary }}
				</span>
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
			:class="$style.addonOptions"
			:addon-group="product.addonGroup"
			:selected-addons="selectedAddons"
			@submit="addons => selectedAddons = addons"
		/>

		<modifier-options
			:class="$style.modifierOptions"
			:modifiers="product.toppingModifiers"
			:selected-modifiers="selectedModifiers"
			@change="modifiers => selectedModifiers = modifiers"
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
import ModifierOptions from './modifier-options';
import ValidatedSelect from './validated-select';
import { formatCurrency } from '../utilities/formatters';

export default {
	components: { AddonOptions, ModifierOptions, ValidatedSelect },
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
			selectedAddons: [],
			selectedModifiers: [],
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
		addonSummary() {
			if (this.selectedAddons.length === 1) {
				const addonPrice = this.selectedAddons[0].price * this.quantity;

				return `(+$${addonPrice} ${this.selectedAddons[0].name})`;
			}

			const totalPrice = this.selectedAddons.reduce((acc, addon) => acc + addon.price, 0) * this.quantity;

			return `(+$${totalPrice} Enhancements)`;
		},
	},
	methods: {
		addToCart() {
			this.$emit('addToCart', {
				variantId: this.selectedVariant.id,
				quantity: Number(this.quantity),
				addons: this.selectedAddons,
				modifiers: this.selectedModifiers,
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
	.addonOptions,
	.modifierOptions {
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
