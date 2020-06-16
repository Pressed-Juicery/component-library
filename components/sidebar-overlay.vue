<template>
	<div :class="{[$style.isActive]: isActive}">
		<div :class="$style.overlay" @click="$emit('close')"></div>
		<div :class="$style.sidebar">
			<slot />
		</div>
	</div>
</template>

<script>
export default {
	props: {
		isActive: Boolean,
	},
};
</script>

<style module lang="scss">
	@import '../styles/mixins';

	.overlay {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: 2;
		background-color: rgba(0, 0, 0, 0.25);
		opacity: 0;
		pointer-events: none;
		transition: .5s ease opacity;
	}

	.isActive .overlay {
		opacity: 0.55;
		pointer-events: auto;
	}

	.sidebar {
		position: fixed;
		top: 0;
		bottom: 0;
		right: 0;
		width: 432px;
		padding: $spacing-09 $spacing-07;
		background-color: $white;
		transform: translate(100%);
		transition: .5s ease transform;
		z-index: 10;
		overflow-y: auto;
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
