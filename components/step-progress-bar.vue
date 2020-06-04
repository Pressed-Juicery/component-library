<template>
<div :class='$style.root'>
	<div :class='$style.line' />
	<div
		:class='[$style.stepWrapper, { [$style.current]: step === currentState },
			{ [$style.isCursor]: index <= lastCompletedIndex() + 1 }]'
		v-for='(step, index) in states'
		:key='index'
		v-on:click='changeState(step)'
	>
		<div :class='$style.circleWrapper'>
			<span :class='[$style.circleOpen, { [$style.circleClosed]: step.completed }]'></span>
		</div>
		<div :class="$style.text">{{ states[index].name }}</div>
	</div>
</div>
</template>

<script>
export default {
	props: {
		states: {
			type: Array,
			required: true,
		},
		currentState: {
			type: Object,
			required: true,
		},
	},
	methods: {
		changeState(state) {
			const firstIncompleteState = this.states[this.lastCompletedIndex() + 1];

			if (state.completed || state === firstIncompleteState) {
				this.$emit('stateChange', state);
			}
		},
		lastCompletedIndex() {
			return this.states.reduce((lastCompletedIndex, state, index) => (
				state.completed ? index : lastCompletedIndex)
			);
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

.current {
	.text {
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

.isCursor {
	cursor: pointer;
}

.stepWrapper {
	flex-direction: column;
	color: $gray-30;
}
</style>
