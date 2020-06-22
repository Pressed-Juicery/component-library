<template>
	<div :class="$style.root">
		<div :class="$style.header" @click="$emit('close')">
			<div>{{ title }}</div>
			<ArrowDown :class="$style.icon" />
		</div>

		<slot />
	</div>
</template>

<script>
import ArrowDown from './icons/arrow-down-icon';
import Drawer from './drawer';

export default {
	components: { ArrowDown, Drawer },

	props: {
		title: {
			type: String,
			required: true,
		},
	},
};
</script>

<style module lang="scss">
	@import "../styles/variables.scss";
	@import "../styles/mixins.scss";

	.root {
		padding: $spacing-06 $spacing-07;
	}

	.header {
		@include text-cta();

		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: $spacing-06;
		box-shadow: 0 7px 10px -8px rgba(226, 226, 226, 0.5);
		cursor: pointer;
	}

	.icon {
		width: $spacing-04;
	}
</style>
