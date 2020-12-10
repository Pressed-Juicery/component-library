<template>
	<div :class="$style.root">
		<div
			v-for="(buttonLabel, index) in buttonLabels"
			:class="[
				$style.button,
				{ [$style.isActive]: buttonLabel.heading === selectedLabel }
			]"
			@click="$emit('change', buttonLabel.heading)"
			:key="index"
		>
			<div>
				<div>{{ buttonLabel.heading }}</div>
				<div :class="$style.subheading">{{ buttonLabel.subheading }}</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		buttonLabels: {
			type: Array,
			required: true,
		},
		selectedLabel: {
			type: String,
		},
	},
					};
</script>

<style module lang="scss">
	@import '../styles/variables';
	@import '../styles/mixins';

	.root {
		display: flex;
	}

	.button {
		flex: 1;
		text-align: center;
		display: grid;
		place-items: center;
		padding: $spacing-05;
		border: $border-light;
		border-right: 0;
		cursor: pointer;

		&:first-child {
			border-top-left-radius: $border-radius;
			border-bottom-left-radius: $border-radius;
		}

		&:last-child {
			border-right: $border-light;
			border-top-right-radius: $border-radius;
			border-bottom-right-radius: $border-radius;
		}
	}

	.isActive {
		background-color: $beige;
	}

	.subheading {
		@include text-body-small();
		@include text-subtle();
	}
</style>
