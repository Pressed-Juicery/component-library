import StepProgressBar from '../../../components/step-progress-bar.vue';

// You can store the data as a constant and reference that.

export default {
    component: StepProgressBar,
    title: "Components / Basic / StepProgressBar"
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
                    { name: "Cart", completed: false },
                    { name: "Fulfillment", completed: false },
                    { name: "Payment", completed: false },
                    { name: "Review", completed: false }
                ],
                currentState: { name: "Cart", completed: false }
            }
        }
    }
}

