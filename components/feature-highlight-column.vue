<template>
	<div :class="['feature-highlight-column', { 'feature-highlight-column--centered': centerContent }]"
		:style="{ color }">
		<img :src="icon" :style="{ 'fill': color }"/>
		<p class="feature-highlight-column__title">{{ title }}</p>
		<p class="feature-highlight-column__description" v-html="description"></p>
	</div>
</template>

<script>
export default {
	props: {
		icon: String,
		title: String,
		description: String,
		color: String,
		centerContent: Boolean,
	},
};
</script>

<style lang="scss">
@import '../styles/variables';
@import '../styles/mixins';

.feature-highlight-column {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
}

.feature-highlight-column--centered {
	align-items: center;
}

.feature-highlight-column img,
.feature-highlight-column__title {
	margin-bottom: $spacing-03;
}

.feature-highlight-column__title {
	@include text-heading-6;
}

.feature-highlight-column__description {
	@include text-body-small;
	margin-bottom: 0;
}
</style>
