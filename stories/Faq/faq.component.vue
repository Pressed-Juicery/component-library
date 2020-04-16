<template>
	<div class="faq">
		<div class="faq__question-container" @click="toggleAnswer">
			<h3 class="faq__question">{{ faq.question }}</h3>
			<div :class="['faq__button', {'faq__button--toggle': showAnswer}]">
				<slot></slot>
			</div>
		</div>
		<div :class="['faq__answer-container', {'faq__answer-container--toggle': showAnswer}]">
			<p class="faq__answer" v-for="(answer, index) in faq.answers" :key="index">
				<span v-if="answer.reference">{{ answer.reference }}</span>
				<span class="faq__answer-content">{{ answer.content }}</span>
			</p>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Faq',
	props: {
		faq: Object,
	},
	data: () => {
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
	@import '../../styles/variables';

	.faq {
		padding: 0 $spacing-06;
		border: 1px solid #cccccc;
		border-radius: $border-radius;
		margin-bottom: $spacing-06;
	}

	.faq:last-of-type {
		margin-bottom: 0;
	}

	.faq__question-container {
		display: flex;
		align-items: center;
		justify-content: space-between;
		cursor: pointer;
	}

	.faq__question {
		width: 90%;
		letter-spacing: .8px;
	}

	.faq__button {
		background-color: transparent;
		width: 40px;
		height: 40px;
		margin-left: $spacing-04;
		font-size: $font-size-09;
		text-align: center;
		color: $gray-30;
		outline: none;
		display: flex;
		justify-content: center;
		align-items: center;
		transform: rotate(0deg);
	}

	.faq__button--toggle {
		transform: rotate(180deg);
	}

	.faq__answer-container {
		max-height: 0;
		opacity: 0;
		transition: .3s ease max-height, .3s ease opacity;
	}

	.faq__answer-container--toggle {
		max-height: 1000px;
		opacity: 1;
	}

	.faq__answer {
		letter-spacing: normal;
		max-width: 1000px;
	}

	.faq__answer:first-of-type {
		margin-top: 0;
	}
</style>
