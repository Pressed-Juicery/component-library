<template>
	<div class="product-card-grid">
		<product-card class="product-card-grid__card"
			v-for="(product, i) in products"
			:product="product"
			:key="'product-' + i"
		/>
	</div>
</template>

<script>
import ProductCard from './product-card';

export default {
	components: { ProductCard },
	props: {
		products: Array,
	},
};
</script>

<style lang="scss">
	.product-card-grid {
		display: flex;
		flex-wrap: wrap;
	}
</style>
