import StepProgressBar from '../../../components/step-progress-bar';

export default {
	title: 'Components / Basic / StepProgressBar',
	component: StepProgressBar,
};

const steps = [
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
				:steps="steps"
				:currentStep="currentStep"
				@stepChange="step => currentStep = step"
			/>
		`,
		data() {
			return {
				steps,
				currentStep: steps[2],
			};
		},
	};
}

export function OnPreviouslyCompletedStep() {
	return {
		components: { StepProgressBar },
		template: `
			<step-progress-bar
				:steps="steps"
				:currentStep="currentStep"
				@stepChange="step => currentStep = step"
			/>
		`,
		data() {
			return {
				steps,
				currentStep: steps[1],
			};
		},
	};
}
