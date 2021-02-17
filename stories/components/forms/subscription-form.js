import SubscriptionForm from '../../../components/subscription-form';

export default {
	title: 'Components / Forms / SubscriptionForm',
	component: SubscriptionForm,
};

export function Overview() {
	return {
		components: { SubscriptionForm },
		template: `
			<div>
				<subscription-form
					id="subscription-form"
					:paymentMethods="paymentMethods"
					:reloadAmounts="reloadAmounts"
					@submit="handleSubmit"
				/>
				<p v-if="formData" style="margin-top:24px">data: <code>{{ formData }}</code></p>
				<button form="subscription-form" type="submit" style="margin-top:24px">Submit</button>
			</div>
		`,
		data() {
			return {
				formData: null,
				paymentMethods: [
					{ identifier: '····6789', vendor: 'mastercard' },
					{ identifier: '····4321', vendor: 'visa' },
					{ identifier: '····1111', vendor: 'discover' },
				],
				// eslint-disable-next-line no-magic-numbers
				reloadAmounts: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map(price => {
					return {
						name: `$${price}`,
						value: {
							id: `membership_${price}`,
							price,
						},
					};
				}),
			};
		},
		methods: {
			handleSubmit(data) {
				this.formData = data;
			},
		},
	};
}
