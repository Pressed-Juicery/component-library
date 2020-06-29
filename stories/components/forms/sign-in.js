import SignIn from '../../../components/sign-in';

export default {
	title: 'Components / Forms / SignIn',
	component: SignIn,
};

export function Overview() {
	return {
		components: { SignIn },
		template: `
			<div>
				<sign-in button-text="Sign In" @sign-in="data => credentials = data" />
				<div v-if="credentials">credentials: {{ credentials }}</div>
			</div>
		`,

		data() { return { credentials: null } },
	};
}

export function CustomErrorMessage() {
	return {
		components: { SignIn },
		template: `
			<div>
				<sign-in button-text="Sign In" :error-message="errorMessage" @sign-in="data => credentials = data" />
				<div v-if="credentials">credentials: {{ credentials }}</div>
			</div>
		`,

		data() { return { credentials: null, errorMessage: 'Email is already taken.' } },
	};
}
