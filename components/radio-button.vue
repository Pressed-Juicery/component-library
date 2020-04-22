<template>
	<span class="radio-button" @click="model = value">
		<input class="radio-button__input" type="radio" :value="value" v-model="model" />
		<span class="radio-button__button" />
	</span>
</template>

<script>
export default {
	model: {
		prop: 'selectedValue',
		event: 'change',
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
			set(value) { this.$emit('change', value) },
		},
	},
};
</script>

<style scoped lang="scss">
@import '../styles/variables';

.radio-button {
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
