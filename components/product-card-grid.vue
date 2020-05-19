<template>
	<div :class="$style.root">
		<product-card
			v-for="(card, i) in cards"
			:product="card.product"
			:theme="card.theme"
			:key="'product-' + i"
			@cta-click="product => $emit('cta-click', product)"
		/>
	</div>
</template>

<script>
import ProductCard from './product-card';

export default {
	components: { ProductCard },
	props: {
		cards: Array,
	},
};
</script>

<style module lang="scss">
	@import '../styles/variables';

	.root {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
		grid-gap: $spacing-07;
	}
</style>
