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
				<sign-up-form id="sign-up-form" @submit="handleSubmit" @viewTerms="onViewTerms" />
				<button form="sign-up-form" type="submit">Submit</button>
				<p v-if="data" style="margin-top:30px">data: <code>{{ data }}</code></p>
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
			onViewTerms() {
				console.log('User requested to view the Terms and Conditions');
			}
		},
	};
}
