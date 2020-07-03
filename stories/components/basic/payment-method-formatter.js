import PaymentMethodFormatter from '../../../components/payment-method-formatter';

export default {
	title: 'Components / Basic / PaymentMethodFormatter',
	component: PaymentMethodFormatter,
};

export function Overview() {
	return {
		components: { PaymentMethodFormatter },
		template: '<payment-method-formatter :payment-method="paymentMethod" />',

		data() {
			return {
				paymentMethod: {
					vendor: 'visa',
					identifier: '····4321',
				},
			};
		},
	};
}
