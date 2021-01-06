<template>
	<div :class="$style.root">
		<div
			:class="$style.buttonWrapperLeft"
			@click="decrementIndex"
			@keydown="decrementIndex"
			tabindex="0"
		>
			<left-carat />
		</div>

		<div
			:class="$style.title"
			@click="$emit('change', currentPromotions[currentIndex])"
			@keydown="$emit('change', currentPromotions[currentIndex])"
			tabindex="0"
		>
			{{ currentPromotions[currentIndex].title }}
		</div>
		<div :class="$style.message">{{ currentPromotions[currentIndex].subtitle }}</div>

		<div
			:class="$style.buttonWrapperRight"
			@click="incrementIndex"
			@keydown="decrementIndex"
			tabindex="0"
		>
			<right-carat />
		</div>
	</div>
</template>

<script>
import LeftCarat from './icons/left-caret-white';
import RightCarat from './icons/right-caret-white';

export default {
	props: {
		currentPromotions: {
			type: Array,
			required: true,
		},
	},
	components: { LeftCarat, RightCarat },
	data() {
		return {
			currentIndex: 0,
			timerDelay: 3000,
			timer: null,
		};
	},
	methods: {
		incrementIndex() {
			this.resetTimer();
			if (this.currentIndex + 1 > this.currentPromotions.length - 1) this.currentIndex = 0;
			else this.currentIndex++;
		},
		decrementIndex() {
			this.resetTimer();
			if (this.currentIndex - 1 < 0) this.currentIndex = this.currentPromotions.length - 1;
			else this.currentIndex--;
		},
		resetTimer() {
			clearInterval(this.timer);
			this.timer = setInterval(() => this.incrementIndex(), this.timerDelay);
		},
	},
	created() {
		this.resetTimer();
	},
};
</script>

<style lang='scss' module>
	@import '../styles/variables.scss';
	@import '../styles/mixins.scss';

	.title,
	.buttonWrapperLeft,
	.buttonWrapperRight {
		cursor: pointer;
	}

	.root {
		background-color: $brownish-purple;
		color: $white;
		padding: $spacing-05;
		display: grid;
		place-items: center;
		border-radius: $border-radius;
	}

	.message {
		@include text-body-small();
	}

	.buttonWrapperLeft,
	.buttonWrapperRight {
		position: absolute;
		top: 0;
		padding: $spacing-06 $spacing-05;
	}

	.buttonWrapperLeft {
		left: 0;
	}

	.buttonWrapperRight {
		right: 0;
	}
</style>
