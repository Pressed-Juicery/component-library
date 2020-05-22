<template>
	<div :class="[$style.root, { [$style.isOpen]: isOpen }]">
		<div :class="$style.title" @click="toggle">
			<div>{{ title }}</div>
			<arrow-down-icon :class="$style.icon" />
		</div>
		<div v-if="isOpen" :class="$style.slot">
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

<style module lang="scss">
	@import '../styles/variables';

	$accordion-padding: $spacing-06;

	.root {
		border: 1px solid $border-color;
		border-radius: $border-radius;
		margin-bottom: $spacing-06;
	}

	.title {
		padding: $accordion-padding;
		display: flex;
		align-items: center;
		justify-content: space-between;
		cursor: pointer;
	}

	.icon {
		flex-shrink: 0;
		width: $spacing-05;
		fill: $border-color;
		margin-left: $spacing-06;
	}

	.slot {
		padding: 0 $accordion-padding $accordion-padding;
	}

	.isOpen {
		.icon {
			transform: rotate(180deg);
		}
	}
</style>
