<template>
	<validated-form :id="id" @submit="$emit('submit', user)" :error-message="errorMessage">
		<div :class="$style.row">
			<validated-input
				type="text"
				autocomplete="given-name"
				label="First Name"
				:rules="rules.firstName"
				v-model="user.firstName"
			/>
			<validated-input
				type="text"
				autocomplete="family-name"
				label="Last Name"
				:rules="rules.lastName"
				v-model="user.lastName"
			/>
		</div>
		<validated-input
			type="email"
			autocomplete="email"
			label="Email"
			:rules="rules.email"
			v-model="user.email"
		/>
		<validated-input
			type="password"
			label="Password"
			:rules="rules.password"
			v-model="user.password"
		/>
		<div :class="$style.birthdayWrapper">
			<div :class="$style.birthdayLabel">Birthday (optional)</div>
			<div :class="$style.birthdayMessage">So we can send you something sweet!</div>
			<validated-birthday v-model="user.birthday" />
		</div>
		<validated-input
			type="tel"
			autocomplete="tel"
			label="Phone Number"
			:rules="rules.phone"
			v-model="user.phone"
		/>

		<validated-checkbox :class="$style.legalText" v-model="user.acceptsSmsMarketing">
			Text messaging is a great way to get order notifications
			and learn about our special deals and promotions.
			By submitting this form, you agree to receive recurring automated
			marketing text messages from Pressed Juicery at the cell number used when signing up.
			Consent is not a condition of any purchase.
			Message &amp; data rates may apply. Message frequency is recurring.
			Messages may be auto-dialed from Pressed Juicery.
			A maximum of ten (10) promotional messages will be sent per month. Reply STOP to quit.
		</validated-checkbox>

		<validated-checkbox
			:class="$style.legalText"
			:rules="rules.acceptsTermsAndConditions"
			v-model="acceptsTermsAndConditions"
		>
			By joining you agree to our
			<a :class="$style.underline" @click.prevent="$emit('viewTerms')">Terms &amp; Conditions</a>
			and you'll automatically receive Pressed Points offers via email.
		</validated-checkbox>
	</validated-form>
</template>

<script>
import {
	hasMinimumLength,
	isEmail,
	isNotEmpty,
	isValidPhoneNumber,
	isZipCode,
} from '../utilities/validators';
import ValidatedBirthday from './validated-birthday';
import ValidatedCheckbox from './validated-checkbox';
import ValidatedForm from './validated-form';
import ValidatedInput from './validated-input';

export default {
	components: {
		ValidatedForm,
		ValidatedInput,
		ValidatedBirthday,
		ValidatedCheckbox,
	},
	props: {
		id: String,
		errorMessage: {
			type: String,
			default: null,
		},
		isEmailAvailableValidator: {
			type: Function,
			required: true,
		},
		isPhoneAvailableValidator: {
			type: Function,
			required: true,
		},
	},
	// eslint-disable-next-line max-lines-per-function
	data() {
		return {
			user: { acceptsEmailMarketing: true },
			acceptsSmsMarketing: false,
			acceptsTermsAndConditions: false,
			rules: {
				firstName: [{
					validator: isNotEmpty,
					message: 'Please enter your first name.',
				}],
				lastName: [{
					validator: isNotEmpty,
					message: 'Please enter your last name.',
				}],
				email: [{
					validator: isNotEmpty,
					message: 'Please enter a valid email address.',
				}, {
					validator: isEmail,
					message: 'Please enter a valid email address.',
				}, {
					validator: this.isEmailAvailableValidator,
					message: `
						You've previously created an online account with us.
						Log in to complete your Pressed Points registration.
					`,
				}],
				password: [{
					validator: isNotEmpty,
					message: 'Please enter a password.',
				}, {
					validator: hasMinimumLength,
					message: 'Passwords must be at least 6 characters long.',
					options: { length: 6 },
				}],
				postal: [{
					validator: isNotEmpty,
					message: 'Please enter your ZIP code.',
				}, {
					validator: isZipCode,
					message: 'Please enter a valid ZIP code.',
				}],
				phone: [{
					validator: isNotEmpty,
					message: 'Please enter a phone number.',
				}, {
					validator: isValidPhoneNumber,
					message: 'Please enter a valid ten-digit phone number.',
				}, {
					validator: this.isPhoneAvailableValidator,
					message: 'Phone Number has already been claimed.',
				}],
				acceptsTermsAndConditions: [{
					validator: isNotEmpty,
					message: 'You must agree to the terms to complete your registration.',
				}],
			},
		};
	},
};
</script>

<style module lang="scss">
	@import '../styles/variables';
	@import '../styles/mixins';

	.row {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: $spacing-07;
	}

	.birthdayWrapper {
		margin-bottom: $spacing-06;
	}

	.birthdayLabel {
		@include label();
	}

	.birthdayMessage {
		@include text-body-small();
		margin-bottom: $spacing-03;
	}

	.legalText {
		color: $color-text-legal;
	}

	.underline {
		text-decoration: underline;
		cursor: pointer;
	}
</style>
