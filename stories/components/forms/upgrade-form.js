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
					@submit="formData => this.formData = formData"
				/>
				<p v-if="formData" style="margin-top:24px">data: <code>{{ formData }}</code></p>
				<button form="upgrade-form" type="submit" style="margin-top:24px">Submit</button>
			</div>
		`,
		data() {
			return {
				braintreeTokenizationKey: config.braintreeTokenizationKey,
				formData: null,
				paymentMethods: [{
					vendor: 'visa',
					id: 'ctqpvw2',
					identifier: '····4242',
					isPrimary: true,
				}, {
					vendor: 'visa',
					id: 'nck9nc6',
					identifier: '····4242',
					isPrimary: false,
				}],
				selectedPaymentMethod: {
					vendor: 'visa',
					id: 'ctqpvw2',
					identifier: '····4242',
					isPrimary: true,
				},
				// eslint-disable-next-line no-magic-numbers
				reloadAmounts: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map(price => {
					return {
						name: `$${price}`,
						value: {
							id: `membership_${price}`,
							price
						},
					};
				}),
			};
		},
		methods: {
			onAddPaymentMethod() {
				console.log('Add new payment method'); // eslint-disable-line no-console
			},
		},
	};
}
