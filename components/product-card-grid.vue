<template>
	<div class="product-card-grid">
		<product-card class="product-card-grid__card"
			v-for="(card, i) in cards"
			:product="card.product"
			:theme="card.theme"
			:key="'product-' + i"
			v-on:cta-click="handleClick"
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
	handleClick(product) {
		this.emit('cta-click', product);
	},
};
</script>

<style scoped lang="scss">
	@import '../styles/variables';

	.product-card-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		grid-gap: $spacing-07;
	}
</style>
