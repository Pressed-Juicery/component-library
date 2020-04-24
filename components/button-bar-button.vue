<template>
	<button class="button-bar-button"
	        :class="{ 'button-bar-button--active': isSelected }"
	        @click="$emit('select')" >
		<slot />
	</button>
</template>

<script>

export default {
	props: {
		isSelected: {
			type: Boolean,
			default: null,
		},
	},
};

</script>

<style scoped lang="scss">
	@import '../styles/variables';

	.button-bar-button {
		border: $border-width solid $border-color;
		border-right: none;
		border-radius: 0;
		background-color: transparent;
		color: $gray-100;
	}

	.button-bar-button:focus {
		outline: none;
	}

	.button-bar-button:first-child {
		border-top-left-radius: $border-radius;
		border-bottom-left-radius: $border-radius;
	}

	.button-bar-button:last-child {
		border-right: $border-width solid $border-color;
		border-top-right-radius: $border-radius;
		border-bottom-right-radius: $border-radius;
	}

	.button-bar-button--active {
		background-color: $beige;
	}
</style>
