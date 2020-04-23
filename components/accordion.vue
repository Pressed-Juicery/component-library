<template>
	<div :class="['accordion', { 'accordion--open': showContent }]">
		<div class="accordion__title-wrapper" @click="toggle">
			<div class="accordion__title">{{ title }}</div>
			<arrow-down-icon class="accordion__icon" />
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

	.accordion__icon {
		width: $spacing-05;
		fill: $border-color;
		margin-left: $spacing-04;
	}

	.accordion--open {
		.accordion__button {
			transform: rotate(180deg);
		}
	}
</style>
