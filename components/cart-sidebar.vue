<template>
	<sidebar-overlay :is-active="isActive" @close="$emit('close')">

		<cart-navigation slot="navigation"
			:shouldShowBackButton="shouldShowBackButton"
			@back="setCartState"
			@close="$emit('close')" />

		<div v-if="state === 'cart'">
			<cart-summary
				:class="$style.cartSummary"
				@change="handleQuantityChange"
				:cart="cart"
				:can-update-quantity="true"
			/>
			<cart-discount-input @submit="handleDiscountCode" />
			<hr :class="$style.partition">
			<!-- <cart-points-display @stateChange="setCartState" :user="user" /> -->
		</div>

		<!-- <div v-if="state === 'points'">
			<cart-points-redemption :user="user" :redemption-rates="redemptionRates"/>
		</div> -->

		<cart-checkout-footer slot="footer" :cart="cart" @continue="$emit('continue')" />

	</sidebar-overlay>
</template>

<script>
import CartCheckoutFooter from './cart-checkout-footer';
import CartDiscountInput from './cart-discount-input';
import CartNavigation from './cart-navigation';

// import CartPointsDisplay from './cart-points-display';
// import CartPointsRedemption from './cart-points-redemption';
import CartSummary from './cart-summary';
import SidebarOverlay from './sidebar-overlay';

export default {
	components: {
		CartCheckoutFooter,
		CartDiscountInput,
		CartNavigation,

		// CartPointsDisplay,
		// CartPointsRedemption,
		CartSummary,
		SidebarOverlay,
	},
	props: {
		isActive: Boolean,
		cart: Object,
		user: Object,
		redemptionRates: {
			type: Array,
			required: true,
		},
	},
	data() {
		return {
			state: 'cart',
		};
	},
	methods: {
		setCartState(state) { this.state = state },

		handleDiscountCode(discount) { // eslint-disable-line no-unused-vars
			// Placeholder for discount handler
		},

		handleQuantityChange(quantity) {
			this.$emit('cart-quantity-change', quantity);
		},

	},
	computed: {
		shouldShowBackButton() { return this.state !== 'cart' },
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
