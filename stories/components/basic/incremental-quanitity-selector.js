import IncrementalQuantitySelector from '../../../components/incremental-quantity-selector.vue';

export default {
	title: 'Components / Basic / IncrementalQuantitySelector',
	component: IncrementalQuantitySelector,
};

export function Overview() {
	return {
		components: { IncrementalQuantitySelector },
		template: `
			<div>
				<incremental-quantity-selector style="margin-bottom: 24px" v-model="quantity" />
				<button style="margin-bottom: 24px" @click="quantity++">Increment Quantity</button>
				<div>Value: {{ quantity }}</div>
			</div>
		`,
		data() {
			return {
				quantity: 5,
			};
		},
	};
}
