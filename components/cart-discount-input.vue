<template>
	<div :class="$style.root">
		<input placeholder="Discount Code" :class="$style.input" v-model="discountCode"/>
		<button
			:class="[$style.button, 'button--tertiary']"
			:disabled="!discountCode"
			@click="submit"
		>Apply</button>
	</div>
</template>

<script>

export default {
	data() {
		return {
			discountCode: null,
		};
	},
	methods: {
		submit() {
			this.$emit('submit', this.discountCode);
			this.discountCode = null;
		}
	}
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
