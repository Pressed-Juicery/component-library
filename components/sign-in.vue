<template>
	<validated-form @submit="$emit('submit', { email, password })"
	                :show-error="showError"
	                :error-message="errorMessage">
		<div :class="$style.title">Sign In</div>

		<validated-input :class="$style.row"
		                 type="text"
		                 label="Email"
		                 v-model="email"
		                 :rules="emailRules" />

		<validated-input :class="$style.lastRow"
		                 type="password"
		                 label="Password"
		                 v-model="password"
		                 :rules="passwordRules" />

		<button :class="$style.submitButton" type="submit">{{ buttonText }}</button>
	</validated-form>
</template>

<script>
import { hasMinimumLength, isEmail, isNotEmpty } from '../utilities/validators';

import ValidatedForm from './validated-form';
import ValidatedInput from './validated-input';

export default {
	components: { ValidatedForm, ValidatedInput },

	props: {
		buttonText: {
			type: String,
			required: true,
		},

		errorMessage: {
			type: String,
			default: null,
		},
	},

	data() {
		return {
			email: null,
			password: null,

			emailRules: [{
				validator: isNotEmpty,
				message: 'Please enter a valid email address.',
			},
			{
				validator: isEmail,
				message: 'Please enter a valid email address.',
			}],

			passwordRules: [{
				validator: isNotEmpty,
				message: 'This field is required.',
			}, {
				validator: hasMinimumLength,
				message: 'Must be at least 6 characters long.',
				options: { length: 6 },
			}],
		};
	},

	computed: {
		showError() {
			return Boolean(this.errorMessage);
		},
	},
};
</script>

<style module lang="scss">
	@import '../styles/buttons';
	@import '../styles/mixins';
	@import '../styles/variables';

	.title {
		@include text-heading-5();

		margin-bottom: $spacing-07;
	}

	.row {
		margin-bottom: $spacing-05;
	}

	.lastRow {
		margin-bottom: $spacing-08;
	}

	.submitButton {
		@extend .button--pill;

		display: block;
		width: 100%;
		max-width: $spacing-09 * $spacing-03 / 1px;
		margin: 0 auto;

		&:focus {
			outline: none;
		}
	}
</style>
