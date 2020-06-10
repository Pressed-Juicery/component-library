<template>
	<div :class='$style.root'>
		<link
			rel='stylesheet'
			href='https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css'
		/>
		<div>
		<div v-if='isOpen' :class='$style.clickArea' @click='isOpen = !isOpen'></div>
			<transition
				name='custom-classes-transition'
				enter-active-class='animate__animated animate__fadeInUp'
				leave-active-class='animate__animated animate__fadeOutDown'
			>
				<div v-if='isOpen' :class='$style.drawer' key='drawer'>
					<div :class='$style.titleBar' @click='isOpen = !isOpen'>
						<div :class='$style.container'>
							<div :class='$style.title'>{{ title }}</div>
							<ArrowDown :class='$style.icon' />
						</div>
					</div>
					<div :class='$style.drawerContent'>
						<div :class='$style.container'>
							<slot />
							<button style='width: 100%;' @click='isOpen = !isOpen'>Done</button>
						</div>
					</div>
				</div>
			</transition>
		</div>
		<button style='position: fixed; top: 0;' @click='isOpen = !isOpen'>Toggle Drawer</button>
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
};
</script>

<style module lang='scss'>
@import '../styles/variables.scss';
@import '../styles/mixins.scss';

@mixin flex($flow: row wrap, $justify: center, $align: center){
	display: flex;
	flex-flow: $flow;
	justify-content: $justify;
	align-items: $align;
}

.drawer {
	z-index: 2;
	position: fixed;
	@include flex(column, center, space-around);
	bottom: 0;
	width: 100%;
}

.clickArea, .titleBar {
	cursor: pointer;
}

.clickArea {
	z-index: 1;
	position: relative;
	top:0;
	height: 100vh;
}

.icon {
	width: $spacing-03;
	height: $spacing-03;
}

.titleBar {
	@include flex(row, space-around, center);
	z-index: 1;
	height: $spacing-10;
	border-radius: $spacing-05 $spacing-05 0 0;
	box-shadow: 0px -1px 5px $gray-20;
	background-color: $white;
}

.drawerContent {
	@include flex();
	padding: $spacing-07 0;
	background-color: $white;
}

.container {
	width: 75%;
	@include flex(row, space-between, center);
}

.title {
	@include text-cta();
}
</style>
