<template>
	<div :class="$style.root">
		<div v-if="heading" :class="$style.heading">{{ heading }}</div>

		<div :class="$style.item" v-for="item in menuItems" :key="item.label" @click="item.action()">
			<span :class="$style.label">{{ item.label }}</span>
		</div>

		<div :class="$style.buttonWrapper">
			<button :class="$style.closeButton" @click="$emit('close')">Close</button>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		heading: {
			type: String,
		},

		menuItems: {
			type: Array,
			require: true,
		},
	},
};
</script>

<style module lang="scss">
	@import '../styles/mixins';
	@import '../styles/variables';

	.root {
		text-align: center;
	}

	.heading, .item {
		padding: $spacing-06 0;
		border-bottom: $border-light;
	}

	.heading {
		@include text-heading-5();
	}

	.item {
		@include text-cta-small();
		display: grid;
		cursor: pointer;
	}

	.label {
		display: inline-block;
		height: 10px;
		margin: auto;
	}

	.buttonWrapper {
		margin: $spacing-07;
	}

	.closeButton {
		@include button();
		width: 100%;
	}
</style>
