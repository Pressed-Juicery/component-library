<template>
	<div :class="[$style.root, {[$style.hasCardExtension]: hasModifiers}]" @click="$emit('click', item)">
		<card :class="$style.card">
			<div :class="$style.imageWrapper">
				<img :class="$style.image" :src="item.variant.imageUrl" :alt="item.variant.name" />
			</div>

			<div :class="$style.descriptionWrapper">
				<div :class="$style.description">
					<div :class="$style.title">{{ item.variant.name }}</div>
					<div :class="$style.priceWrapper">
						<div v-if="item.originalPrice !== item.price" :class="$style.originalPrice">
							{{ formatCurrency(item.originalPrice) }}
						</div>
						<div :class="$style.price">{{ formatCurrency(item.price) }}</div>
					</div>
				</div>

				<quantity-selector @change="handleQuantityChange" :quantity="item.quantity" @click.native.stop />
			</div>
		</card>
		<div v-if="hasModifiers" :class="$style.detailsWrapper">
			<div :class="$style.additionalInfo" v-for="(modifiers, groupName) in modifierSummary" :key="groupName">
				{{ groupName }}: {{ modifiers }}
			</div>
		</div>
	</div>
</template>

<script>
import Card from './card.vue';
import QuantitySelector from './quantity-selector';
import { formatCurrency } from '../utilities/formatters';
import { getCartItemModifierSummary } from '../utilities/get-cart-item-modifier-summary';

export default {
	components: { Card, QuantitySelector },

	props: {
		item: Object,
	},

	computed: {
		hasModifiers() {
			return this.item.modifiers && this.item.modifiers.length;
		},
		modifierSummary() {
			return getCartItemModifierSummary(this.item.modifiers);
		},
	},

	methods: {
		handleQuantityChange(quantity) {
			this.$emit('change', { id: this.item.id, name: this.item.variant.name, quantity });
		},

		formatCurrency(number) {
			return formatCurrency(number);
		},
	},
};
</script>

<style module lang="scss">
	@import '../styles/mixins';
	@import '../styles/variables';

	.root {
		margin-bottom: $spacing-03;

		&:last-of-type {
			margin-bottom: 0;
		}
	}

	.root.hasCardExtension .card {
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
	}

	.card {
		display: flex;
		padding: $spacing-04;
	}

	.imageWrapper {
		width: $spacing-10;
		margin-right: $spacing-04;
	}

	.image {
		width: 100%;
	}

	.descriptionWrapper {
		display: flex;
		flex: 1;
	}

	.description {
		flex: 1;
	}

	.priceWrapper {
		display: flex;
	}

	.title,
	.price {
		@include text-bold();
	}

	.originalPrice {
		@include text-subtle();
		@include text-strikethrough();

		margin-right: $spacing-03;
	}

	.detailsWrapper {
		border-top: 1px solid $gray-30;
		background-color: $beige;
		border-bottom-left-radius: $border-radius;
		border-bottom-right-radius: $border-radius;
		padding: $spacing-03 $spacing-06;
	}

	.additionalInfo,
	.quantity {
		@include text-body-small();
	}

	.additionalInfo {
		color: $color-text-gray;
	}
</style>
