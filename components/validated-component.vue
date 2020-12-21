<template>
	<div :class="$style.root">
		<label v-if="label" :class="$style.label" :for="id" >{{ label }}</label>
		<label v-if="labelHelper" :for="id">{{ labelHelper }}</label>
		<slot />

		<label v-if="!error && helpText" :for="id">{{ helpText }}</label>
		<label v-if="error" :class="$style.error" :for="id">{{ error }}</label>
	</div>
</template>

<script>
import { validate } from '../utilities/validate';

export default {
	props: {
		id: String,
		label: String,
		labelHelper: String,
		helpText: String,
		errorMessage: String,
		rules: Array,
		value: null,
		isEager: Boolean,
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
		value() { this.lazilyValidate() },
		rules() { this.lazilyValidate() },
		isEager() { if (this.isEager) this.validate(); },
		errorMessage(message) { this.error = message },
	},

	methods: {
		lazilyValidate() {
			if (!this.isLazy) this.validate();
		},

		validate() {
			this.isLazy = false;

			return validate(this.value, this.rules)
				.then(error => (this.error = error));
		},

		isValid() {
			return this.validate().then(hasError => !hasError);
		},
	},
};
</script>

<style module lang="scss">
	@import '../styles/mixins';
	@import '../styles/variables';

	.root {
		margin-bottom: $spacing-06;
	}

	.label {
		@include label();
	}

	.error {
		@include text-error();
	}
</style>
