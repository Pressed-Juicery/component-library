<template>
	<div>
		<div :class="[$style.row, $style.rowGroup]">
			<div :class="[$style.rowGroup, {
			         [$style.subtotalToggle]: cart.discountSummary && cart.discountSummary.length
			     }]"
			     @click="toggle()">
				<div>Subtotal</div>
				<div v-if="cart.discountSummary && cart.discountSummary.length" :class="$style.discountToggle">
					{{ isOpen ? 'Hide Discounts' : 'Show Discounts'}}
				</div>
			</div>

			<div :class="$style.rowGroup">
				<div v-if="cart.originalSubtotal !== cart.subtotal" :class="$style.originalSubtotal">
					{{ formatCurrency(cart.originalSubtotal) }}
				</div>
				<div>{{ formatCurrency(cart.subtotal) }}</div>
			</div>
		</div>

		<div v-if="isOpen && cart.discountSummary && cart.discountSummary.length">
			<div :class="[$style.row, $style.rowGroup]"
			     v-for="discount in cart.discountSummary"
			     :key="discount.name">
				<div :class="$style.discountLabel">{{ discount.name }}</div>
				<div :class="$style.discountAmount">{{ formatCurrency(-Math.abs(discount.totalDiscount)) }}</div>
			</div>
		</div>

		<div :class="[$style.row, $style.rowGroup]">
			<div v-if="cart.fulfillmentSelection && cart.fulfillmentSelection.method">
				{{ cart.fulfillmentSelection.method }}
			</div>
			<div v-else>Shipping/Delivery</div>

			<div v-if="cart.fulfillmentPrice">{{ formatCurrency(cart.fulfillmentPrice) }}</div>
			<div v-else-if="cart.fulfillmentPrice === 0" :class="$style.fulfillmentInfo">Free</div>
			<div v-else-if="!cart.isShippingAvailable" :class="$style.dashes">- - -</div>
			<div v-else :class="$style.fulfillmentInfo">calculated at next step</div>
		</div>

		<div v-if="cart.bottleDeposit" :class="[$style.row, $style.rowGroup]">
			<div>Bottle Deposit Charge</div>
			<div>{{ formatCurrency(cart.bottleDeposit)}}</div>
		</div>

		<div v-if="cart.taxes" :class="[$style.row, $style.rowGroup]">
			<div>Taxes</div>
			<div>{{ formatCurrency(cart.taxes) }}</div>
		</div>

		<div v-if="tip || tip === 0" :class="[$style.row, $style.rowGroup]">
			<div>Tip</div>
			<div>{{ formatCurrency(tip) }}</div>
		</div>

		<div :class="[$style.totalRow, $style.rowGroup]">
			<div :class="$style.totalLabel">Estimated Total</div>
			<div :class="$style.total">{{ formatCurrency(cart.total + (tip || 0)) }}</div>
		</div>
	</div>
</template>

<script>
import { formatCurrency } from '../utilities/formatters';

export default {
	props: {
		tip: Number,
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

	.discountToggle {
		@include text-body-small;
		margin-left: $spacing-03;
		color: $color-text-gray;
	}

	.originalSubtotal {
		@include text-subtle();
		@include text-strikethrough();

		margin-right: $spacing-03;
	}

	.fulfillmentInfo {
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
