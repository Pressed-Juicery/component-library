<template>
	<div class="accordion">
		<div class="accordion__question-container" @click="toggleAnswer">
			<h3 class="accordion__question">{{ accordionContent.question }}</h3>
			<div :class="['accordion__button', {'accordion__button--toggle': showAnswer}]">
				<svg class="accordion__button-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" width="31.844" height="17.91" viewBox="0 0 31.844 17.91">
					<path d="M15.922,17.918 C15.647,17.918 15.385,17.804 15.197,17.603 L0.291,1.689 C-0.084,1.288 -0.064,
						0.659 0.336,0.283 C0.737,-0.092 1.366,-0.073 1.741,0.328 L15.922,15.469 L30.103,0.328 C30.478,-0.072
						31.107,-0.093 31.508,0.283 C31.908,0.659 31.928,1.288 31.553,1.689 L16.647,17.603 C16.459,17.804 16.197,
						17.918 15.922,17.918 Z"
					/>
				</svg>
			</div>
		</div>
		<div :class="['accordion__answer-container', {'accordion__answer-container--toggle': showAnswer}]">
			<div class="accordion__answer" v-for="(content, index) in accordionContent.content" :key="index" v-html="content"></div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'accordion',
	props: {
		accordionContent: Object,
	},
	data() {
		return {
			showAnswer: false,
		};
	},
	methods: {
		toggleAnswer() {
			this.showAnswer = !this.showAnswer;
		},
	},
};
</script>

<style lang="scss">
	@import '../styles/variables';

	.accordion {
		padding: 0 $spacing-06;
		border: 1px solid $gray-30;
		border-radius: $border-radius;
		margin-bottom: $spacing-06;
	}

	.accordion:last-of-type {
		margin-bottom: 0;
	}

	.accordion__question-container {
		display: flex;
		align-items: center;
		justify-content: space-between;
		cursor: pointer;
	}

	.accordion__question {
		width: 90%;
		letter-spacing: .8px;
	}

	.accordion__button {
		width: $spacing-08;
		height: $spacing-08;
		margin-left: $spacing-04;
		font-size: $font-size-09;
		outline: none;
		display: flex;
		justify-content: center;
		align-items: center;
		transform: rotate(0deg);
	}

	.accordion__button-icon {
		width: $spacing-05;
		fill: $gray-30;
	}

	.accordion__button--toggle {
		transform: rotate(180deg);
	}

	.accordion__answer-container {
		max-height: 0;
		opacity: 0;
		transition: .3s ease max-height, .3s ease opacity;
	}

	.accordion__answer-container--toggle {
		max-height: 1000px;
		opacity: 1;
	}

	.accordion__answer {
		margin-top: 0;
		margin-bottom: $spacing-05;
		letter-spacing: normal;
		max-width: 1000px;
	}

	.accordion__answer p:first-of-type {
		margin-top: 0;
	}
</style>
