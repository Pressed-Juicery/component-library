<template>
	<div>
		<cart-totals :class="$style.totals" :cart="cart"/>
		<div :class="$style.checkoutDisclaimer">Taxes and delivery fees will be applied at checkout.</div>
		<button :class="[$style.checkOutButton, 'button--pill']" @click="$emit('checkout')">Check Out</button>
	</div>
</template>

<script>
import CartTotals from './cart-totals';

export default {
	components: { CartTotals },
	props: {
		cart: {
			type: Object,
		},
	},
};
</script>

<style module lang="scss">
	@import '../styles/buttons';

	.totals {
		padding-bottom: $spacing-07;
	}

	.checkoutDisclaimer {
		@include text-subtle;
		@include text-body-small;
		text-align: center;
		margin-bottom: $spacing-05;
	}

	.checkOutButton {
		width: 100%;
	}
</style>
