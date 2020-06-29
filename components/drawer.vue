<template>
	<div :class="[$style.root, { [$style.isOpen]: isOpen }]">
		<div :class="$style.overlay" @click="close" />

		<div :class="[$style.drawer, { [$style.hidden]: !isOpen }]">
			<slot />
		</div>
	</div>
</template>

<script>
export default {
	props: {
		isOpen: {
			type: Boolean,
			require: true,
		},
	},

	methods: {
		close() {
			this.$emit('close');
		},
	},
};
</script>

<style module lang="scss">
	@import "../styles/variables";
	@import "../styles/mixins";

	.root,
	.overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}

	.overlay {
		z-index: 1;
		background-color: $gray-90;
		opacity: 0;
		pointer-events: none;
		transition: 0.5s ease opacity;
	}

	.isOpen .overlay {
		opacity: 0.2;
		pointer-events: auto;
	}

	.drawer {
		position: absolute;
		left: 0;
		bottom: 0;
		width: 100%;
		max-height: 82%;
		border-radius: $spacing-05 $spacing-05 0 0;
		background-color: $white;
		z-index: 1;
		overflow: auto;
	}

	.hidden {
		animation: slide-down .5s ease forwards;
	}

	@keyframes slide-down {
		0% {
			transform: translateY(0%);
			visibility: visible;
			height: auto;
		}
		99% {
			transform: translateY(160%);
			visibility: visible;
			height: auto;
		}
		100% {
			transform: translateY(160%);
			visibility: hidden;
			height: 0;
		}
	}
</style>
