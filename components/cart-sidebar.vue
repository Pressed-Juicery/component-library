<template>
	<sidebar-overlay :active="active" @close="$emit('close')">

		<cart-navigation slot="navigation" @close="$emit('close')" />

		<div>
			<cart-summary :class="$style.cartSummary" :cart="cart" />
			<cart-discount-input @submit="$emit('submit-discount')"/>
			<hr :class="$style.partition">
			<cart-points-display />
		</div>

		<cart-checkout-footer slot="footer" :cart="cart" @checkout="$emit('checkout')"/>

	</sidebar-overlay>
</template>

<script>
import CartCheckoutFooter from './cart-checkout-footer';
import CartDiscountInput from './cart-discount-input';
import CartNavigation from './cart-navigation';
import CartPointsDisplay from './cart-points-display';
import CartSummary from './cart-summary';
import SidebarOverlay from './sidebar-overlay';

export default {
	components: {
		CartNavigation,
		SidebarOverlay,
		CartSummary,
		CartDiscountInput,
		CartPointsDisplay,
		CartCheckoutFooter,
	},
	props: {
		active: Boolean,
		cart: Object,
		user: Object,
	},
};
</script>

<style module lang="scss">
	@import '../styles/buttons';

	.cartSummary {
		margin-top: $spacing-07;
		margin-bottom: $spacing-05;
	}

	.partition {
		border: 1px solid $gray-30;
		margin: $spacing-05 0;
	}

</style>
