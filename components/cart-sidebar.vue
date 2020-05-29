<template>
	<sidebar-overlay :active="active" :shouldShowBackButton="shouldShowBackButton" @close="closeSidebar">

	</sidebar-overlay>
</template>

<script>
import SidebarOverlay from './sidebar-overlay';
export default {
	components: { SidebarOverlay },
	props: {
		active: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {
			shouldShowBackButton: false,
		};
	},
	methods: {
		closeSidebar() {
			this.active = !this.active;
		},
	},
};
</script>

<style>

</style>
