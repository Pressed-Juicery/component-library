<template>
	<div :class="[{[$style.isOpen]: isOpen}, $style.root]">
		<div :class="$style.overlay" @click="toggleDrawer"></div>

		<div :class="$style.drawer">
			<div :class="$style.drawerHeader" @click="toggleDrawer">
				<div :class="$style.wrapper">
					<div :class="$style.title">{{ title }}</div>
					<ArrowDown :class="$style.icon" />
				</div>
			</div>

			<div :class="$style.drawerContent">
				<div :class="$style.wrapper">
					<slot />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import ArrowDown from './icons/arrow-down-icon.vue';
export default {
	props: {
		title: {
			type: String,
			required: true,
		},
		isOpen: {
			type: Boolean,
			require: true,
		},
	},
	components: { ArrowDown },
	methods: {
		toggleDrawer() {
			this.$emit('toggleDrawer', !this.isOpen);
		},
	},
};
</script>

<style module lang="scss">
@import "../styles/variables.scss";
@import "../styles/mixins.scss";

.root,
.overlay {
	position: absolute;
	width: 100%;
	height: 100%;
}

.root {
	overflow: hidden;
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
	pointer-events: all;
}

.drawer {
	position: absolute;
	flex-flow: column;
	bottom: 0;
	width: 100%;
	transform: translateY(110%);
	transition: .5s ease transform;
}

.isOpen .drawer {
	transform: translateY(0%);
}

.drawer,
.drawerContent,
.drawerHeader,
.wrapper {
	display: flex;
}

.drawer,
.drawerContent {
	justify-content: center;
}

.drawerContent,
.wrapper {
	align-items: center;
}

.drawer,
.drawerHeader {
	z-index: 2;
}

.drawerHeader,
.drawerContent {
	background-color: $white;
}

.overlay,
.drawerHeader {
	cursor: pointer;
}

.wrapper {
	width: 75%;
	justify-content: space-between;
}

.drawerHeader {
	justify-content: space-around;
	height: $spacing-10;
	border-radius: $spacing-05 $spacing-05 0 0;
	box-shadow: 0px -1px 5px $gray-30;
}

.title {
	@include text-cta();
}

.icon {
	height: $spacing-03;
}

.drawerContent {
	padding: $spacing-07 0;
}
</style>
