import ValidatedSelect from '../components/validated-select';

export default {
	title: 'ValidatedSelect',
	component: ValidatedSelect,
};

export function Overview() {
	return {
		components: { ValidatedSelect },
		template: `
			<div>
				<validated-select label="Label"
				                  v-model="selectedItem"
				                  :options="options" />
				<p>Selected Item: {{ selectedItem }}</p>
			</div>
		`,

		data() {
			return {
				selectedItem: null,
				options: [
					{ name: 'California', value: 'CA'},
					{ name: 'Oregon', value: 'OR'},
					{ name: 'Nevada', value: 'NV'}
				],
				stateRules: [{
					validator: isNotEmpty,
					message: 'Please select a state.',
				}],
			};
		},
	};
}
