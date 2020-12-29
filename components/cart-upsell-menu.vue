<template>
	<div>
		<div :class="$style.title">{{ upsell.title }}</div>
		<div :class="$style.description">{{ upsell.description }}</div>
		<upsell-product-card
			v-for="variant in upsell.variants"
			:variant="variant"
			:tier="wallet.tier"
			:key="variant.id"
			:class="$style.item"
			@add-product="variant => $emit('add-product', variant)"
		/>
	</div>
</template>

<script>
import UpsellProductCard from './upsell-product-card';

export default {
	components: { UpsellProductCard },
	props: {
		upsell: {
			type: Object,
			required: true,
		},
		wallet: {
			type: Object,
			required: true,
		},
	},
};
</script>

<style module lang="scss">
	@import '../styles/mixins';
	@import '../styles/variables';

	.title {
		@include text-heading-5();
	}

	.description {
		@include text-subtle();
	}

	.title,
	.description {
		margin-bottom: $spacing-05;
	}

	.item:not(:last-of-type) {
		margin-bottom: $spacing-03;
	}
</style>
