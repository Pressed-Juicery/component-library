<template>
	<div :class="$style.root" @click="$emit('selected', tile.categoryId)">
		<img :class="$style.image" :src="tile.imageUrl" :alt="tile.title">
		<div :class="$style.title">{{ tile.title }}</div>
		<div :class="$style.description">{{ tile.description }}</div>
	</div>
</template>

<script>
export default {
	props: {
		tile: {
			type: Object,
			required: true,
		},
	},
};
</script>

<style lang='scss' module>
	@import "../styles/variables.scss";
	@import "../styles/mixins.scss";

	.root {
		display: flex;
		flex-direction: column;
		width: 300px;
		border-radius: 0 0 $border-radius $border-radius;
		box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
	}

	.image {
		width: 100%;
		border-radius: $border-radius $border-radius 0 0;
	}

	.title {
		@include text-bold();
		padding: $spacing-03;
	}

	.description {
		@include text-body-small();
		@include text-subtle();
		padding: 0 $spacing-03 $spacing-05 $spacing-03;
	}
</style>
