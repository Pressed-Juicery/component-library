<template>
	<div class="accordion">
		<div class="accordion__title-wrapper" @click="toggle">
			<div class="accordion__title">{{ title }}</div>
			<div :class="['accordion__button', {'accordion__button--toggle': showContent}]">
				<arrow-down-icon class="accordion__icon" />
			</div>
		</div>
		<div :class="['accordion__content', {'accordion__content--toggle': showContent}]">
			<slot />
		</div>
	</div>
</template>

<script>
import ArrowDownIcon from './icons/arrow-down-icon';

export default {
	name: 'accordion',
	components: { ArrowDownIcon },
	props: {
		title: String,
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

<style scoped lang="scss">
	@import '../styles/variables';

	.accordion {
		padding: $spacing-06;
		border: 1px solid $border-color;
		border-radius: $border-radius;
		margin-bottom: $spacing-06;
	}

	.accordion:last-of-type {
		margin-bottom: 0;
	}

	.accordion__title-wrapper {
		display: flex;
		align-items: center;
		justify-content: space-between;
		cursor: pointer;
	}

	.accordion__title {
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
		fill: $border-color;
	}

	.accordion__button--toggle {
		transform: rotate(180deg);
	}

	.accordion__content {
		max-height: 0;
		opacity: 0;
		overflow: hidden;
		transition: .3s ease max-height, .3s ease opacity;
	}

	.accordion__content--toggle {
		max-height: 1000px;
		opacity: 1;
	}
</style>
