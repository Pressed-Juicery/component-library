<template>
<div :class='$style.root'>
	<div :class='$style.line' />
	<div
		:class='[$style.stepContainer, {[$style.current]: index === currentIndex}]'
		v-for='(step, index) in states'
		:key='index'
	>
		<div :class='$style.bubbleBox'>
			<span
				:class='[
				$style.circle,
				{[$style.circle]: step.completed === false},
				{[$style.dot]: step.completed === true},
				]'
				@click='changeState(index)'
			></span>
		</div>
		<p>{{ states[index].name }}</p>
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
			type: Number,
			required: true,
		},
	},
	data() {
		return {
			currentIndex: this.currentState,
		};
	},
	methods: {
		changeState(index) {
			if (this.states[index].completed || index === this.currentState) {
				this.currentIndex = index;
				this.$emit('newState', this.currentIndex);
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
	height: $spacing-02;
	position: absolute;
	border-radius: $spacing-03;
	z-index: -1;
	top: $spacing-04;
	background-color: $gray-30;
}

.dot {
	height: $spacing-05;
	width: $spacing-05;
	background-color: $gray-30;
	border-radius: 50%;
}

.circle {
	box-sizing: border-box;
	height: $spacing-05;
	width: $spacing-05;
	border: $spacing-02 solid $gray-30;
	border-radius: 50%;
}

.current {
	p {
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
	width: $spacing-07;
	background-color: $white;
}

.stepContainer {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	color: $gray-30;
}
</style>
