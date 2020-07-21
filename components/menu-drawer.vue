<template>
	<drawer :is-open="isOpen" @close="close">
		<menu-dialog-template
			heading="Menu Dialog Template"
			:menuItems="menuItems"
			@close="close"
		/>
	</drawer>
</template>

<script>
import Drawer from './drawer.vue';
import MenuDialogTemplate from './menu-dialog-template.vue';

export default {
	components: { Drawer, MenuDialogTemplate },

	props: {
		isOpen: {
			type: Boolean,
			require: true,
		},

		heading: {
			type: String,
		},

		menuItems: {
			type: Array,
			require: true,
		},
	},

	methods: {
		close() {
			this.isOpen = false;
		},
	},
};
</script>
