<template>
	<span :class="$style.root" @click="model = value">
		<input :id="id" :class="$style.input" type="radio" :value="value" v-model="model" />
		<span :class="$style.button" />
	</span>
</template>

<script>
export default {
	model: {
		prop: 'selectedValue',
		event: 'change',
	},

	props: {
		id: String,
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

<style module lang="scss">
@import '../styles/variables';

.root {
	font-size: 0;
	line-height: 0;
	vertical-align: middle;
}

.input {
	display: none;
}

.button {
	display: inline-block;
	height: $spacing-05;
	width: $spacing-05;
	border: $border-width solid $border-color;
	border-radius: 50%;
	background-color: $white;
	cursor: pointer;
}

.input:checked + .button {
	background-color: $border-color;
}
</style>
