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
					:paymentMethods="paymentMethods"
					:selectedPaymentMethod="selectedPaymentMethod"
					:braintreeTokenizationKey="braintreeTokenizationKey"
					:reloadAmounts="reloadAmounts"
					@add-payment-method="onAddPaymentMethod"
					@submit="handleSubmit"
				/>
				<p v-if="data" style="margin-top:24px">data: <code>{{ data }}</code></p>
				<button form="upgrade-form" type="submit" style="margin-top:24px">Submit</button>
			</div>
				`,
		data() {
			return {
				braintreeTokenizationKey: config.braintreeTokenizationKey,
				paymentMethods: [
					{
						vendor: 'visa',
						id: 'ctqpvw2',
						identifier: '····4242',
						isPrimary: true,
					},
					{
						vendor: 'visa',
						id: 'nck9nc6',
						identifier: '····4242',
						isPrimary: false,
					},
				],
				selectedPaymentMethod: {
					vendor: 'visa',
					id: 'ctqpvw2',
					identifier: '····4242',
					isPrimary: true,
				},
				data: null,
			};
		},
		methods: {
			onAddPaymentMethod() {
				return 'payment';
			},
			handleSubmit(data) {
				this.data = data;
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
