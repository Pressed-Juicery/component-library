<template>
	<drawer
		:class="{[$style.hasCustomHeader]: hasCustomHeader}"
		:isOpen="isOpen"
		@close="$emit('close')"
	>
		<div v-if="hasCustomHeader" :class="$style.customHeader" @click="$emit('close')">
			<slot name="custom-header"/>
		</div>

		<div v-else :class="$style.header" @click="$emit('close')">
			<div>{{ title }}</div>
			<ArrowDown :class="$style.icon" />
		</div>

		<div :class="$style.content">
			<slot />
		</div>
	</drawer>
</template>

<script>
import ArrowDown from './icons/arrow-down-icon';
import Drawer from './drawer';

export default {
	components: { ArrowDown, Drawer },

	props: {
		isOpen: {
			type: Boolean,
			require: true,
		},

		title: {
			type: String,
		},
	},

	computed: {
		hasCustomHeader() {
			return Boolean(this.$slots['custom-header']);
		},
	},
};
</script>

<style module lang="scss">
	@import "../styles/variables";
	@import "../styles/mixins";

	.header {
		@include text-cta();
		position: sticky;
		top: 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: $spacing-06 $spacing-07;
		border-bottom: $border-light;
		background: white;
		cursor: pointer;
		z-index: 1;
	}

	.icon {
		width: $spacing-04;
	}

	.content {
		padding: $spacing-06 $spacing-07;
	}

	.hasCustomHeader {
		.customHeader,
		.content {
			background-color: $beige;
		}
	}
</style>
