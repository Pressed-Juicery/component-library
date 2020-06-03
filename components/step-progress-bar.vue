<template>
<div :class='$style.root'>
	<div :class='$style.line' />
	<div
		:class='[$style.stepContainer, { [$style.current]: step === currentState }]'
		v-for='(step, index) in states'
		:key='index'
		@click='changeState(step)'
	>
		<div :class='$style.bubbleBox'>
			<span :class='[$style.circle, { [$style.dot]: step.completed }]'></span>
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
			const lastCompletedIndex = this.states.reduce((lastCompletedIndex, state, index) => {
				return state.completed ? index : lastCompletedIndex;
			}, 0);

			const firstIncompleteState = this.states[lastCompletedIndex + 1];

			if (state.completed || state === firstIncompleteState) {
				this.$emit('stateChange', state);
			}
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

.dot {
	height: $spacing-03;
	width: $spacing-03;
	background-color: $gray-30;
	border-radius: 50%;
}

.circle {
	box-sizing: border-box;
	height: $spacing-03;
	width: $spacing-03;
	border: $spacing-01 solid $gray-30;
	border-radius: 50%;
}

.current {
	.text {
		color: $color-primary;
	}

	.dot {
		background-color: $color-primary;
	}

	.circle {
		border-color: $color-primary;
	}
}

.bubbleBox {
	display: flex;
	justify-content: center;
	align-items: center;
	height: $spacing-07;
	width: $spacing-05;
	background-color: $white;
}

.stepContainer {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	color: $gray-30;
	cursor: pointer;
}
</style>
