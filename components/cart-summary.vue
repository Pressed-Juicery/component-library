<template>
	<div class="cart-summary">
		<div class="cart-summary__row">
			<div class="cart-summary__title">Your Cart</div>
			<div class="cart-summary__item-count">{{ cart.itemCount }} items</div>
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
				<div class="cart-summary__subtotal-label">Subtotal</div>
				<div class="cart-summary__subtotal">{{ formatPrice(cart.subtotal) }}</div>
			</div>

			<div class="cart-summary__row">
				<div class="cart-summary__shipping-label">Shipping/Delivery</div>
				<div v-if="cart.shippingPrice" class="cart-summary__shipping-price">
					{{ formatPrice(cart.shippingPrice) }}
				</div>
				<div v-else class="cart-summary__shipping-info">calculated at next step</div>
			</div>

			<div v-if="cart.discounts && cart.discounts.length">
				<div class="cart-summary__row"
				     v-for="discount in cart.discounts"
				     :key="discount.name">
					<div class="cart-summary__discount-label">{{ discount.name }}</div>
					<div class="cart-summary__discount-amount">{{ formatPrice(-Math.abs(discount.amount)) }}</div>
				</div>
			</div>
		</div>

		<div class="cart-summary__row">
			<div class="cart-summary__total-label">Total</div>
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

	.cart-summary {
		padding: $spacing-07 $spacing-03;
	}

	.cart-summary__row {
		display: flex;
		justify-content: space-between;
		margin-bottom: $spacing-03;
	}

	.cart-summary__title {
		@include text-heading-4();
		@include text-bolder();

		margin-bottom: $spacing-06;
	}

	.cart-summary__item-count {
		@include text-heading-4();
		@include text-normal();
	}

	.cart-summary__cart-items {
		margin-bottom: $spacing-05;
	}

	.cart-summary__cart-item {
		margin-bottom: $spacing-03;
	}

	.cart-summary__prices-summary {
		padding-bottom: $spacing-03;
		margin-bottom: $spacing-05;
		border-bottom: $border-width solid $border-color;
	}

	.cart-summary__shipping-info {
		margin-left: $spacing-03;
		text-align: right;
		color: $gray-40;
	}

	.cart-summary__discounts {
		padding-bottom: $spacing-03;
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
		@include text-heading-4();
		@include text-normal();
	}
</style>
