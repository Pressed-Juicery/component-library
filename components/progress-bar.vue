<template>
	<div :class="$style.root">
		<div :class="$style.progressBar" :style="{ width: fill }"></div>
	</div>
</template>

<script>
export default {
	props: {
		goal: Number,
		current: Number,
	},

	computed: {
		fill() {
			return `${(this.current / this.goal) * 100}%`;
		},
	},
};
</script>

<style module lang="scss">
	@import '../styles/variables';

	$barBackground: #e9e0c3;
	$barColor: #bf9033;

	.root {
		position: relative;
		height: $spacing-02;
		border-radius: $spacing-02;
		background-color: $barBackground;
	}

	.progressBar {
		position: absolute;
		border-radius: $spacing-02;
		left: 0;
		height: 100%;
		background-color: $barColor;
	}
</style>
