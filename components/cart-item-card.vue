<template>
	<card class="cart-item-card">
		<div class="cart-item-card__image-wrapper">
			<img class="cart-item-card__image" :src="item.imageUrl" :alt="item.name" />
		</div>

		<div class="cart-item-card__description">
			<div class="cart-item-card__main-content">
				<div class="cart-item-card__title">{{ item.name }}</div>
				<div class="cart-item-card__additional-info">{{ item.additionalInformation }}</div>
				<div class="cart-item-card__quantity">Qty {{ item.quantity }}</div>
			</div>

			<span class="cart-item-card__price">{{ displayPrice }}</span>
		</div>
	</card>
</template>

<script>
import Card from './card.vue';
import { formatCurrency } from '../utilities/formatters';

export default {
	components: { Card },

	props: {
		item: Object,
	},

	computed: {
		displayPrice() {
			return formatCurrency(this.item.price);
		},
	},
};
</script>

<style scoped lang="scss">
	@import '../styles/mixins';
	@import '../styles/variables';

	.cart-item-card {
		display: flex;
		padding: $spacing-04;
	}

	.cart-item-card__image-wrapper {
		width: $spacing-10;
		margin-right: $spacing-04;
	}

	.cart-item-card__image {
		width: 100%;
	}

	.cart-item-card__description {
		display: flex;
		flex: 1;
	}

	.cart-item-card__main-content {
		flex: 1;
	}

	.cart-item-card__title,
	.cart-item-card__price {
		@include text-bold();
	}

	.cart-item-card__additional-info,
	.cart-item-card__quantity {
		@include text-body-small();
	}

	.cart-item-card__additional-info {
		color: $color-text-gray;
		margin-bottom: $spacing-03;
	}
</style>
