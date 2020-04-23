<template>
	<div :class="['accordion', { 'accordion--open': showContent }]">
		<div class="accordion__title-wrapper" @click="toggle">
			<div class="accordion__title">{{ title }}</div>
			<div class="accordion__button">
				<arrow-down-icon class="accordion__icon" />
			</div>
		</div>
		<slot v-if="showContent" />
	</div>
</template>

<script>
import ArrowDownIcon from './icons/arrow-down-icon';

export default {
	name: 'accordion',
	components: { ArrowDownIcon },
	props: {
		title: {
			type: String,
			required: true,
		},
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

	.accordion--open {
		.accordion__button {
			transform: rotate(180deg);
		}
	}
</style>
