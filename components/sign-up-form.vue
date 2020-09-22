<template>
	<validated-form :id="id" @submit="$emit('submit', user)">
		<div :class="$style.row">
			<validated-input
				type="text"
				label="First Name"
				:rules="rules.firstName"
				v-model="user.firstName"
			/>
			<validated-input
				type="text"
				label="Last Name"
				:rules="rules.lastName"
				v-model="user.lastName"
			/>
		</div>
		<validated-input type="email" label="Email" :rules="rules.email" v-model="user.email" />
		<validated-input type="password" label="Password" :rules="rules.password" v-model="user.password" />
		<div :class="$style.birthdayWrapper">
			<div :class="$style.birthdayLabel">Birthday (optional)</div>
			<div :class="$style.birthdayMessage">So we can send you something sweet!</div>
			<validated-birthday v-model="user.birthday" />
		</div>
		<validated-input type="tel" label="Phone Number" :rules="rules.phone" v-model="user.phone" />
	</validated-form>
</template>

<script>
import { hasMinimumLength, isEmail, isNotEmpty, isValidPhoneNumber } from '../utilities/validators';
import ValidatedBirthday from './validated-birthday';
import ValidatedForm from './validated-form';
import ValidatedInput from './validated-input';

export default {
	components: {
		ValidatedForm,
		ValidatedInput,
		ValidatedBirthday,
	},
	props: {
		id: {
			type: String,
		},
	},
	// eslint-disable-next-line max-lines-per-function
	data() {
		return {
			user: {},
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
				}],
				password: [{
					validator: isNotEmpty,
					message: 'Please enter a password.',
				}, {
					validator: hasMinimumLength,
					options: { length: 6 },
					message: 'Passwords must be at least 6 characters long.',
				}],
				phone: [{
					validator: isNotEmpty,
					message: 'Please enter a valid phone number.',
				}, {
					validator: isValidPhoneNumber,
					message: 'Please enter a valid phone number.',
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
</style>
