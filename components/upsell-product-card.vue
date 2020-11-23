<template>
	<card :class="$style.card">
		<div :class="$style.imageWrapper">
			<img :class="$style.image" :src="product.variant.imageUrl" :alt="product.variant.name" />
		</div>

		<div :class="$style.descriptionWrapper">
			<div :class="$style.description">
				<div :class="$style.title">{{ product.variant.name }}</div>
				<div :class="$style.priceWrapper">
					<div :class="$style.price">{{ formatCurrency(product.price) }}</div>
				</div>
			</div>

			<div :class="$style.button" @click="$emit('add-product', product)">Add</div>
		</div>
	</card>
</template>

<script>
import Card from './card.vue';
import { formatCurrency } from '../utilities/formatters';

export default {
	components: { Card },

	props: {
		product: Object,
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

	.root {
		margin-bottom: $spacing-03;
		cursor: pointer;

		&:last-of-type {
			margin-bottom: 0;
		}
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
		align-items: center;
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
		@include text-bold;
	}

	.button {
		@include button-pill-secondary;
	}

</style>
