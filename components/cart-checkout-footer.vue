<template>
	<div>
		<cart-totals :class="$style.totals" :cart="cart"/>
		<div :class="$style.disclaimer">Taxes and delivery fees will be applied at checkout.</div>
		<button :class="$style.button" @click="$emit('continue')" :disabled="!cart.items.length">
			Check Out
		</button>
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
	@import '../styles/mixins';
	@import '../styles/variables';

	.totals {
		padding-bottom: $spacing-07;
	}

	.disclaimer {
		@include text-subtle;
		@include text-body-small;
		@include text-bold;
		text-align: center;
		margin-bottom: $spacing-05;
	}

	.button {
		@include button-pill();
		width: 100%;
	}
</style>
