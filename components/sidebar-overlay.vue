<template>
	<div :class="{[$style.isActive]: isActive}">
		<div :class="$style.overlay" @click.self="$emit('close')"></div>
		<div :class="$style.sidebar">

			<div :class="$style.sidebarWrapper">
				<slot name="navigation" />
				<slot />
			</div>

			<div :class="$style.footerWrapper">
				<slot name="footer" />
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		isActive: Boolean,
		shouldShowBackButton: Boolean,
	},
};
</script>

<style module lang="scss">
	@import '../styles/mixins';

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

	.isActive .overlay {
		opacity: 0.55;
		pointer-events: all;
	}

	.sidebar {
		position: absolute;
		right: 0;
		height: 100%;
		width: 352px;
		background-color: $white;
		padding: $spacing-09 $spacing-07;
		transform: translate(100%);
		transition: .5s ease transform;
		z-index: 10;
	}

	.isActive .sidebar {
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

	.backButton,
	.closeButton {
		cursor: pointer;
	}

	.backButton {
		width: $spacing-06;
		height: $spacing-06;
	}

	.closeButton {
		width: $spacing-04;
		height: $spacing-04;
	}
</style>
