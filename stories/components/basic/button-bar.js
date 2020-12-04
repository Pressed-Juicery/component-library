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
export function SecondRowAsArray() {
	return {
		components: { ButtonBar },
		template: `
			<button-bar
				:button-labels="['TestOne', ['TestTwo', 'TestTwoSubheading'], 'TestThree']"
				:selected-label="selectedLabel"
				@change="onChange"
			/>
		`,
		data() {
			return {
				selectedLabel: 'TestTwo',
			};
		},
		methods: {
			onChange(value) {
				this.selectedLabel = value;
			},
		},
	};
}

export function SecondRowAsObject() {
	return {
		components: { ButtonBar },
		template: `
			<button-bar
				:button-labels="['TestOne', { heading: 'TestTwo', subheading: 'TestSubheading' }, 'TestThree']"
				:selected-label="selectedLabel"
				@change="onChange"
			/>
		`,
		data() {
			return {
				selectedLabel: 'TestTwo',
			};
		},
		methods: {
			onChange(value) {
				this.selectedLabel = value;
			},
		},
	};
}
