<template>
	<div class="validated-input">
		<label v-if="label" class="validated-input__label" :for="id" >{{ label }}</label>
		<label v-if="labelHelper" :for="id">{{ labelHelper }}</label>
		<input :id="id" v-bind="$attrs" v-model="model" @blur="validate()">

		<label v-if="error" class="validated-input__error" :for="id">{{ error }}</label>
	</div>
</template>

<script>
import { getRandom } from '../utilities/get-random';
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
			id: getRandom(),
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

	.validated-input__error {
		@include text-error();
	}
</style>
