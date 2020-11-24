<template>
	<div>
		<div :class="$style.title">{{ upsell.title }}</div>
		<div :class="$style.description">{{ upsell.description }}</div>
		<upsell-product-card
			v-for="product in upsell.products"
			:product="product"
			:upsell-price="upsell.upsellPrice"
			:key="product.id"
			:class="$style.item"
			@add-product="product => $emit('add-product', product)"
		/>
	</div>
</template>

<script>
import UpsellProductCard from './upsell-product-card';

export default {
	components: { UpsellProductCard },
	props: {
		upsell: Object,
	},
};
</script>

<style module lang="scss">
	@import '../styles/mixins';

	.title {
		@include text-heading-5();
	}

	.description {
		@include text-subtle;
	}

	.title,
	.description {
		margin-bottom: $spacing-05;
	}

	.item:not(:last-of-type) {
		margin-bottom: $spacing-03;
	}
</style>
