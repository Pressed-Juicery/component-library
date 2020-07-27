<template>
	<drawer :isOpen="isOpen" @close="$emit('cancel')">
		<confirmation-dialog-template
			:title="title"
			:cancel-button-text="cancelButtonText"
			:confirm-button-text="confirmButtonText"
			@cancel="$emit('cancel')"
			@confirm="$emit('confirm')"
		>
			<slot />
		</confirmation-dialog-template>
	</drawer>
</template>

<script>
import ConfirmationDialogTemplate from './confirmation-dialog-template.vue';
import Drawer from './drawer.vue';

export default {
	components: { ConfirmationDialogTemplate, Drawer },

	props: {
		isOpen: {
			type: Boolean,
			require: true,
		},
		title: {
			type: String,
			require: true,
		},
		cancelButtonText: {
			type: String,
			require: true,
		},
		confirmButtonText: {
			type: String,
			require: true,
		},
	},
};
</script>
