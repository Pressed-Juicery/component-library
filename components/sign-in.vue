<template>
	<validated-form @submit="$emit('submit', { email, password })" :error-message="errorMessage" >
		<div :class="$style.title">Sign In</div>

		<validated-input :class="$style.row"
		                 type="email"
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
				message: 'Please enter a password.',
			}, {
				validator: hasMinimumLength,
				message: 'Passwords must be at least 6 characters long.',
				options: { length: 6 },
			}],
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
