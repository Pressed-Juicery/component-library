<template>
	<div :class="$style.root">
		<close-icon :class="$style.closeButton" @click.native="$emit('close')"/>
		<back-arrow-icon v-if="shouldShowBackButton" :class="$style.backButton" @click.native="$emit('back', 'cart')"/>
	</div>
</template>

<script>
import BackArrowIcon from './icons/back-arrow-icon';
import CloseIcon from './icons/close-icon';

export default {
	components: { BackArrowIcon, CloseIcon },
	props: {
		shouldShowBackButton: Boolean,
	},
};
</script>

<style module lang="scss">
	@import '../styles/variables';

	$nav-height: $spacing-06;

	.root {
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-direction: row-reverse;
		height: $nav-height; // Note: this prevents the height from changing when toggling the back button
	}

	.closeButton,
	.backButton {
		cursor: pointer;
	}

	.closeButton {
		width: $spacing-04;
		height: $spacing-04;
	}

	.backButton {
		height: $nav-height;
		width: $nav-height;
	}
</style>
