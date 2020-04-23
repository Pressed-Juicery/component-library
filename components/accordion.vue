<template>
	<div :class="['accordion', { 'accordion--open': isOpen }]">
		<div class="accordion__title-wrapper" @click="toggle">
			<div>{{ title }}</div>
			<arrow-down-icon class="accordion__icon" />
		</div>
		<div v-if="isOpen" class="accordion__slot">
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
		title: {
			type: String,
			required: true,
		},
	},
	data() {
		return {
			isOpen: false,
		};
	},
	methods: {
		toggle() {
			this.isOpen = !this.isOpen;
		},
	},
};
</script>

<style scoped lang="scss">
	@import '../styles/variables';

	$accordion-padding: $spacing-06;

	.accordion {
		border: 1px solid $border-color;
		border-radius: $border-radius;
		margin-bottom: $spacing-06;
	}

	.accordion__title-wrapper {
		padding: $accordion-padding;
		display: flex;
		align-items: center;
		justify-content: space-between;
		cursor: pointer;
	}

	.accordion__icon {
		flex-shrink: 0;
		width: $spacing-05;
		fill: $border-color;
		margin-left: $spacing-06;
	}

	.accordion__slot {
		padding: 0 $accordion-padding $accordion-padding;
	}

	.accordion--open {
		.accordion__button {
			transform: rotate(180deg);
		}
	}
</style>
