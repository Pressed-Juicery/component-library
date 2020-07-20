<template>
	<div>
		<div :class="[$style.row, $style.rowGroup]">
			<div :class="[$style.rowGroup, {
			         [$style.isClosed]: !isDiscountListOpen,
			         [$style.subtotalToggle]: cart.discountSummary && cart.discountSummary.length
			     }]"
			     @click="toggleDiscountSummary()">
				<div>Subtotal</div>
				<up-caret-icon v-if="cart.discountSummary && cart.discountSummary.length" :class="$style.icon" />
			</div>

			<div :class="$style.rowGroup">
				<div v-if="cart.originalSubtotal !== cart.subtotal" :class="$style.originalSubtotal">
					{{ formatCurrency(cart.originalSubtotal) }}
				</div>
				<div>{{ formatCurrency(cart.subtotal) }}</div>
			</div>
		</div>

		<div v-if="isDiscountListOpen && cart.discountSummary && cart.discountSummary.length">
			<div :class="[$style.row, $style.rowGroup]"
			     v-for="discount in cart.discountSummary"
			     :key="discount.name">
				<div :class="$style.discountLabel">{{ discount.name }}</div>
				<div :class="$style.discountAmount">{{ formatCurrency(-Math.abs(discount.totalDiscount)) }}</div>
			</div>
		</div>

		<div :class="[$style.row, $style.rowGroup]">

			<div v-if="cart.fulfillmentSelection && cart.fulfillmentSelection.method">
				<div :class="[$style.rowGroup, {
							[$style.isClosed]: !isTipSummaryOpen,
							[$style.subtotalToggle]: isLocalDelivery,
						}]"
						@click="toggleTipSummary()">
					{{ cart.fulfillmentSelection.method }}
					<up-caret-icon v-if="isLocalDelivery && hasFulfillmentPriceDiscount" :class="$style.icon" />
				</div>
			</div>
			<div v-else>Shipping/Delivery</div>

			<div v-if="isLocalDelivery && hasFulfillmentPriceDiscount" :class="$style.rowGroup">
				<div :class="$style.originalSubtotal">{{ formatCurrency(cart.originalFulfillmentPrice) }}</div>
				<div>FREE</div>
			</div>
			<div v-else-if="cart.fulfillmentPrice && !hasFulfillmentPriceDiscount">{{ formatCurrency(cart.fulfillmentPrice) }}</div>
			<div v-else-if="!cart.isShippingAvailable" :class="$style.dashes">- - -</div>
			<div v-else :class="$style.fulfillmentInfo">calculated at next step</div>
		</div>

		<div v-if="isLocalDelivery && hasFulfillmentPriceDiscount">
			<div v-if="isTipSummaryOpen && hasFulfillmentPriceDiscount" :class="$style.row">
				<div :class="[$style.row, $style.rowGroup, $style.discountAmount]">
					<div>Free local delivery (just pay tip)</div>
					<div :class="$style.discountAmount">{{ formatCurrency(-Math.abs(cart.originalFulfillmentPrice)) }}</div>
				</div>
			</div>
		</div>

		<div v-if="isLocalDelivery && hasFulfillmentPriceDiscount" :class="[$style.row, $style.rowGroup]">
			<div>Delivery Tip</div>
			<div>{{ formatCurrency(cart.fulfillmentPrice) }}</div>
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
			isDiscountListOpen: false,
			isTipSummaryOpen: false,
		};
	},

	computed: {
		isLocalDelivery() {
			return this.cart.fulfillmentSelection && this.cart.fulfillmentSelection.method === 'Local Delivery';
		},

		hasFulfillmentPriceDiscount() {
			return this.cart.fulfillmentPrice !== this.cart.originalFulfillmentPrice;
		}
	},

	methods: {
		formatCurrency(amount) {
			return formatCurrency(amount);
		},

		toggleDiscountSummary() {
			this.isDiscountListOpen = !this.isDiscountListOpen;
		},

		toggleTipSummary() {
			this.isTipSummaryOpen = !this.isTipSummaryOpen;
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

	.alignRight {
		text-align: right;
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
