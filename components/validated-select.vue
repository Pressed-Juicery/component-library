<template>
	<div :class="$style.root">
		<label v-if="label" :class="$style.label" :for="id">{{ label }}</label>
		<select :id="id" v-model="model">
			<option v-for="(option, index) in options" :key="index" :value="option.value">
				{{ option.name }}
			</option>
		</select>

		<label v-if="error" :class="$style.error" :for="id">{{ error }}</label>
	</div>
</template>

<script>
import { getRandom } from '../utilities/get-random';
import { validate } from '../utilities/validate';

export default {
	props: {
		label: String,
		value: String,
		rules: Array,
		options: {
			type: Array,
			required: true,
		},
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

<style module lang="scss">
	@import '../styles/mixins';
	@import '../styles/variables';

	.root {
		margin-bottom: $spacing-06;
	}

	.label {
		@include text-bolder();
	}

	.error {
		@include text-error();
	}
</style>
