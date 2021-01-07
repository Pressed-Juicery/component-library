<template>
	<div>
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
		<validated-input
			type="email"
			autocomplete="email"
			label="Email"
			:rules="rules.email"
			v-model="user.email"
		/>

		<div :class="$style.birthdayLabel">Birthday (optional)</div>
		<validated-birthday v-model="user.birthday" />

		<validated-password
			label="Password"
			autocomplete="new-password"
			v-model="user.password"
		/>

		<validated-input
			type="tel"
			autocomplete="tel"
			label="Phone Number"
			:rules="rules.phone"
			v-model="user.phone"
		/>

		<validated-checkbox :class="$style.legalText" v-model="user.acceptsSmsMarketing">
			Text me! Text messaging is a great way to get order notifications and learn
			about our special deals and promotions. By submitting this form, you agree to
			receive recurring automated marketing text messages from Pressed Juicery at
			the cell number used when signing up. Consent is not a condition of any
			purchase. Message & data rates may apply. Message frequency is recurring.
			Messages may be auto-dialed from Pressed Juicery. Maximum ten (10)
			promotional messages a month. Reply STOP to quit. View the
			<a :class="$style.underline" @click.prevent="$emit('messagingTerms')">Messaging Terms &amp; Conditions.</a>
		</validated-checkbox>
	</div>
</template>

<script>
import {
	isEmail,
	isNotEmpty,
	isValidPhoneNumber,
	isZipCode,
} from '../utilities/validators';
import ValidatedBirthday from './validated-birthday';
import ValidatedCheckbox from './validated-checkbox';
import ValidatedInput from './validated-input';
import ValidatedPassword from './validated-password';

export default {
	props: {
		id: String,
		isEmailAvailableValidator: {
			type: Function,
			required: true,
		},
		isPhoneAvailableValidator: {
			type: Function,
			required: true,
		},
	},
	components: {
		ValidatedInput,
		ValidatedBirthday,
		ValidatedCheckbox,
		ValidatedPassword,
	},
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
				postal: [{
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

<style lang='scss' module>
	@import '../styles/variables';
	@import '../styles/mixins';

	.birthdayLabel {
		@include label();
		margin-bottom: $spacing-05;
	}

	.birthdayMessage {
		margin-bottom: $spacing-03;
	}

	.legalText {
		color: $deep-green;
	}

	.underline {
		text-decoration: underline;
		cursor: pointer;
	}
</style>
