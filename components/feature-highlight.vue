<template>
	<div>
		<img :class="$style.icon" :src="icon" />
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

.icon {
	height: $spacing-08;
}

.title {
	@include text-heading-5;
	margin: $spacing-05 0 $spacing-02;
}
</style>
