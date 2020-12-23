<template>
	<div :class="$style.root">
		<div :class="$style.progressBar" :style="{ width: progressPercentage }"></div>
	</div>
</template>

<script>
export default {
	props: {
		goal: {
			type: Number,
			required: true,
		},
		current: {
			type: Number,
			default: 0,
		},
	},

	computed: {
		progressPercentage() {
			return `${(this.current / this.goal) * 100}%`;
		},
	},
};
</script>

<style module lang="scss">
	@import '../styles/variables';

	$height: $spacing-02;
	$border-radius: $height / 2;

	.root {
		position: relative;
		height: $height;
		border-radius: $border-radius;
		background-color: $goldenrod-light;
	}

	.progressBar {
		position: absolute;
		border-radius: $border-radius;
		top: 0;
		left: 0;
		height: 100%;
		background-color: $goldenrod;
	}
</style>
