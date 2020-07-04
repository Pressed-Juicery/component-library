import UpgradeForm from '../../../components/upgrade-form';
import { config } from '../../../config';

export default {
	title: 'Components / Forms / UpgradeForm',
	component: UpgradeForm,
};

// eslint-disable-next-line max-lines-per-function
export function Overview() {
	return {
		components: { UpgradeForm },
		template: `
			<div>
				<upgrade-form
					id="upgrade-form"
					:braintreeTokenizationKey="braintreeTokenizationKey"
					:selectedAmount="selectedAmount"
					:reloadAmounts="reloadAmounts"
					@submit="handlePaymentMethodChange"
				/>
				<button form="upgrade-form" type="submit">submit</button>
				<p v-if="data" style="margin-top:30px">data: <code>{{ data }}</code></p>
			</div>
		`,
		data() {
			return {
				braintreeTokenizationKey: config.braintreeTokenizationKey,
				selectedAmount: 10,
				data: null,
			};
		},
		methods: {
			handlePaymentMethodChange(data) {
				this.data = data;
				this.selectedAmount = data.selectedAmount;
			},
		},
		computed: {
			reloadAmounts() {
				// eslint-disable-next-line no-magic-numbers
				return [10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map(value => {
					return { name: `$${value}`, value };
				});
			},
		},
	};
}
