<template>
	<div class="validated-input">
		<div>
			<label v-if="label" :for="label" class="validated-input_main-label">{{ label }}</label>
			<label v-if="labelHelper" :for="label" class="validated-input_label-helper">{{ labelHelper }}</label>
			<input :id="label" v-bind="$attrs" v-model="model" @blur="validate()">
		</div>

		<label v-if="error" class="validated-input__error" :for="label">{{ error }}</label>
	</div>
</template>

<script>
import { validate } from '../utilities/validations';

export default {
	props: {
		label: {
			type: String,
		},

		labelHelper: {
			type: String,
		},

		errorMessage: {
			type: String,
		},

		rules: Array,
		value: null,
	},

	data() {
		return {
			isLazy: true,
			error: null,
		};
	},

	computed: {
		model: {
			get() { return this.value },
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
};
</script>

<style scoped lang="scss">
	@import '../styles/mixins';
	@import '../styles/variables';

	.validated-input_main-label {
		@include text-body-medium();
		@include text-bolder();
	}

	.validated-input_label-helper {
		@include text-body-medium();

		display: block;
		margin-bottom: $spacing-01;
	}

	.validated-input__error {
		@include text-body-small();
		@include text-error();
	}
</style>
