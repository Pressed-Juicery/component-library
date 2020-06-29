<template>
	<div ref="root" :class="[$style.root, { [$style.isActive]: isActive }]" @click="$emit('close')"></div>
</template>

<script>
import { preventAncestorScrolling } from '../utilities/prevent-body-scrolling';

export default {
	props: {
		isActive: Boolean,
	},

	data() {
		return {
			enableScrolling: () => {}, // eslint-disable-line no-empty-function
		};
	},

	mounted() {
		this.enableScrolling = preventAncestorScrolling(this.$refs.root);
	},

	watch: {
		isActive() {
			if (this.isActive) {
				this.enableScrolling = preventAncestorScrolling(this.$refs.root);
			} else {
				this.enableScrolling();
			}
		},
	},

	destroyed() {
		this.enableScrolling();
	},
};
</script>

<style module lang="scss">
	@import '../styles/mixins';

	.root {
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

	.isActive {
		opacity: 0.55;
		pointer-events: auto;
	}
</style>
