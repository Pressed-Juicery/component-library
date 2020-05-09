<template>
	<div class="feature-highlight-column">
		<img :src="icon" />
		<div class="feature-highlight-column__title">{{ title }}</div>
		<div v-html="description" />
	</div>
</template>

<script>
export default {
	props: {
		icon: String,
		title: String,
		description: String,
	},
};
</script>

<style lang="scss">
@import '../styles/variables';
@import '../styles/mixins';

.feature-highlight-column__title {
	@include text-heading-5;
	margin: $spacing-05 0 $spacing-02;
}
</style>
