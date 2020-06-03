import StepProgressBar from '../../../components/step-progress-bar.vue';

export default {
	component: StepProgressBar,
	title: "Components / Basic / StepProgressBar",
}

export function Overview() {
	return {
		components: { StepProgressBar },
		template: `
			<step-progress-bar :states="states" :currentState="currentState" />
		 `,
		data() {
			return {
				states: [
					{ name: "Cart", completed: true },
					{ name: "Fulfillment", completed: true },
					{ name: "Payment", completed: false },
					{ name: "Review", completed: false }
				],
				currentState: 2,
				currentIndex: this.currentState
			}
		}
	}
}

