<template>
	<div class="faq">
		<div class="faq__question-container" @click="toggleAnswer">
			<h3 class="faq__question">{{ faq.question }}</h3>
			<div class="faq__button">
				<img :class="['faq__arrow', {'faq__arrow--toggle': showAnswer}]" src="https://d3e4ixgvd0ibii.cloudfront.net/icons/down-arrow-wide-grey.svg" alt="faq arrow">
			</div>
		</div>

		<p v-if="showAnswer" class="faq__answer" v-for="(answer, index) in faq.answers" :key="index">
			<span v-if="answer.reference">{{ answer.reference }}</span>
			<span class="faq__answer-content">{{ answer.content }}</span>
		</p>
	</div>
</template>

<script>
	export default {
		name: 'Faq',
		props: {
			faq: Object,
		},
		data: () => ({
			showAnswer: false,
		}),
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
	}

	.faq__arrow {
		width: 20px;
		cursor: pointer;
		transform: rotate(0deg);
	}

	.faq__arrow--toggle {
		transform: rotate(180deg);
	}

	.faq__answer {
		letter-spacing: normal;
		max-width: 1000px;
	}

	.faq__answer:first-of-type {
		margin-top: 0;
	}
</style>
