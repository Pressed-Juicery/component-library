<template>
	<div>
		<img :src="icon" />
		<div :class="$style.title">{{ title }}</div>
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

<style module lang="scss">
@import '../styles/variables';
@import '../styles/mixins';

.title {
	@include text-heading-5;
	margin: $spacing-05 0 $spacing-02;
}
</style>
