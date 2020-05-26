<template>
	<div>
		<div :class="[$style.row, $style.rowGroup]">
			<div :class="[$style.rowGroup, {
			         [$style.isClosed]: !isOpen,
			         [$style.subtotalToggle]: cart.discounts && cart.discounts.length
			     }]"
			     @click="toggle()">
				<div>Subtotal</div>
				<up-caret-icon v-if="cart.discounts && cart.discounts.length" :class="$style.icon" />
			</div>

			<div :class="$style.rowGroup">
				<div v-if="cart.originalTotalPrice" :class="$style.originalTotalPrice">
					{{ formatCurrency(cart.originalTotalPrice) }}
				</div>
				<div>{{ formatCurrency(cart.subtotal) }}</div>
			</div>
		</div>

		<div v-if="isOpen && cart.discounts && cart.discounts.length">
			<div :class="[$style.row, $style.rowGroup]"
			     v-for="discount in cart.discounts"
			     :key="discount.name">
				<div :class="$style.discountLabel">{{ discount.name }}</div>
				<div :class="$style.discountAmount">{{ formatCurrency(-Math.abs(discount.amount)) }}</div>
			</div>
		</div>

		<div :class="[$style.row, $style.rowGroup]">
			<div v-if="cart.fulfillmentSelection && cart.fulfillmentSelection.method">
				{{ cart.fulfillmentSelection.method }}
			</div>
			<div v-else>Shipping/Delivery</div>

			<div v-if="shippingPrice">{{ formatCurrency(shippingPrice) }}</div>
			<div v-else-if="shippingPrice === 0" :class="$style.shippingInfo">Free</div>
			<div v-else-if="!cart.isShippingAvailable" :class="$style.dashes">- - -</div>
			<div v-else :class="$style.shippingInfo">calculated at next step</div>
		</div>

		<div :class="[$style.totalRow, $style.rowGroup]">
			<div :class="$style.totalLabel">Estimated Total</div>
			<div :class="$style.total">{{ formatCurrency(cart.total) }}</div>
		</div>
	</div>
</template>

<script>
import UpCaretIcon from './icons/up-caret-icon';
import { formatCurrency } from '../utilities/formatters';

export default {
	components: { UpCaretIcon },

	props: {
		cart: {
			type: Object,
			required: true,
		},
	},

	data() {
		return {
			isOpen: false,
		};
	},

	methods: {
		formatCurrency(amount) {
			return formatCurrency(amount);
		},

		toggle() {
			this.isOpen = !this.isOpen;
		},
	},

	computed: {
		shippingPrice() {
			return this.cart.fulfillmentSelection && this.cart.fulfillmentSelection.price;
		},
	},
};
</script>

<style module lang="scss">
	@import '../styles/mixins';
	@import '../styles/variables';

	.row {
		justify-content: space-between;
		margin-bottom: $spacing-04;
	}

	.rowGroup {
		display: flex;
		align-items: center;
	}

	.subtotalToggle {
		cursor: pointer;
	}

	.icon {
		margin-left: $spacing-03;
	}

	.isClosed {
		.icon {
			transform: rotate(180deg);
		}
	}

	.originalTotalPrice {
		@include text-subtle();
		@include text-strikethrough();

		margin-right: $spacing-03;
	}

	.shippingInfo {
		@include text-body-small();
		@include text-bold();

		margin-left: $spacing-02;
		text-align: right;
	}

	.dashes {
		@include text-bold();
	}

	.discountLabel,
	.discountAmount {
		@include text-body-small();
		@include text-bold();
		@include text-subtle();
	}

	.totalRow {
		justify-content: space-between;
	}

	.totalLabel {
		@include text-bolder();
	}

	.total {
		@include text-heading-5();
	}
</style>
