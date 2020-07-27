<template>
	<div :class="$style.root">
		<div :class="$style.title">{{ title }}</div>

		<div :class="$style.body">
			<slot/>
		</div>

		<div :class="$style.buttonGroup">
			<button :class="$style.cancelButton" @click="$emit('cancel')">{{ cancelButtonText }}</button>
			<button @click="$emit('confirm')">{{ confirmButtonText }}</button>
		</div>
	</div>
</template>

<script>
export default {
	props: {
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

	.root {
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
