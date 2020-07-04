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
				<sign-up-form :id="'sign-up-form'" ref="signup" @submit="handleSubmit" />
				<button form="sign-up-form" type="submit">submit</button>
				<p>data:
					<code>{{ data }}</code>
				</p>
			</div>
		`,
		data() {
			return {
				data: null,
			};
		},
		methods: {
			handleSubmit(data) {
				this.data = data;
			},
		},
	};
}
