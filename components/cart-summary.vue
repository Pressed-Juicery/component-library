<template>
	<div class="cart-summary">
		<div class="cart-summary__row">
			<h1 class="cart-summary__title">Your Cart</h1>
			<p class="cart-summary__item-count">{{ cart.itemCount }} items</p>
		</div>

		<div class="cart-summary__cart-items">
			<cart-item-card class="cart-summary__cart-item"
			                v-for="item in cartItems"
			                :key="item.name"
			                :item="item">
			</cart-item-card>
		</div>

		<div class="cart-summary__prices-summary">
			<div class="cart-summary__row">
				<p class="cart-summary__subtotal-label">Subtotal</p>
				<p class="cart-summary__subtotal">{{ formatPrice(cart.subtotal) }}</p>
			</div>

			<div class="cart-summary__row">
				<p class="cart-summary__shipping-label">Shipping/Delivery</p>
				<p v-if="cart.shippingPrice" class="cart-summary__shipping-price">
					{{ formatPrice(cart.shippingPrice) }}
				</p>
				<p v-else class="cart-summary__shipping-info">calculated at next step</p>
			</div>

			<div v-if="cart.discounts && cart.discounts.length">
				<div class="cart-summary__row"
				     v-for="discount in cart.discounts"
				     :key="discount.name">
					<p class="cart-summary__discount-label">{{ discount.name }}</p>
					<p class="cart-summary__discount-amount">{{ formatPrice(-Math.abs(discount.amount)) }}</p>
				</div>
			</div>
		</div>

		<div class="cart-summary__row">
			<p class="cart-summary__total-label">Estimated Total</p>
			<p class="cart-summary__total">{{ formatPrice(cart.subtotal) }}</p>
		</div>
	</div>
</template>

<script>
import CartItemCard from './cart-item-card';

import { currency } from '../utilities/formatters';

export default {
	props: {
		cart: Object,
	},

	components: {
		CartItemCard,
	},

	computed: {
		cartItems() {
			return this.cart.items.map(item => {
				let additionalInformation = '';

				if (item.modifiers && item.modifiers.bundleItems) {
					additionalInformation = item.modifiers.bundleItems;
				} else if (item.modifiers && item.modifiers.toppings) {
					additionalInformation = item.modifiers.toppings;
				}

				return { ...item, additionalInformation };
			});
		},
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

	.cart-summary {
		padding: $spacing-07 $spacing-03;
	}

	.cart-summary__row {
		display: flex;
		justify-content: space-between;
	}

	.cart-summary__title {
		margin-bottom: $spacing-07;
	}

	.cart-summary__cart-items {
		margin-bottom: $spacing-05;
	}

	.cart-summary__cart-item {
		margin-bottom: $spacing-03;
	}

	.cart-summary__prices-summary {
		padding-bottom: $spacing-06;
		margin-bottom: $spacing-06;
		border-bottom: $border-width solid $border-color;
	}

	.cart-summary__subtotal-label, .cart-summary__subtotal {
		margin-bottom: $spacing-03;
	}

	.cart-summary__shipping-info {
		color: $gray-40;
	}
</style>
