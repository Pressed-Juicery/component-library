import StepProgressBar from '../../../components/step-progress-bar';

export default {
	title: 'Components / Basic / StepProgressBar',
	component: StepProgressBar,
};

const states = [
	{ name: 'Cart', completed: true },
	{ name: 'Fulfillment', completed: true },
	{ name: 'Payment', completed: false },
	{ name: 'Review', completed: false },
];

export function Overview() {
	return {
		components: { StepProgressBar },
		template: `
			<step-progress-bar
				:states="states"
				:currentState="currentState"
				@stateChange="state => currentState = state"
			/>
		`,
		data() {
			return {
				states,
				currentState: states[2],
			};
		},
	};
}

export function OnPreviouslyCompletedState() {
	return {
		components: { StepProgressBar },
		template: `
			<step-progress-bar
				:states="states"
				:currentState="currentState"
				@stateChange="state => currentState = state"
			/>
		`,
		data() {
			return {
				states,
				currentState: states[1],
			};
		},
	};
}
