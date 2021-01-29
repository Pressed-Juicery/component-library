<template>
	<div :class="$style.root" @click="$emit('selected', item)">
		<img :class="$style.image" :src="item.imageUrl" alt="">
		<div :class="$style.title">{{ item.title }}</div>
		<div :class="$style.description">{{ item.description }}</div>
	</div>
</template>

<script>
export default {
	props: {
		item: {
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
		border-radius: $border-radius;
		box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
		cursor: pointer;
	}

	.image {
		width: 100%;
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
