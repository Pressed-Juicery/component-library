<template>
	<div :class="[$style.root, { [$style.isOpen]: isOpen }]">
		<div :class="$style.overlay" @click="$emit('close')" />

		<div :class="$style.drawer">
			<div :class="$style.transparentBlock" @click="close"/>
			<div :class="$style.visibleDrawer">
				<pressed-points-circle v-if="hasLogo" :class="$style.logo"/>
				<slot />
			</div>
		</div>
	</div>
</template>

<script>
import PressedPointsCircle from './icons/pressed-points-circle';

export default {
	components: { PressedPointsCircle },

	props: {
		isOpen: {
			type: Boolean,
			required: true,
		},

		hasLogo: {
			type: Boolean,
			default: false,
		},
	},

	methods: {
		close() {
			if (!this.isOpen) return;

			this.$emit('close');
		},
	},
};
</script>

<style module lang="scss">
	@import "../styles/variables.scss";
	@import "../styles/mixins.scss";

	$logoOffset: 22px;

	.root,
	.overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
	}

	.overlay {
		z-index: 1;
		background-color: $gray-90;
		opacity: 0;
		pointer-events: none;
		transition: .5s ease opacity;
	}

	.isOpen .overlay {
		opacity: 0.2;
		pointer-events: auto;
	}

	.transparentBlock {
		height: $logoOffset;
		opacity: 0;
	}

	.logo {
		display: block;
		height: 66px;
		width: 66px;
		margin: 0 auto (-$spacing-04);
		position: relative;
		top: (-$logoOffset);
	}

	.drawer {
		position: absolute;
		left: 0;
		bottom: 0;
		width: 100%;
		z-index: 1;
		overflow: hidden;
	}

	.visibleDrawer {
		max-height: 82%;
		border-radius: $spacing-05 $spacing-05 0 0;
		background-color: $beige;
		box-shadow: 0 1px 15px -8px rgba(0, 0, 0, 0.5);
		pointer-events: auto;
	}
</style>
