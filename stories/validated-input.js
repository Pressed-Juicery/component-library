import ValidatedInput from '../components/validated-input';

export default {
	title: 'ValidatedInput',
	component: ValidatedInput,
};

import { hasMinimumLength, isEmail, isNotEmpty, isValidPhoneNumber } from '../utilities/validators';

export function Overview() {
	return {
		components: { ValidatedInput },
		template: `
			<validated-input type="text"
			                 label="First Name"
			                 v-model="firstName"
			                 :rules="firstNameRules" />
		`,
		data() {
			return {
				firstName: null,
				firstNameRules: [{
					validator: isNotEmpty,
					message: 'Please enter your first name.',
				}],
			}
		},
	};
}

export function LabelHelper() {
	return {
		components: { ValidatedInput },
		template: `
			<validated-input type="text"
			                 label="First Name"
			                 labelHelper="This is label helper text."
			                 v-model="firstName"
			                 :rules="firstNameRules" />
		`,
		data() {
			return {
				firstName: null,
				firstNameRules: [{
					validator: isNotEmpty,
					message: 'Please enter your first name.',
				}],
			}
		},
	};
}

export function Email() {
	return {
		components: { ValidatedInput },
		template: `
			<validated-input type="email"
			                 label="Email"
			                 labelHelper="This is label helper text."
			                 v-model="email"
			                 :rules="emailRules" />
		`,
		data() {
			return {
				email: null,
				emailRules: [{
					validator: isNotEmpty,
					message: 'Please enter a valid email address.',
				}, {
					validator: isEmail,
					message: 'Please enter a valid email address.',
				}],
			}
		},
	};
}

export function Password() {
	return {
		components: { ValidatedInput },
		template: `
			<validated-input type="password"
			                 label="Password"
			                 labelHelper="This is label helper text."
			                 v-model="password"
			                 :rules="passwordRules" />
		`,
		data() {
			return {
				password: null,
				passwordRules: [{
					validator: isNotEmpty,
					message: 'Please enter a password.',
				}, {
					validator: hasMinimumLength,
					message: 'Passwords must be at least 6 characters long.',
					options: { length: 6 },
				}],
			}
		},
	};
}

export function Phone() {
	return {
		components: { ValidatedInput },
		template: `
			<validated-input type="phone"
			                 label="Phone Number"
			                 labelHelper="This is label helper text."
			                 v-model="phone"
			                 :rules="phoneRules" />
		`,
		data() {
			return {
				phone: null,
				phoneRules: [{
					validator: isNotEmpty,
					message: 'Please enter a phone number.',
				}, {
					validator: isValidPhoneNumber,
					message: 'Please enter a valid ten-digit phone number.',
				}],
			}
		},
	};
}
