<template>
	<div class="radio-button">
		<input class="radio-button__input" type="radio" :value="value" v-model="model" />
		<span class="radio-button__button" />
	</div>
</template>

<script>
export default {
	model: {
		prop: 'selectedValue',
	},

	props: {
		selectedValue: {
			required: true,
		},
		value: {
			required: true,
		},
	},

	computed: {
		model: {
			get() { return this.selectedValue },
			set(value) { this.$emit('input', value) },
		},
	},
};
</script>

<style scoped lang="scss">
@import '../styles/variables';

.radio-button {
	display: inline;
	font-size: 0;
	vertical-align: middle;
}

.radio-button__input {
	display: none;
}

.radio-button__button {
	display: inline-block;
	height: $spacing-05;
	width: $spacing-05;
	border: $border-width solid $border-color;
	border-radius: 50%;
	background-color: $white;
	cursor: pointer;
}

.radio-button__input:checked + .radio-button__button {
	background-color: $border-color;
}
</style>
