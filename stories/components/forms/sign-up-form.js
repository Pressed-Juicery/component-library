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
				<sign-up-form ref="signup" @submit="handleSubmit">
					<button type="submit">submit</button>
				</sign-up-form>
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
