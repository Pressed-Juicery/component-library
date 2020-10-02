import SignUpForm from '../../../components/sign-up-form';

export default {
	title: 'Components / Forms / SignUpForm',
	component: SignUpForm,
};

export function Overview() {
	return {
		components: { SignUpForm },
		template: `
			<div>
				<sign-up-form
					id="sign-up-form"
					:is-phone-available-validator="isPhoneAvailableValidator"
					:is-email-available-validator="isEmailAvailableValidator"
					@submit="handleSubmit"
					@viewTerms="onViewTerms"
				/>
				<button form="sign-up-form" type="submit">Submit</button>
				<p v-if="data" style="margin-top:30px">data: <code>{{ data }}</code></p>
			</div>
		`,
		data() {
			return {
				data: null,
				isPhoneAvailableValidator: () => Promise.resolve(true),
				isEmailAvailableValidator: () => Promise.resolve(true),
			};
		},
		methods: {
			handleSubmit(data) {
				this.data = data;
			},
			onViewTerms() {
				console.log('User requested to view the Terms and Conditions');
			}
		},
	};
}
