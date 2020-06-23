<template>
	<sidebar-overlay :is-open="isActive" :is-active="!isDrawerOpen" @close="$emit('close')">
		<cart-navigation
			:shouldShowBackButton="shouldShowBackButton"
			@back="setCartState('cart')"
			@close="$emit('close')"
		/>

		<div v-if="state === 'cart'">
			<cart-summary
				:class="$style.cartSummary"
				:cart="cart"
				:can-update-quantity="true"
				@change="changeSummary => $emit('cart-quantity-change', changeSummary)"
			/>
			<cart-discount-input @submit="discountCode => $emit('apply-discount-code', discountCode)" />
			<hr :class="$style.partition">
			<cart-points-display @click="setCartState('points')" :user="user" />
		</div>

		<cart-points-redemption v-else-if="state === 'points'" :user="user" :redemption-rates="redemptionRates" />

		<cart-checkout-footer :cart="cart" @continue="continueToCheckout()" />

		<drawer :is-open="isDrawerOpen" @close="closeDrawer">
			<checkout-authentication :guest="guest"
			                         @sign-up="$emit('sign-up')"
			                         @sign-in="credentials => $emit('sign-in', credentials)"
			                         @add-guest="guest => $emit('add-guest', guest)"
			                         @close="closeDrawer" />
		</drawer>
	</sidebar-overlay>
</template>

<script>
import CartCheckoutFooter from './cart-checkout-footer';
import CartDiscountInput from './cart-discount-input';
import CartNavigation from './cart-navigation';
import CartPointsDisplay from './cart-points-display';
import CartPointsRedemption from './cart-points-redemption';
import CartSummary from './cart-summary';
import CheckoutAuthentication from './checkout-authentication';
import Drawer from './drawer';
import SidebarOverlay from './sidebar-overlay';

export default {
	components: {
		CartCheckoutFooter,
		CartDiscountInput,
		CartNavigation,
		CartPointsDisplay,
		CartPointsRedemption,
		CartSummary,
		CheckoutAuthentication,
		Drawer,
		SidebarOverlay,
	},

	props: {
		isActive: Boolean,
		cart: Object,
		user: Object,
		guest: Object,
		redemptionRates: {
			type: Array,
			required: true,
		},
	},

	data() {
		return {
			state: 'cart',
			isDrawerOpen: false,
		};
	},

	methods: {
		setCartState(state) { this.state = state },

		closeDrawer() {
			this.isDrawerOpen = false;
		},

		continueToCheckout() {
			if (this.user) return this.$emit('continue');

			this.isDrawerOpen = true;
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
