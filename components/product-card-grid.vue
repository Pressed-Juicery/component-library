<template>
	<div class="product-card-grid">
		<product-card class="product-card-grid__card"
			v-for="(card, i) in cards"
			:product="card.product"
			:theme="card.theme"
			:key="'product-' + i"
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

<style scoped lang="scss">
	.product-card-grid {
		display: flex;
		flex-wrap: wrap;
	}
</style>
