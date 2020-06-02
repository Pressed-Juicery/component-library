<template>
	<div>
		<div :class="[$style.header, $style.row]">
			<div :class="$style.title">Your Cart</div>
			<div :class="$style.itemCount">{{ cart.itemCount || 0 }} Items</div>
		</div>
		<div v-if="!cart.itemCount">Your cart is currently empty.</div>
		<cart-item-card :class="$style.card" v-for="(item, index) in cart.items" :key="index" :item="item" />
	</div>
</template>

<script>
import CartItemCard from './cart-item-card';

export default {
	props: {
		cart: Object,
	},

	components: { CartItemCard },
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
		margin-bottom: $spacing-07;
	}

	.title {
		@include text-heading-4();
	}

	.itemCount {
		@include text-heading-5;
		@include text-bold();
	}

	.card:last-of-type {
		margin-bottom: 0;
	}
</style>
