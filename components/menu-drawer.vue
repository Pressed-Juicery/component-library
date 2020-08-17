<template>
	<drawer :is-open="isOpen" @close="$emit('close')">
		<menu-dialog-template
			:heading="heading"
			:menuItems="menuItems"
			@close="$emit('close')"
		/>
	</drawer>
</template>

<script>
import Drawer from './drawer';
import MenuDialogTemplate from './menu-dialog-template';

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
};
</script>
