<template>
	<div>
		<div :class="$style.sectionTitle">this bundle includes ({{ bundleLength }})</div>
		<div :class="$style.products">
			<div :class="$style.product" v-for="(product, index) in cleanseBundle" :key="index">
				<img :class="$style.productImage" :src="product.imageUrl" :alt="product.title">
				<div :class="$style.productTitle">{{ product.title }}</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		cleanseBundle: {
			type: Array,
			required: true,
		},
	},
	computed: {
		bundleLength() {
			return this.cleanseBundle.length;
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

.productTitle {
	@include text-body-small();
}
</style>
