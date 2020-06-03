<template>
	<div :class="[$style.root, {[$style.isActive]: active}]">
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
		active: Boolean,
		shouldShowBackButton: Boolean,
		cart: Object,
	},
};
</script>

<style module lang="scss">
	@import '../styles/buttons';

	$black: $gray-100;

	.overlay {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 2;
		background-color: rgba(0, 0, 0, 0.25);
		opacity: 0;
		pointer-events: none;
		transition: .5s ease opacity;
	}

	.root.isActive .overlay {
		opacity: 0.55;
		pointer-events: all;
	}

	.sidebar {
		position: absolute;
		right: 0;
		height: 100%;
		width: 430px;
		background-color: $white;
		transform: translate(100%);
		transition: .5s ease transform;
		z-index: 10;
		overflow: scroll;
	}

	.sidebarWrapper {
		height: 100%;
		padding: $spacing-09 $spacing-07;
	}

	.root.isActive .sidebar {
		transform: translate(0%);
	}

	.footerWrapper {
		position: sticky;
		right: 0;
		bottom: 0;
		padding: 0 $spacing-07 $spacing-09 $spacing-07;
		background-color: $white;
	}

</style>
