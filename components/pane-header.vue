<template>
	<div :class="$style.root">
		<div @click="$emit('back')">
			<arrow-down-icon :class="$style.arrow" color="#262626" />
		</div>
		<div @click="$emit('close')">
			<close-icon :class="$style.close" />
		</div>
	</div>
</template>

<script>
import ArrowDownIcon from './icons/arrow-down-icon';
import CloseIcon from './icons/close-icon';

export default {
	components: { ArrowDownIcon, CloseIcon },
};
</script>

<style module lang="scss">
	@import "../styles/variables";

	.root {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.arrow {
		height: $spacing-04;
		width: $spacing-04;
		transform: rotate(90deg);
		cursor: pointer;
	}

	.close {
		height: $spacing-04;
		width: $spacing-04;
		cursor: pointer;
	}
</style>
