import SignUp from '../../../components/sign-up.vue';

export default {
	title: 'Components / Forms / SignUp',
	component: SignUp,
};

export function Overview() {
	return {
		components: { SignUp },
		template: `
			<sign-up
				id="sign-up"
				:isPhoneAvailableValidator="isPhoneAvailableValidator"
				:isEmailAvailableValidator="isEmailAvailableValidator"
			/>`,
		methods: {
			isPhoneAvailableValidator: () => Promise.resolve(true),
			isEmailAvailableValidator: () => Promise.resolve(true),
		},
	};
}
