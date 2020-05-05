<template>
	<div class="validated-select">
		<div>
			<label v-if="label" class=" validated-select__main-label" :for="label">{{ label }}</label>
			<select :id="label" v-model="model">
				<option v-for="(option, index) in options" :key="index" :value="option.value">
					{{ option.name }}
				</option>
			</select>
		</div>

		<label v-if="error" class="validated-select__error" :for="label">{{ error }}</label>
	</div>
</template>

<script>
	import { validate } from '../utilities/validations';

	export default {
		props: {
			label: String,
			placeholder: String,
			options: Array,
			selectedItem: String,
			rules: Array,
		},

		model: {
			prop: 'selectedItem',
			event: 'input',
		},

		computed: {
			model: {
				get() { return this.selectedItem },
				set(value) { this.$emit('input', value) },
			},
		},
	}
</script>

<style scoped lang="scss">
	@import '../styles/mixins';
	@import '../styles/variables';

	.validated-select__main-label {
		@include text-body-medium();
		@include text-bolder();
	}

	.validated-select__error {
		@include text-body-small();
		@include text-error();
	}
</style>
