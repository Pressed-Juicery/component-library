<template>
<div :class='$style.root'>
	<div :class='$style.titleBar'>
		<div :class='$style.title'>{{ title }}</div>
		<ArrowDownIcon :class='$style.icon'/>
	</div>
	<div :class='$style.drawerContent'>
		<slot />
	</div>
</div>
</template>

<script>
import ArrowDownIcon from './icons/arrow-down-icon.vue';
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
	components: { ArrowDownIcon }
};
</script>

<style module lang="scss">
@import "../styles/variables.scss";
@import "../styles/mixins.scss";
.root {
	position: fixed;
	bottom: 0;
	width: 100%;
	height: 200px;
}

.icon {
	position: absolute;
	right: 40px;
	top: -45px;
	width: 15px;
	height: 15px;
}

.titleBar {
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: -75px;
	height: 75px;
	border-radius: 30px 30px 0 0;
	box-shadow: 0px -2px 7px 1px $gray-20;
}

.drawerContent {
	display: flex;
	justify-content: center;
	align-items: center;
}

.title {
	@include text-cta();
}
</style>