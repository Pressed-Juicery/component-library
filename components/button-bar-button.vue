<template>
	<button class="button-bar-button"
	        :class="{ 'button-bar-button--active': value === selectedButton }"
	        @click="$emit('select-button', value)" >
		<slot />
	</button>
</template>

<script>

export default {
	props: {
		value: {
			required: true,
		},
		selectedButton: {
			default: null,
		},
	},
};

</script>

<style scoped lang="scss">
	@import '../styles/variables';

	.button-bar-button {
		flex-basis: 100%;
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
