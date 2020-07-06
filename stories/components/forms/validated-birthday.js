import ValidatedBirthday from "../../../components/validated-birthday.vue";

export default {
	title: 'Components / Forms / ValidatedBirthday',
	component: ValidatedBirthday,
};

export function Overview() {
	return {
		components: { ValidatedBirthday },
		template: `<validated-birthday />`,
	};
}
