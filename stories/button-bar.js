import ButtonBar from '../components/button-bar';

export default {
	title: 'ButtonBar',
	component: ButtonBar,
};

export function Overview() {
	return {
		components: { ButtonBar },
		template: `
			<button-bar
				:button-labels="['Pick Up', 'Delivery', 'Shipping']"
				selected-label="Pick Up"
				@change="onChange"
			/>
		`,
		methods: {
			onChange(value) {
				console.log(`Selected button changed: ${value}`); // eslint-disable-line no-console
			},
		},
	};
}
