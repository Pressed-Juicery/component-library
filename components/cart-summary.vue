<template>
	<div>
		<div :class="[$style.header, $style.row]">
			<div :class="$style.title">Your Cart</div>
			<div :class="$style.itemCount">{{ cart.itemCount }} Items</div>
		</div>

		<cart-item-card v-for="(item, index) in cart.items" :key="index" :item="item" />

		<div :class="$style.pricesSummary">
			<div :class="[$style.pricesSummaryRow, $style.row]">
				<div>Subtotal</div>
				<div>{{ formatCurrency(cart.subtotal) }}</div>
			</div>

			<div :class="[$style.pricesSummaryRow, $style.row]">
				<div>Shipping/Delivery</div>
				<div v-if="cart.shippingPrice">{{ formatCurrency(cart.shippingPrice) }}</div>
				<div v-else :class="$style.shippingInfo">calculated at next step</div>
			</div>

			<div v-if="cart.discounts && cart.discounts.length">
				<div :class="[$style.pricesSummaryRow, $style.row]"
				     v-for="discount in cart.discounts"
				     :key="discount.name">
					<div :class="$style.discountLabel">{{ discount.name }}</div>
					<div :class="$style.discountAmount">{{ formatCurrency(-Math.abs(discount.amount)) }}</div>
				</div>
			</div>
		</div>

		<div :class="$style.row">
			<div :class="$style.totalLabel">Estimated Total</div>
			<div :class="$style.total">{{ formatCurrency(cart.total) }}</div>
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

	methods: {
		formatCurrency(amount) {
			return formatCurrency(amount);
		},
	},
};
</script>

<style module lang="scss">
	@import '../styles/mixins';
	@import '../styles/variables';

	.row {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.header {
		margin-bottom: $spacing-07;
	}

	.title {
		@include text-heading-4();
	}

	.itemCount {
		@include text-bold();
	}

	.pricesSummary {
		border-width: 1px 0;
		border-style: solid;
		border-color: $border-color-light;
		padding: $spacing-05 0;
		margin: $spacing-06 0;
	}

	.pricesSummaryRow {
		line-height: $spacing-06;
	}

	.shippingInfo {
		@include text-body-small();
	}

	.discountLabel,
	.discountAmount,
	.totalLabel {
		@include text-bolder();
	}

	.total {
		@include text-heading-5();
	}
</style>
