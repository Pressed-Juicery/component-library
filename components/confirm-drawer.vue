<template>
	<drawer :isOpen="isOpen" @close="$emit('cancel')">
		<div :class="$style.content">
			<div :class="$style.title">{{ title }}</div>
			<div :class="$style.body">
				<slot/>
			</div>
			<div :class="$style.buttonGroup">
				<button :class="$style.cancelButton" @click="$emit('cancel')">{{ cancelButtonText }}</button>
				<button @click="$emit('confirm')">{{ confirmButtonText }}</button>
			</div>
		</div>
	</drawer>
</template>

<script>
import Drawer from './drawer.vue';

export default {
	components: { Drawer },

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

<style lang="scss" module>
	@import '../styles/mixins';
	@import '../styles/variables';

	.content {
		padding: $spacing-08 $spacing-06;
	}

	.title {
		@include text-heading-5();
		margin-bottom: $spacing-03;
	}

	.body {
		margin-bottom: $spacing-07;
	}

	.buttonGroup {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-column-gap: $spacing-03;
	}

	.cancelButton {
		@include button-secondary();
	}
</style>
