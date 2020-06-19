<template>
	<div>
		<div :class="$style.sectionTitle"></div>
		<div :class="$style.products">
			<div :class="$style.product" v-for="(product, index) in cleanseBundle" :key="index">
				<img :class="$style.productImage" src="" alt="">
				<div :class="$style.productTitle"></div>
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
	};
</script>

<style module lang="scss">

</style>