<template>
	<div>
		<div :class="[$style.row]">
			<div :class="[$style.subtotalToggle, { [$style.isOpen]: isOpen }]" @click="toggle()">
				<div>Subtotal</div>
				<arrow-down-icon v-if="cart.discounts && cart.discounts.length" :class="$style.icon" />
			</div>
			<div :class="$style.rowGroup">
				<div v-if="cart.originalTotalPrice" :class="$style.originalTotalPrice">
					{{ formatCurrency(cart.originalTotalPrice) }}
				</div>
				<div>{{ formatCurrency(cart.subtotal) }}</div>
			</div>
		</div>

		<div v-if="isOpen && cart.discounts && cart.discounts.length"
		     :class="[$style.row]"
		     v-for="discount in cart.discounts"
		     :key="discount.name">
			<div :class="$style.discountLabel">{{ discount.name }}</div>
			<div :class="$style.discountAmount">{{ formatCurrency(-Math.abs(discount.amount)) }}</div>
		</div>

		<div :class="[$style.row]">
			<div>Shipping/Delivery</div>
			<div v-if="cart.shippingPrice">{{ formatCurrency(cart.shippingPrice) }}</div>
			<div v-else :class="$style.shippingInfo">calculated at next step</div>
		</div>

		<div :class="$style.row">
			<div :class="$style.totalLabel">Estimated Total</div>
			<div :class="$style.total">{{ formatCurrency(cart.total) }}</div>
		</div>
	</div>
</template>

<script>
	import ArrowDownIcon from './icons/arrow-down-icon';
	import { formatCurrency } from '../utilities/formatters';

	export default {
		components: { ArrowDownIcon },

		props: {
			cart: Object,
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
	}
</script>

<style module lang="scss">
	@import '../styles/mixins';
	@import '../styles/variables';

	.row {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: $spacing-03 0;
	}

	.subtotalToggle {
		display:flex;
		align-items: center;
		cursor: pointer;
	}

	.icon {
		width: $spacing-04;
		fill: $gray-90;
		margin-left: $spacing-03;
	}

	.isOpen {
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
	}

	.discountLabel,
	.discountAmount {
		@include text-body-small();
		@include text-bold();
		@include text-subtle();
	}

	.totalLabel {
		@include text-bolder();
	}

	.total {
		@include text-heading-5();
	}
</style>
