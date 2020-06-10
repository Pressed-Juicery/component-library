<template>
	<div>
		<link
			rel="stylesheet"
			href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css"
		/>
		<div>
		<div v-if="isOpen" :class="$style.clickArea" @click="toggleOpen"></div>
			<transition
				name="custom-classes-transition"
				enter-active-class="animate__animated animate__fadeInUp animate__faster"
				leave-active-class="animate__animated animate__fadeOutDown animate__faster"
			>
				<div v-if="isOpen" :class="$style.drawer" key="drawer">
					<div :class="$style.titleBar" @click="toggleOpen">
						<div :class="$style.container">
							<div :class="$style.title">{{ title }}</div>
							<ArrowDown :class="$style.icon" />
						</div>
					</div>
					<div :class="$style.drawerContent">
						<div :class="$style.container">
							<slot />
							<div>
								<h3>Test</h3>
								<h3>Test</h3>
								<h3>Test</h3>
								<h3>Test</h3>
							</div>
						</div>
					</div>
				</div>
			</transition>
		</div>
	</div>
</template>

<script>
import ArrowDown from "./icons/arrow-down-icon.vue";
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
		toggleOpen() {
			this.$emit("toggleOpen", !this.isOpen);
		}
	},
};
</script>

<style module lang="scss">
@import "../styles/variables.scss";
@import "../styles/mixins.scss";

.drawer, .drawerContent {
	display: flex;
	justify-content: center;
}

.drawer {
	z-index: 2;
	position: fixed;
	flex-flow: column;
	align-items: space-around;
	bottom: 0;
	width: 100%;
	background-color: $red-20;
}

.clickArea, .titleBar {
	cursor: pointer;
}

.clickArea {
	z-index: 1;
	position: relative;
	height: 100vh;
	background-color: $gray-90;
	opacity: 0.3;
}

.icon {
	width: $spacing-03;
}

.titleBar {
	display: flex;
	justify-content: space-around;
	z-index: 1;
	height: $spacing-10;
	border-radius: $spacing-05 $spacing-05 0 0;
	box-shadow: 0px -1px 5px $gray-20;
	background-color: $white;
}

.drawerContent {
	align-items: center;
	padding: $spacing-07 0;
	background-color: $white;
}

.container {
	width: 75%;
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.title {
	@include text-cta();
}
</style>
