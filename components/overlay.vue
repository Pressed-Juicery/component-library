<template>
	<div :class="[$style.root, { [$style.isActive]: isActive }]" @click="$emit('close')"></div>
</template>

<script>
export default {
	props: {
		isActive: Boolean,
	},

	created() {
		this.preventBodyScrolling(this.isActive);
	},

	watch: {
		isActive() {
			this.preventBodyScrolling(this.isActive);
		},
	},

	methods: {
		preventBodyScrolling(shouldPreventScrolling) {
			const methodName = shouldPreventScrolling ? 'add' : 'remove';

			window.document.body.classList[methodName]('prevent-scrolling');
		},
	},

	destroyed() {
		this.preventBodyScrolling(false);
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
