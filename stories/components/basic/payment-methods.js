import PaymentMethods from '../../../components/payment-methods.vue';

export default {
	title: 'Components / Basic / PaymentMethods',
	component: PaymentMethods,
};

export function Overview() {
	return {
		components: { PaymentMethods },
		template: '<payment-methods :paymentMethods="paymentMethods" @edit="onEdit"/>',
		data() {
			return {
				paymentMethods: [
					{ identifier: '····6789', vendor: 'mastercard' },
					{ identifier: '····4321', vendor: 'visa' },
					{ identifier: '····9360', vendor: 'visa' },
					{ identifier: '····1111', vendor: 'discover' },
					{ identifier: '····2222', vendor: 'american express' },
					{ identifier: '····3563', vendor: 'unknown' },
				],
			};
		},
		methods: {
			onEdit() {
				console.log('captured "edit" event'); // eslint-disable-line no-console
			},
		},
	};
}
