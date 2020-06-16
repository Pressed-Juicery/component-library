<template>
	<div>
		<div :class="[$style.header, $style.row]">
			<div :class="$style.title">Your Cart</div>
			<div :class="$style.itemCount">{{ cart.itemCount }} Items</div>
		</div>
		<div v-if="!cart.itemCount">Your cart is currently empty.</div>
		<component
			:is="cardComponent"
			v-for="item in cart.items"
			:key="item.id"
			:item="item"
			@change="value => $emit('change', value)"/>
	</div>
</template>

<script>
import CartItemCard from './cart-item-card';
import CheckoutItemCard from './checkout-item-card';

export default {
	props: {
		cart: Object,
		canUpdateQuantity: Boolean,
	},

	components: { CartItemCard, CheckoutItemCard },

	data() {
		return {
			cardComponent: this.canUpdateQuantity ? CartItemCard : CheckoutItemCard,
		};
	},
};
</script>

<style module lang="scss">
	@import '../styles/mixins';
	@import '../styles/variables';

	.row {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.header {
		margin-bottom: $spacing-06;
	}

	.title {
		@include text-heading-5();
	}

	.itemCount {
		@include text-heading-5();
		@include text-bold();
	}
</style>
