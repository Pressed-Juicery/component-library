<template>
	<div :class="$style.root">
		<input placeholder="Discount Code" :class="$style.input" v-model="value"/>
		<button :class="[$style.button, 'button--tertiary']" :disabled="!value">Apply</button>
	</div>
</template>

<script>

export default {
	data() {
		return {
			value: null,
		};
	},
};
</script>

<style module lang="scss">
	@import '../styles/variables';

	.root {
		display: flex;
	}

	.input {
		margin-right: $spacing-03;
	}

	.button {
		flex-shrink: 0;
	}
</style>
