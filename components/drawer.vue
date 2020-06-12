<template>
	<div :class="[{[$style.isOpen]: isOpen}, $style.root]">
		<div :class="$style.overlay" @click="close"></div>

		<div :class="$style.drawer">
			<div :class="$style.drawerHeader" @click="close">
				<div>{{ title }}</div>
				<ArrowDown :class="$style.icon" />
			</div>

			<div :class="$style.drawerContent">
				<slot />
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
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
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
	pointer-events: auto;
}

.drawer {
	position: absolute;
	display: flex;
	justify-content: center;
	flex-flow: column;
	bottom: 0;
	left: 0;
	width: 100%;
	transform: translateY(110%);
	transition: .5s ease transform;
}

.isOpen .drawer {
	transform: translateY(0%);
}

.drawerHeader {
	cursor: pointer;
	padding: $spacing-06 $spacing-07;
	display: grid;
	grid-template-columns: 1fr $spacing-04;
	grid-column-gap: $spacing-06;
	align-items: center;
	border-radius: $spacing-05 $spacing-05 0 0;
	box-shadow: 0px -1px 5px $gray-30;
	@include text-cta();
}

.drawer {
	z-index: 2;
}

.drawerHeader,
.drawerContent {
	background-color: $white;
}

.icon {
	height: $spacing-03;
}

.drawerContent {
	padding: $spacing-07 0;
}
</style>
