import Signin from '../../../components/signin';

export default {
	title: 'Components / Forms / Signin',
	component: Signin,
};

export function Overview() {
	return {
		components: { Signin },
		template: `
			<div>
				<signin button-text="Sign In" @sign-in="data => credentials = data" />
				<div v-if="credentials">credentials: {{ credentials }}</div>
			</div>
		`,

		data() { return { credentials: null } },
	};
}

export function CustomErrorMessage() {
	return {
		components: { Signin },
		template: `
			<div>
				<signin button-text="Sign In"
				        :error-message="errorMessage"
				        @sign-in="(email, password) => credentials = { email, password }" />
				<div v-if="credentials">credentials: {{ credentials }}</div>
			</div>
		`,

		data() { return { credentials: null, errorMessage: 'Email is already taken.' } },
	};
}
