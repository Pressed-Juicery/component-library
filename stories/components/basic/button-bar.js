import ButtonBar from '../../../components/button-bar';

export default {
	title: 'Components / Basic / ButtonBar',
	component: ButtonBar,
};

export function Overview() {
	return {
		components: { ButtonBar },
		template: '<button-bar :buttons="buttons" :selected="selected" @change="onChange" />',
		data() {
			return {
				selected: null,
				buttons: [
					{ heading: 'Pick Up' },
					{ heading: 'Delivery' },
					{ heading: 'Shipping' },
				],
			};
		},
		created() {
			this.selected = this.buttons[0];
		},
		methods: {
			onChange(value) {
				this.selected = value;
			},
		},
	};
}
export function SecondRow() {
	return {
		components: { ButtonBar },
		template: '<button-bar :buttons="buttons" :selected="selected" @change="onChange" />',
		data() {
			return {
				selected: null,
				buttons: [
					{ heading: 'Test 1', subheading: 'Test 1 Sub' },
					{ heading: 'Test 2', subheading: 'Test 2 Sub' },
					{ heading: 'Test 3', subheading: 'Test 3 Sub' },
					{ heading: 'Test 4' },
				],
			};
		},
		created() {
			this.selected = this.buttons[0];
		},
		methods: {
			onChange(value) {
				this.selected = value;
			},
		},
	};
}

