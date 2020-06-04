<template>
<div :class='$style.root'>
	<div :class='$style.line' />
	<div
		:class='[
			$style.stepWrapper, {
			[$style.currentStep]: step === currentStep,
			[$style.showCursor]: index <= firstIncompleteStepIndex()
		}]'
		v-for='(step, index) in steps'
		:key='index'
		v-on:click='changeStep(step)'
	>
		<div :class='$style.circleWrapper'>
			<span :class='[$style.circleOpen, { [$style.circleClosed]: step.completed }]'></span>
		</div>
		<div :class="$style.stepName">{{ step.name }}</div>
	</div>
</div>
</template>

<script>
export default {
	props: {
		steps: {
			type: Array,
			required: true,
		},
		currentStep: {
			type: Object,
			required: true,
		},
	},
	methods: {
		changeStep(step) {
			const firstIncompleteStep = this.steps[this.firstIncompleteStepIndex()];

			if (step.completed || step === firstIncompleteStep) {
				this.$emit('stepChange', step);
			}
		},
		firstIncompleteStepIndex() {
			for (let index = 0; index < this.steps.length; index++) {
				if (!this.steps[index].completed) return index;
			}

			return this.steps.length - 1;
		},
	},
};
</script>

<style module lang="scss">
@import "../styles/variables.scss";

.root {
	display: flex;
	position: relative;
	justify-content: space-around;
	align-items: center;
}

.line {
	width: 100%;
	height: $spacing-01;
	position: absolute;
	border-radius: $spacing-03;
	z-index: -1;
	top: 14px;
	background-color: $gray-30;
}

.circleClosed,
.circleOpen {
	height: $spacing-03;
	width: $spacing-03;
	border-radius: 50%;
}

.circleClosed {
	background-color: $gray-30;
}

.circleOpen {
	box-sizing: border-box;
	border: $spacing-01 solid $gray-30;
}

.currentStep {
	.stepName {
		color: $color-primary;
	}

	.circleClosed {
		background-color: $color-primary;
	}

	.circleOpen {
		border-color: $color-primary;
	}
}

.circleWrapper,
.stepWrapper {
	display: flex;
	justify-content: center;
	align-items: center;
}

.circleWrapper {
	height: $spacing-07;
	width: $spacing-05;
	background-color: $white;
}

.showCursor {
	cursor: pointer;
}

.stepWrapper {
	flex-direction: column;
	color: $gray-30;
}
</style>
