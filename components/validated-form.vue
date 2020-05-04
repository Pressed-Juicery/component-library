<template>
	<form v-bind="$attrs" @submit.prevent="validate()" novalidate>
		<slot></slot>
		<div v-if="(hasError || showError) && errorMessage" class="alert alert--danger">{{ errorMessage }}</div>
	</form>
</template>

<script>
export default {
	props: {
		errorMessage: {
			type: String,
			default: 'There was a problem submitting this form. Please fix any errors and try again.',
		},

		showError: {
			type: Boolean,
		},
	},

	data() {
		return {
			hasError: false,
		};
	},

	methods: {
		validate() {
			this.hasError = false;

			const promises = this.$children.map(child => child.isValid());

			Promise.all(promises)
				.then(results => {
					this.hasError = results.some(isValid => !isValid);

					if (!this.hasError) this.$emit('submit');
				});
		},
	},
};
</script>

<style scoped lang="scss">
	@import '../styles/alerts';
</style>
