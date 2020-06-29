<template>
	<div :class="{[$style.isActive]: isActive}">
		<overlay :is-active="isActive" @close="$emit('close')"/>

		<div :class="$style.sidebar">
			<slot />
		</div>
	</div>
</template>

<script>
import Overlay from './overlay';

export default {
	components: { Overlay },
	props: {
		isActive: Boolean,
	},
};
</script>

<style module lang="scss">
	@import '../styles/variables';

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
		.sidebar {
			transform: translate(0%);
		}
	}

	@media (max-width: $max-width-small) {
		.sidebar {
			width: 100%;
		}
	}
</style>
