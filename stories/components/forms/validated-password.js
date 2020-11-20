import ValidatedPassword from '../../../components/validated-password';

export default {
	title: 'Components / Forms / ValidatedPassword',
	component: ValidatedPassword,
};

export function Overview() {
	return {
		components: { ValidatedPassword },
		template: '<validated-password label="Password" v-model="password" />',

		data() {
			return {
				password: null,
			};
		},
	};
}

export function Error() {
	return {
		components: { ValidatedPassword },
		template: `
			<div>
				<validated-password
					label="Password"
					v-model="password"
					:error-message="errorMessage"
				/>
				<button @click="errorMessage = 'Please recheck your password.'">Submit</button>
			</div>
		`,

		data() {
			return {
				password: null,
				errorMessage: null,
			};
		},
	};
}
