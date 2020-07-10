<template>
	<sidebar :is-active="isActive" @close="$emit('close')">
		<checkout-authentication v-if="showCheckoutAuthentication"
		                         :class="$style.checkoutAuthentication"
		                         :guest="guest"
		                         @sign-up="$emit('sign-up')"
		                         @sign-in="credentials => $emit('sign-in', credentials)"
		                         @add-guest="guest => $emit('add-guest', guest)"
		                         @close-sidebar="$emit('close')"
		                         @close-checkout-authentication="showCheckoutAuthentication = false" />

		<div v-else>
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
				<coupon-code-input @submit="discountCode => $emit('apply-discount-code', discountCode)" />
				<hr :class="$style.partition">
				<cart-points-display @click="setCartState('points')" :wallet="wallet" />
			</div>

			<cart-points-redemption
				v-else-if="state === 'points'"
				:wallet="wallet"
				:redemption-summary="redemptionRates"
			/>

			<cart-checkout-footer :cart="cart" @continue="continueToCheckout()" />
		</div>
	</sidebar>
</template>

<script>
import CartCheckoutFooter from './cart-checkout-footer';
import CartNavigation from './cart-navigation';
import CartPointsDisplay from './cart-points-display';
import CartPointsRedemption from './cart-points-redemption';
import CartSummary from './cart-summary';
import CheckoutAuthentication from './checkout-authentication';
import CouponCodeInput from './coupon-code-input';

import Sidebar from './sidebar';

export default {
	components: {
		CartCheckoutFooter,
		CouponCodeInput,
		CartNavigation,
		CartPointsDisplay,
		CartPointsRedemption,
		CartSummary,
		CheckoutAuthentication,
		Sidebar,
	},

	props: {
		isActive: Boolean,
		cart: Object,
		wallet: Object,
		guest: Object,
		redemptionRates: {
			type: Array,
			required: true,
		},
	},

	data() {
		return {
			state: 'cart',
			showCheckoutAuthentication: false,
		};
	},

	watch: {
		isActive() {
			if (this.isActive === true) this.showCheckoutAuthentication = false;
		},
	},

	methods: {
		setCartState(state) { this.state = state },

		continueToCheckout() {
			if (this.wallet) return void (this.$emit('continue'));

			this.showCheckoutAuthentication = true;
		},
	},

	computed: {
		shouldShowBackButton() { return this.state !== 'cart' },
	},
};
</script>

<style module lang="scss">
	@import '../styles/variables';

	.checkoutAuthentication {
		margin: 0 (-$spacing-07);
	}

	.cartSummary {
		margin-top: $spacing-07;
		margin-bottom: $spacing-05;
	}

	.partition {
		border: 1px solid $gray-30;
		margin: $spacing-05 0;
	}
</style>
