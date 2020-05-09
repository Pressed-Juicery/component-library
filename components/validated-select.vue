<template>
	<div class="validated-select">
		<label v-if="label" class="validated-select__label" :for="id">{{ label }}</label>
		<select :id="id" v-model="model">
			<option v-for="(option, index) in options" :key="index" :value="option.value">
				{{ option.name }}
			</option>
		</select>

		<label v-if="error" class="validated-select__error" :for="id">{{ error }}</label>
	</div>
</template>

<script>
import { getRandom } from '../utilities/get-random';
import { validate } from '../utilities/validate';

export default {
	props: {
		label: String,
		selectedItem: String,
		rules: Array,
		options: {
			type: Array,
			required: true,
		},
	},

	model: {
		prop: 'selectedItem',
		event: 'input',
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

			return validate(this.selectedItem, this.rules)
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

	.validated-select {
		margin-bottom: $spacing-06;
	}

	.validated-select__label {
		@include text-bolder();
	}

	.validated-select__error {
		@include text-error();
	}
</style>
