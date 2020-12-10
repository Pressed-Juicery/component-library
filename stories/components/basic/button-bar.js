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
				:button-labels="buttonLabels"
				:selected-label="selectedLabel"
				@change="onChange"
			/>
		`,
		data() {
			return {
				selectedLabel: 'Pick Up',
				buttonLabels: [
					{ heading: 'Pick Up' },
					{ heading: 'Delivery' },
					{ heading: 'Shipping' },
				],
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
				:button-labels="buttonLabels"
				:selected-label="selectedLabel"
				@change="onChange"
			/>
		`,
		data() {
			return {
				selectedLabel: 'Test 2',
				buttonLabels: [
					{ heading: 'Test 1', subheading: 'Test 1 Sub' },
					{ heading: 'Test 2', subheading: 'Test 2 Sub' },
					{ heading: 'Test 3', subheading: 'Test 3 Sub' },
					{ heading: 'Test 4' },
				],
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
