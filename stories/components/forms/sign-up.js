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
				@privacyPolicy="onPrivacyPolicy"
				@messagingTerms="onMessagingTerms"
			/>`,
		methods: {
			isPhoneAvailableValidator: () => Promise.resolve(true),
			isEmailAvailableValidator: () => Promise.resolve(true),
			onPrivacyPolicy() {
				console.log('Clicked privacy policy link'); // eslint-disable-line no-console
			},
			onMessagingTerms() {
				console.log('Clicked messaging terms link'); // eslint-disable-line no-console
			},
		},
	};
}
