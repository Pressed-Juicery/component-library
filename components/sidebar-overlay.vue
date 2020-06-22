<template>
	<div :class="{[$style.isOpen]: isOpen}">
		<div :class="$style.overlay" @click="$emit('close')"></div>
		<div :class="[$style.sidebar, {[$style.overflow]: isActive}]">
			<slot />
		</div>
	</div>
</template>

<script>
import { preventBodyScrolling } from '../utilities/prevent-body-scrolling';

export default {
	props: {
		isOpen: Boolean,
		isActive: Boolean,
	},

	created() {
		preventBodyScrolling(this.isOpen);
	},

	watch: {
		isOpen() {
			preventBodyScrolling(this.isOpen);
		},
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
		transition: 0.5s ease opacity;
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
		transition: 0.5s ease transform;
		z-index: 10;
		overflow-y: auto;
	}

	.isOpen {
		.overlay {
			opacity: 0.55;
			pointer-events: auto;
		}

		.sidebar {
			transform: translate(0%);
		}
	}
</style>
