<template>
	<div :class="$style.root" v-if="convertedButtonLabels">
		<div
			v-for="(buttonLabel, index) in convertedButtonLabels"
			:class="[
				$style.button,
				{ [$style.isActive]: buttonLabel === selectedLabel || buttonLabel['heading'] === selectedLabel }
			]"
			@click="$emit('change', isObject(buttonLabel) ? buttonLabel['heading'] : buttonLabel)"
			:key="index"
		>
			<div v-if="isObject(buttonLabel)" :class="$style.twoColLabel">
				{{ buttonLabel['heading'] }}
				<div :class="$style.sublabel">{{ buttonLabel['subheading'] }}</div>
			</div>

			<div v-else>{{ buttonLabel }}</div>
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

	.twoColLabel {
		flex-flow: column;
	}

	.sublabel {
		@include text-body-small();
		@include text-subtle();
	}
</style>
