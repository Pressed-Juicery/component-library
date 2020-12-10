<template>
	<div :class="$style.root">
		<div
			v-for="(button, index) in buttons"
			:class="[
				$style.button,
				{ [$style.isSmall]: small },
				{ [$style.isActive]: button === selected }
			]"
			@click="$emit('change', button)"
			:key="index"
		>
			<div>
				<div>{{ button.heading }}</div>
				<div :class="$style.subheading">{{ button.subheading }}</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		buttons: {
			type: Array,
			required: true,
		},
		selected: {
			type: Object,
			required: true,
		},
	},
};
</script>

<style module lang="scss">
	@import '../styles/variables';
	@import '../styles/mixins';

	.root,
	.button {
		display: flex;
	}

	.button {
		flex: 1;
		justify-content: center;
		align-items: center;
		text-align: center;
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

	.isSmall {
		padding: $spacing-03;
	}

	.isActive {
		background-color: $beige;
	}

	.subheading {
		@include text-body-small();
		@include text-subtle();
	}
</style>
