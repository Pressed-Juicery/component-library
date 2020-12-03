<template>
	<div :class="$style.root">
		<div
			v-for="(buttonLabel, index) in buttonLabels"
			:class="[$style.button, { [$style.isActive]: buttonLabel === selectedLabel }]"
			@click="$emit('change', buttonLabel)"
			:key="index"
		>
			{{ buttonLabel }}
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
	methods: {
		isObject(object) {
			return Object.prototype.toString.call(object) === '[object Object]';
		},
	},
	computed: {
		convertedButtonLabels() {
			return this.buttonLabels.map(label => {
				if (Array.isArray(label)) {
					return {
						heading: label[0],
						subheading: label[1],
					};
				}

				return label;
			});
		},
	},
};
};
</script>

<style module lang="scss">
	@import '../styles/variables';

	.root {
		display: flex;
	}

	.button {
		flex: 1;
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

	.isActive {
		background-color: $beige;
	}
</style>
