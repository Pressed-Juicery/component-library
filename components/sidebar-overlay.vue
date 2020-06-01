<template>
	<div :class="[$style.root, {[$style.isActive]: active}]">
		<div :class="$style.overlay" @click.self="$emit('close')"></div>
		<div :class="$style.sidebar">

			<div :class="[$style.sidebarNavigation, {[$style.noBackButton] : !shouldShowBackButton}]">
				<back-arrow-icon v-if="shouldShowBackButton" :class="$style.backButton" @click.native="$emit('back')"/>
				<close-icon :class="$style.closeButton" @click.native="$emit('close')"/>
			</div>

			<slot />

		</div>
	</div>
</template>

<script>
import BackArrowIcon from './icons/back-arrow-icon';
import CloseIcon from './icons/close-icon';
export default {
	components: { BackArrowIcon, CloseIcon },
	props: {
		active: Boolean,
		shouldShowBackButton: Boolean,
	},
};
</script>

<style module lang="scss">
	@import '../styles/mixins';

	$black: $gray-100;

	.overlay {
		position: fixed;
		height: 100vh;
		width: 100%;
		z-index: 2;
		background-color: rgba(0, 0, 0, 0.25);
		opacity: 0;
		pointer-events: none;
		transition: .5s ease opacity;
	}

	.overlay.isActive {
		opacity: 0.55;
		pointer-events: all;
	}

	.sidebar {
		position: absolute;
		right: 0;
		height: 100%;
		width: 350px;
		background-color: $beige;
		padding: $spacing-09 $spacing-07;
		transform: translate(100%);
		transition: .5s ease transform;
	}

	.overlay.isActive .sidebar {
		transform: translate(0%);
	}

	.sidebarNavigation {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.sidebarNavigation.noBackButton {
		justify-content: flex-end;
	}

	.backButton, .closeButton {
		cursor: pointer;
	}

	.backButton {
		fill: $black;
		width: 23px;
		height: 23px;
	}

	.closeButton {
		fill: $black;
		width: 11px;
		height: 12px;
	}

</style>
