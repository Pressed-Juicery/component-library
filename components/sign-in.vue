<template>
	<validated-form @submit="$emit('submit', { email, password })">
		<div :class="$style.title">Sign In</div>

		<validated-input :class="$style.row"
		                 type="email"
		                 autocomplete="email"
		                 label="Email"
		                 v-model="email" />

		<validated-input :class="$style.lastRow"
		                 type="password"
		                 autocomplete="current-password"
		                 label="Password"
		                 v-model="password" />

		<button :class="$style.submitButton" type="submit">{{ buttonText }}</button>
	</validated-form>
</template>

<script>
import ValidatedForm from './validated-form';
import ValidatedInput from './validated-input';

export default {
	components: { ValidatedForm, ValidatedInput },

	props: {
		buttonText: {
			type: String,
			required: true,
		},
	},

	data() {
		return {
			email: null,
			password: null,
		};
	},
};
</script>

<style module lang="scss">
	@import '../styles/mixins';
	@import '../styles/variables';

	.title {
		@include text-heading-5();
		margin: $spacing-07 0;
	}

	.row {
		margin-bottom: $spacing-05;
	}

	.lastRow {
		margin-bottom: $spacing-08;
	}

	.submitButton {
		@include button();
		display: block;
		width: 100%;
		margin: 0 auto;

		&:focus {
			outline: none;
		}
	}
</style>
