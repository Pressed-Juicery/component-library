import ValidatedForm from '../components/validated-form';

export default {
	title: 'ValidatedForm',
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
			<validated-form :showError="true"
			                errorMessage="There was a problem submitting this form.">
				<label>
					First Name
					<input v-model="firstName"/>
				</label>
			</validated-form>
		`,

		data() { return { firstName: null } },
	};
}

// eslint-disable-next-line max-lines-per-function
export function DynamicErrorMessage() {
	return {
		components: {
			ValidatedForm,
			FirstNameInput: {
				template: '<label>First Name<input v-model="firstName" /></label>',

				data() { return { firstName: null } },

				methods: {
					isValid() {
						return Boolean(this.firstName);
					},
				},
			},
			SecondNameInput: {
				template: '<label>Second Name<input v-model="secondName" /></label>',

				data() { return { secondName: null } },

				methods: {
					isValid() {
						return Boolean(this.secondName);
					},
				},
			},
		},
		template: `
			<validated-form :showError="showError"
			                errorMessage="There was a problem submitting this form.">
				<first-name-input />
				<second-name-input />
				<button style="display:block; margin-top:20px; width:120px" type="submit">Submit</button>
			</validated-form>
		`,

		data() { return { showError: false } },
	};
}
