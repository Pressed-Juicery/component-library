<template>
	<div :class="[{ [$style.isOpen]: isOpen }, $style.root]">
		<div :class="$style.overlay" @click="close" />

		<div :class="[{ [$style.hide]: !isOpen }, $style.drawer]">
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
@import "../styles/variables.scss";
@import "../styles/mixins.scss";

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
	transition: .5s ease opacity;
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
	border-radius: $spacing-05 $spacing-05 0 0;
	background-color: $white;
	box-shadow: 0 1px 15px -8px rgba(0, 0, 0, 0.5);
	z-index: 1;
}

.hide {
	animation: slide-down .5s ease forwards;
}

@keyframes slide-down {
	0% {
		transform: translateY(0%);
		visibility: visible;
	}
	99% {
		transform: translateY(110%);
		visibility: visible;
	}
	100% {
		transform: translateY(110%);
		visibility: hidden;
	}
}
</style>
