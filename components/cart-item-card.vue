<template>
	<card class="cart-item-card">
		<span class="cart-item-card__image-container">
			<img class="cart-item-card__image" :src="item.imageUrl" :alt="item.name" />
		</span>

		<div class="cart-item-card__description"
		     :class="{ 'cart-item-card__description--reduced-height': !item.additionalInformation }">
			<div class="cart-item-card__main-content">
				<div class="cart-item-card__title">{{ item.name }}</div>
				<div v-if="item.additionalInformation" class="cart-item-card__additional-info">
					{{ item.additionalInformation }}
				</div>
				<div class="cart-item-card__quantity">Qty {{ item.quantity }}</div>
			</div>

			<span class="cart-item-card__price">{{ displayPrice }}</span>
		</div>
	</card>
</template>

<script>
import Card from './card.vue';
import { currency } from '../utilities/formatters';

export default {
	components: { Card },

	props: {
		item: Object,
	},

	methods: {
		formatPrice(amount) {
			return currency(amount);
		},
	},
};
</script>

<style lang="scss">
	@import '../styles/variables';

	.cart-item-card {
		display: flex;
	}

	.cart-item-card__image-container {
		width: 80px;
		margin: 0 auto -12px;
	}

	.cart-item-card__image {
		width: 100%;
	}

	.cart-item-card__main-content {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin-left: $spacing-04;
		margin-right: $spacing-06;
		word-break: break-word;
	}

	.cart-item-card__title {
		margin-bottom: $spacing-02;
	}

	.cart-item-card__additional-info {
		margin-bottom: $spacing-02;
		color: $gray-70;
	}
</style>
