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

	.root {
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-direction: row-reverse;
	}

	.closeButton,
	.backButton {
		cursor: pointer;
	}

	.backButton {
		width: 23px;
		height: 23px;
	}

	.closeButton {
		width: 11px;
		height: 12px;
	}

</style>
