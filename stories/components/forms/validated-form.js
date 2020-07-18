import { hasMinimumLength, isNotEmpty } from '../../../utilities/validators';

import ValidatedForm from '../../../components/validated-form';
import ValidatedInput from '../../../components/validated-input';

export default {
	title: 'Components / Forms / ValidatedForm',
	component: ValidatedForm,
};

export function Overview() {
	return {
		components: { ValidatedForm, ValidatedInput },
		template: `
			<validated-form>
				<validated-input label="First Name" v-model="firstName" />
				<validated-input label="Second Name" v-model="secondName" />
			</validated-form>
		`,

		data() { return { firstName: null, secondName: null } },
	};
}

export function CustomErrorMessage() {
	return {
		components: { ValidatedForm, ValidatedInput },
		template: `
			<validated-form error-message="Form submission failed due to a server error.">
				<validated-input label="First Name" v-model="firstName"/>
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
				<validated-input type="text" label="Label" :rules="rules" v-model="model" />
				<button type="submit">Submit</button>
			</validated-form>
		`,

		data() {
			return {
				model: null,
				rules: [{
					validator: isNotEmpty,
					message: 'This field is required.',
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
				<validated-input type="text" label="First Name" :rules="firstNameRules" v-model="firstName" />
				<validated-input type="text" label="Password" :rules="passwordRules" v-model="password" />
				<button type="submit">Submit</button>
			</validated-form>
		`,

		data() {
			return {
				firstName: null,
				password: null,
				firstNameRules: [{
					validator: isNotEmpty,
					message: 'This field is required.',
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
	};
}

// eslint-disable-next-line max-lines-per-function
export function CustomValidatedInputErrorMessage() {
	return {
		components: { ValidatedForm, ValidatedInput },
		template: `
			<validated-form error-message="Form submission failed due to a server error.">
				<validated-input type="text" label="First Name" :rules="firstNameRules" v-model="firstName" />
				<validated-input type="text" label="Password" :rules="passwordRules" v-model="password" />
				<button type="submit">Submit</button>
			</validated-form>
		`,

		data() {
			return {
				firstName: null,
				password: null,
				firstNameRules: [{
					validator: isNotEmpty,
					message: 'This field is required.',
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
	};
}
