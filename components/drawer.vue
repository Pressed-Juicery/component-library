<template>
	<div :class="$style.root">
		<link
			rel="stylesheet"
			href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css"
		/>
		<div>
		<div v-if="isOpen" :class="$style.clickArea" @click="isOpen = !isOpen"></div>
			<transition
				name="custom-classes-transition"
				enter-active-class="animate__animated animate__fadeInUp"
				leave-active-class="animate__animated animate__fadeOutDown"
			>
				<div v-if="isOpen" :class="$style.drawer" key="drawer">
					<div :class="$style.titleBar" @click="isOpen = !isOpen">
						<div :class="$style.container">
							<div :class="$style.title">{{ title }}</div>
							<ArrowDownIcon :class="$style.icon" />
						</div>
					</div>
					<div :class="$style.drawerContent">
						<div :class="$style.container">
							<slot />
							<div style="width: 100%">
								<h3>Test</h3>
								<h3>Test</h3>
								<h3>Test</h3>
								<h3>Test</h3>
								<h3>Test</h3>
								<h3>Test</h3>
								<h3>Test</h3>
								<button style="width: 100%;" @click="isOpen = !isOpen">Done</button>
							</div>
						</div>
					</div>
				</div>
			</transition>
		</div>
		<button style="position: fixed; top: 0;" @click="isOpen = !isOpen">Toggle Drawer</button>
	</div>
</template>

<script>
import ArrowDownIcon from "./icons/arrow-down-icon.vue";
export default {
	props: {
		title: {
			type: String,
			required: true
		},
		isOpen: {
			type: Boolean,
			require: true
		}
	},
	components: { ArrowDownIcon },
	methods: {}
};
</script>

<style module lang="scss">
@import "../styles/variables.scss";
@import "../styles/mixins.scss";

@mixin flex($flow: row wrap, $justify: center, $align: center){
	display: flex;
	flex-flow: $flow;
	justify-content: $justify;
	align-items: $align;
}

.drawer {
	z-index: 2;
	position: fixed;
	bottom: 0;
	@include flex(column, center, space-around);
	width: 100%;
}

.clickArea {
	position: relative;
	top:0;
	z-index: 1;
	height: 100vh;
	cursor: pointer;
}

.icon {
	width: $spacing-03;
	height: $spacing-03;
}

.titleBar {
	@include flex(row, space-around, center);
	height: $spacing-10;
	background-color: white;
	z-index: 1;
	border-radius: $spacing-05 $spacing-05 0 0;
	box-shadow: 0px -2px 7px 1px $gray-20;
	cursor: pointer;
}

.drawerContent {
	@include flex();
	padding: $spacing-07 0;
	background-color: white;
}

.container {
	width: 75%;
	@include flex(row, space-between, center);
}

.title {
	@include text-cta();
}
</style>