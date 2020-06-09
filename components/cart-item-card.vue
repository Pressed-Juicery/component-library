<template>
	<div :class="[$style.root, {[$style.hasCardExtension]: additionalInformation}]" >
		<card :class="$style.card">
			<div :class="$style.imageWrapper">
				<img :class="$style.image" :src="item.imageSrc" :alt="item.variant.name" />
			</div>

			<div :class="$style.descriptionWrapper">
				<div :class="$style.description">
					<div :class="$style.title">{{ item.variant.name }}</div>
					<div :class="$style.price">{{ displayPrice }}</div>
				</div>

				<quantity-selector @change="handleQuantityChange" :quantity="item.quantity"/>
			</div>
		</card>
		<div v-if="additionalInformation" :class="$style.detailsWrapper">
			<div :class="$style.additionalInfo">
				<span v-if="item.modifiers && item.modifiers.toppings">Toppings: </span>
				{{ additionalInformation }}
			</div>
		</div>
	</div>
</template>

<script>
import Card from './card.vue';
import QuantitySelector from './quantity-selector';
import { formatCurrency } from '../utilities/formatters';

export default {
	components: { Card, QuantitySelector },

	props: {
		item: Object,
	},

	computed: {
		additionalInformation() {
			return this.item.additionalInformation
				|| this.item.bundleItems
				|| (this.item.modifiers && this.item.modifiers.toppings)
				|| '';
		},
		displayPrice() {
			return formatCurrency(this.item.price);
		},
	},

	methods: {
		handleQuantityChange(quantity) {
			this.$emit('change', { id: this.item.id, name: this.item.variant.name, quantity });
		},
	},
};
</script>

<style module lang="scss">
	@import '../styles/mixins';
	@import '../styles/variables';

	.root {
		margin-bottom: $spacing-03;
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
		align-items: center;
	}

	.description {
		flex: 1;
	}

	.title,
	.price {
		@include text-bold();
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
