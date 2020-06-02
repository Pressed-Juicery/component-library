<template>
	<div :class="[$style.root, {[$style.isActive]: active}]">
		<div :class="$style.overlay" @click.self="$emit('close')"></div>
		<div :class="$style.sidebar">

			<div :class="$style.sidebarWrapper">
				<slot name="navigation" />
			</div>

			<slot />

		</div>
	</div>
</template>

<script>
export default {
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

	.root.isActive .overlay {
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
		z-index: 10;
	}

	}

	}

	}

</style>
