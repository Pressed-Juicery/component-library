<template>
	<div :class="[$style.root, { [$style.isOpen]: isOpen }]">
		<overlay :is-active="isOpen" @close="$emit('close')" />

		<div :class="$style.drawer">
			<slot />
		</div>
	</div>
</template>

<script>
import Overlay from './overlay';

export default {
	components: { Overlay },
	props: {
		isOpen: {
			type: Boolean,
			require: true,
		},
	},
};
</script>

<style module lang="scss">
	@import "../styles/variables";
	@import "../styles/mixins";

	.drawer {
		position: absolute;
		left: 0;
		bottom: 0;
		width: 100%;
		max-height: 80%;
		border-radius: $spacing-05 $spacing-05 0 0;
		background-color: $white;
		z-index: 2;
		transform: translateY(100%);
		transition: 0.5s ease transform;
	}

	.isOpen {
		.drawer {
			transform: translateY(0%);
		}
	}
</style>
