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

		data() {
			return {
				isLazy: true,
				error: null,
			};
		},

		computed: {
			model: {
				get() { return this.selectedItem },
				set(value) { this.$emit('input', value) },
			},
		},

		watch: {
			model() { this.lazilyValidate() },
			rules() { this.lazilyValidate() },
			errorMessage(value) { this.error = value },
		},
		methods: {
			lazilyValidate() {
				if (!this.isLazy) this.validate();
			},

			validate() {
				this.isLazy = false;

				return validate(this.value, this.rules)
					.then(error => {
						this.error = error;

						return error;
					});
			},

			isValid() {
				return this.validate().then(hasError => !hasError);
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
