<template>
	<div>
		<div :class="$style.sectionTitle">This bundle includes ({{ bundleItems.length }})</div>
		<div :class="$style.products">
			<div :class="$style.product" v-for="(product, index) in bundleItems" :key="index">
				<img :class="$style.productImage" :src="product.imageUrl">
				<div :class="$style.productName">{{ product.name }}</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		bundleItems: {
			type: Array,
			required: true,
		},
	},
};
</script>

<style module lang="scss">
	@import "../styles/mixins.scss";
	@import "../styles/variables.scss";

	.sectionTitle  {
		@include text-cta-small();
		margin-bottom: $spacing-07;
	}

	.products {
		display: flex;
		overflow-x: scroll;

		&::-webkit-scrollbar {
			display: none;
		}
	}

	.product {
		text-align: center;
		margin-right: $spacing-03;
	}

	.productImage {
		margin-bottom: $spacing-03;
		height: 155px;
		width: 155px;
	}

	.productName {
		@include text-body-small();
	}
</style>
