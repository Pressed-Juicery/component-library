<template>
	<div :class="{[$style.isActive]: isActive}">
		<div :class="$style.overlay" @click="$emit('close')"></div>
		<div :class="$style.sidebar">
			<slot />
		</div>
	</div>
</template>

<script>
import { preventBodyScrolling } from '../utilities/prevent-body-scrolling';

export default {
	props: {
		isActive: Boolean,
	},
	created() {
		preventBodyScrolling(this.isActive);
	},
	watch: {
		isActive() {
			preventBodyScrolling(this.isActive);
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

	.isActive {
		.overlay {
			opacity: 0.55;
			pointer-events: auto;
		}

		.sidebar {
			transform: translate(0%);
		}
	}
</style>
