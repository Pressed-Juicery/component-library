import { hasMinimumLength, isNotEmpty } from '../utilities/validators';

import ValidatedForm from '../components/validated-form';
import ValidatedInput from '../components/validated-input';

export default {
	title: 'ValidatedForm',
	component: ValidatedForm,
};

export function Overview() {
	return {
		components: { ValidatedForm },
		template: `
			<validated-form :showError="false">
				<label>
					First Name
					<input v-model="firstName"/>
				</label>

				<label>
					Second Name
					<input v-model="secondName"/>
				</label>
			</validated-form>
		`,

		data() { return { firstName: null, secondName: null } },
	};
}

export function ErrorMessage() {
	return {
		components: { ValidatedForm },
		template: `
			<validated-form :showError="true">
				<label>
					First Name
					<input v-model="firstName"/>
				</label>
			</validated-form>
		`,

		data() { return { firstName: null } },
	};
}

export function CustomErrorMessage() {
	return {
		components: { ValidatedForm },
		template: `
			<validated-form :showError="true" errorMessage="Form submission failed due to a server error.">
				<label>
					First Name
					<input v-model="firstName"/>
				</label>
			</validated-form>
		`,

		data() { return { firstName: null } },
	};
}

export function SingleValidatedInput() {
	return {
		components: { ValidatedForm, ValidatedInput },
		template: `
			<validated-form>
				<validated-input type="text"
				                 label="Label"
				                 :rules="rules"
				                 v-model="model" />
				<button style="margin-top:20px" type="submit">SUBMIT</button>
			</validated-form>
		`,

		data() {
			return {
				model: null,
				rules: [{
					validator: isNotEmpty,
					message: 'Please enter something.',
				}, {
					validator: hasMinimumLength,
					message: 'Must be at least 6 characters long.',
					options: { length: 6 },
				}],
			};
		},
	};
}

// eslint-disable-next-line max-lines-per-function
export function MultipleValidatedInputs() {
	return {
		components: { ValidatedForm, ValidatedInput },
		template: `
			<validated-form>
				<validated-input type="text"
				                 label="First Name"
				                 :rules="firstNameRules"
				                 v-model="firstName" />

				<validated-input type="text"
				                 label="Password"
				                 :rules="passwordRules"
				                 v-model="password" />
				<button style="margin-top:20px" type="submit">SUBMIT</button>
			</validated-form>
		`,

		data() {
			return {
				firstName: null,
				password: null,
				firstNameRules: [{
					validator: isNotEmpty,
					message: 'Please enter something.',
				}],
				passwordRules: [{
					validator: isNotEmpty,
					message: 'Please enter something.',
				}, {
					validator: hasMinimumLength,
					message: 'Must be at least 6 characters long.',
					options: { length: 6 },
				}],
			};
		},
	};
}

// eslint-disable-next-line max-lines-per-function
export function CustomValidatedInputErrorMessage() {
	return {
		components: { ValidatedForm, ValidatedInput },
		template: `
		<validated-form :show-error="showError" error-message="Form submission failed due to a server error.">
			<validated-input type="text"
			                 label="First Name"
			                 :rules="firstNameRules"
			                 v-model="firstName" />

			<validated-input type="text"
			                 label="Password"
			                 :rules="passwordRules"
			                 v-model="password" />
			<button style="margin-top:20px" type="submit">SUBMIT</button>
		</validated-form>
	`,

		data() {
			return {
				firstName: null,
				password: null,
				showError: false,
				firstNameRules: [{
					validator: isNotEmpty,
					message: 'Please enter something.',
				}],
				passwordRules: [{
					validator: isNotEmpty,
					message: 'Please enter something.',
				}, {
					validator: hasMinimumLength,
					message: 'Must be at least 6 characters long.',
					options: { length: 6 },
				}],
			};
		},
	};
}
