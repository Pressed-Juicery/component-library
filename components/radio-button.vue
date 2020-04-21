<template>
	<div class="radio-button">
		<input class="radio-button__input" type="radio" :value="item" v-model="radioButtonValue" />
		<span class="radio-button__button" />
	</div>
</template>

<script>
export default {
	props: {
		value: {
			type: Object,
			required: true,
		},
		item: {
			type: Object,
			required: true,
		},
	},

	computed: {
		radioButtonValue: {
			get: function () { return this.value },
			set: function (value) { this.$emit('input', value) },
		},
	},
};
</script>

<style scoped lang="scss">
@import '../styles/variables';

.radio-button__input {
	display: none;
}

.radio-button__button {
	display: block;
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	right: 0;
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
