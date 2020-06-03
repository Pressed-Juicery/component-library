<template>
	<div :class="[$style.root, {[$style.noBackButton] : !shouldShowBackButton}]">
		<back-arrow-icon v-if="shouldShowBackButton" :class="$style.backButton" @click.native="$emit('back', 'cart')"/>
		<close-icon :class="$style.closeButton" @click.native="$emit('close')"/>
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
	}

	.root.noBackButton {
		justify-content: flex-end;
	}

	.backButton, .closeButton {
		cursor: pointer;
	}

	.backButton {
		fill: $gray-100;
		width: 23px;
		height: 23px;
	}

	.closeButton {
		fill: $gray-100;
		width: 11px;
		height: 12px;
	}

</style>
