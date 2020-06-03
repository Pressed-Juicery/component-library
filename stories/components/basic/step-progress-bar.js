import StepProgressBar from '../../../components/step-progress-bar.vue';

export default {
	title: 'Components / Basic / StepProgressBar',
	component: StepProgressBar,
};

export function Overview() {
	return {
		components: { StepProgressBar },
		template: `
			<step-progress-bar
				:states="states"
				:currentState="currentState"
				@newState="newState => currentState = newState"
			/>
		`,
		data() {
			return {
				states: [
					{ name: 'Cart', completed: true },
					{ name: 'Fulfillment', completed: true },
					{ name: 'Payment', completed: false },
					{ name: 'Review', completed: false },
				],
				currentState: 2,
			};
		},
	};
}
