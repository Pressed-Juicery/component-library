<template>
	<div :class="$style.root" @click="$emit('selected', category.categoryId)">
		<img :class="$style.icon" :src="category.iconUrl" :alt="category.name">
		<div :class="$style.name">{{ category.name }}</div>
	</div>
</template>

<script>
export default {
	props: {
		category: {
			type: Object,
			required: true,
		},
	},
};
</script>

<style lang='scss' module>
	@import '../styles/variables.scss';
	@import '../styles/mixins.scss';

	$icon-bounding-box: $spacing-08;

	.root {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: $spacing-10;
	}

	.icon {
		max-width: $icon-bounding-box;
		height: $icon-bounding-box;
		margin: $spacing-03;
	}

	.name {
		@include text-body-small();
		margin-bottom: $spacing-03;
		text-align: center;
	}
</style>
