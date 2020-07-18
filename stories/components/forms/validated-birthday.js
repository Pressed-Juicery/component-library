import ValidatedBirthday from '../../../components/validated-birthday.vue';

export default {
	title: 'Components / Forms / ValidatedBirthday',
	component: ValidatedBirthday,
};

export function Overview() {
	return {
		components: { ValidatedBirthday },
		template: `
			<div>
				<validated-birthday @input="onInput"/>
				<div style="margin-top:24px;">Birthday: {{ birthday }}</div>
			</div>
		`,
		data() {
			return { birthday: null };
		},
		methods: {
			onInput(value) {
				this.birthday = value;
			},
		},
	};
}
