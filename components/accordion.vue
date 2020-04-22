<template>
	<div class="accordion">
		<div class="accordion__question-container" @click="toggle">
			<h3 class="accordion__question">{{ accordionContent.question }}</h3>
			<div :class="['accordion__button', {'accordion__button--toggle': showContent}]">
				<arrow-down-icon class="accordion__icon" />
			</div>
		</div>
		<div :class="['accordion__answer-container', {'accordion__answer-container--toggle': showContent}]">
			<div class="accordion__answer" v-for="(content, index) in accordionContent.content"
			:key="index" v-html="content">
			</div>
		</div>
	</div>
</template>

<script>
import ArrowDownIcon from './icons/arrow-down-icon';

export default {
	name: 'accordion',
	components: { ArrowDownIcon },
	props: {
		accordionContent: Object,
	},
	data() {
		return {
			showContent: false,
		};
	},
	methods: {
		toggle() {
			this.showContent = !this.showContent;
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

	.accordion__icon {
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
