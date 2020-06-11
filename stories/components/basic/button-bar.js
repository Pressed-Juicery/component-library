import ButtonBar from '../../../components/button-bar';

export default {
	title: 'Components / Basic / ButtonBar',
	component: ButtonBar,
};

export function Overview() {
	return {
		components: { ButtonBar },
		template: `
			<button-bar
				:button-labels="['Pick Up', 'Delivery', 'Shipping']"
				:selected-label="selectedLabel"
				@change="onChange"
			/>
		`,
		data() {
			return {
				selectedLabel: 'Pick Up',
			};
		},
		methods: {
			onChange(value) {
				this.selectedLabel = value;
			},
		},
	};
}
