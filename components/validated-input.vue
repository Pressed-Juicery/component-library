<template>
	<div class="validated-input">
		<div>
			<label v-if="label" :for="label" class="validated-input__label">{{ label }}</label>
			<label v-if="labelHelper" :for="label" class="validated-input__label-helper">{{ labelHelper }}</label>
			<input :id="label" v-bind="$attrs" v-model="model" @blur="validate()">
		</div>

		<label v-if="error" class="validated-input__error" :for="label">{{ error }}</label>
	</div>
</template>

<script>
import { validate } from '../utilities/validate';

export default {
	props: {
		label: String,
		labelHelper: String,
		errorMessage: String,
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

	.validated-input__label {
		@include text-bolder();
	}

	.validated-input__label-helper {
		display: block;
	}

	.validated-input__error {
		@include text-error();
	}
</style>
