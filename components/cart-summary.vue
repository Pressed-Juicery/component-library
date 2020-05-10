<template>
	<div class="cart-summary">
		<div class="cart-summary__header cart-summary__row">
			<div class="cart-summary__title">Your Cart</div>
			<div class="cart-summary__item-count">{{ cart.itemCount }} Items</div>
		</div>

		<cart-item-card v-for="(item, index) in cartItems" :key="index" :item="item" />

		<div class="cart-summary__prices-summary">
			<div class="cart-summary__prices-summary-row cart-summary__row">
				<div class="cart-summary__subtotal-label">Subtotal</div>
				<div class="cart-summary__subtotal">{{ formatPrice(cart.subtotal) }}</div>
			</div>

			<div class="cart-summary__prices-summary-row cart-summary__row">
				<div class="cart-summary__shipping-label">Shipping/Delivery</div>
				<div v-if="cart.shippingPrice" class="cart-summary__shipping-price">
					{{ formatPrice(cart.shippingPrice) }}
				</div>
				<div v-else class="cart-summary__shipping-info">calculated at next step</div>
			</div>

			<div v-if="cart.discounts && cart.discounts.length">
				<div class="cart-summary__prices-summary-row cart-summary__row"
				     v-for="discount in cart.discounts"
				     :key="discount.name">
					<div class="cart-summary__discount-label">{{ discount.name }}</div>
					<div class="cart-summary__discount-amount">{{ formatPrice(-Math.abs(discount.amount)) }}</div>
				</div>
			</div>
		</div>

		<div class="cart-summary__row">
			<div class="cart-summary__total-label">Estimated Total</div>
			<div class="cart-summary__total">{{ formatPrice(cart.total) }}</div>
		</div>
	</div>
</template>

<script>
import CartItemCard from './cart-item-card';

import { formatCurrency } from '../utilities/formatters';

export default {
	props: {
		cart: Object,
	},

	components: { CartItemCard },

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
			return formatCurrency(amount);
		},
	},
};
</script>

<style lang="scss">
	@import '../styles/mixins';
	@import '../styles/variables';

	.cart-summary__row {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.cart-summary__header {
		margin-bottom: $spacing-07;
	}

	.cart-summary__title {
		@include text-heading-4();
	}

	.cart-summary__item-count {
		@include text-bold();
	}

	.cart-summary__prices-summary {
		border-width: 1px 0;
		border-style: solid;
		border-color: $border-color-light;
		padding: $spacing-05 0;
		margin: $spacing-06 0;
	}

	.cart-summary__prices-summary-row {
		line-height: $spacing-06;
	}

	.cart-summary__shipping-info {
		@include text-body-small();
	}

	.cart-summary__discount-label {
		@include text-bolder();
	}

	.cart-summary__discount-amount {
		@include text-bolder();
	}

	.cart-summary__total-label {
		@include text-bolder();
	}

	.cart-summary__total {
		@include text-heading-5();
	}
</style>
