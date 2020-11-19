<template>
	<card v-if="upsell" :class="[[$style.root], {[$style.isOpen]: isOpen}]">
		<div :class="$style.header" @click="$emit('toggle')">
			<div>{{ upsell && upsell.title }}</div>
			<arrow-icon :class="$style.arrow" />
		</div>
		<div v-if="isOpen" :class="$style.body">
		</div>
	</card>
</template>

<script>
import Card from './card';
import ArrowIcon from './icons/arrow-down-icon';
export default {
	components: { ArrowIcon, Card },

	props: {
		upsell: {
			type: Object,
			required: true,
		},
		isOpen: Boolean,
	},
};
</script>

<style module lang="scss">
	@import '../styles/mixins';

	.header {
		@include text-heading-6;
		display: flex;
		align-items: center;
		justify-content: space-between;
		cursor: pointer;
	}

	.arrow {
		width: $spacing-04;
	}

	.isOpen .arrow{
		transform: rotate(180deg);
	}

</style>
