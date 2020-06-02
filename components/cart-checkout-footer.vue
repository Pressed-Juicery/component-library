<template>
  <div :class="$style.root">
    <hr :class="$style.partition">
    <cart-totals :class="$style.totals" :cart="cart"/>
    <div :class="$style.checkOutButton">
      <div :class="$style.checkoutDisclaimer">Taxes and Delivery Fees will be applied at checkout.</div>
      <button :class="$style.checkOutButton" @click="$emit('checkout')">Check Out</button>
    </div>
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

	.root {
		z-index: 100;
		background-color: $white;
		// transform: translate(100%);
  }

  .partition {
		border: 1px solid $gray-30;
		margin-bottom: $spacing-06;
  }

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
		@extend .button--pill;
		width: 100%;
	}

</style>
