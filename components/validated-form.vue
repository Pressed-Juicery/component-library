<template>
	<form :id="id" v-bind="$attrs" @submit.prevent="validate()" novalidate>
		<slot></slot>
		<div v-if="error" class="alert alert--danger">{{ error }}</div>
	</form>
</template>

<script>
export default {
	props: {
		id: {
			type: String,
		},
		errorMessage: {
			type: String,
		},
	},

	data() {
		return { hasError: false };
	},

	methods: {
		validate() {
			this.hasError = false;

			const promises = this.$children
				.filter(child => typeof child.isValid === 'function')
				.map(child => child.isValid());

			Promise.all(promises)
				.then(results => {
					this.hasError = results.some(isValid => !isValid);

					if (!this.hasError) this.$emit('submit');
				});
		},
	},

	computed: {
		error() {
			const defaultMessage = 'There was a problem submitting this form. Please fix any errors and try again.';

			return this.errorMessage || (this.hasError && defaultMessage);
		},
	},
};
</script>
