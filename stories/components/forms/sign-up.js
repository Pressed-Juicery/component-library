import SignUp from '../../../components/sign-up.vue';

export default {
	title: 'Components / Forms / SignUp',
	component: SignUp,
};

export function Overview() {
	return {
		components: { SignUp },
		template: '<sign-up />',
	};
}
