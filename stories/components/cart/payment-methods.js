import PaymentMethods from '../../../components/payment-methods.vue';

export default {
	title: 'Components / Cart / PaymentMethods',
	component: PaymentMethods,
};

const mastercard = {
	identifier: '····6789',
	vendor: 'mastercard',
};

const visa = {
	identifier: '····4321',
	vendor: 'visa',
};

const visa2 = {
	identifier: '····9360',
	vendor: 'visa',
};

const discover = {
	identifier: '····1111',
	vendor: 'discover',
};

const americanExpress = {
	identifier: '····2222',
	vendor: 'american express',
};

const unknown = {
	identifier: '····3563',
	vendor: 'unknown',
};

export function Overview() {
	return {
		components: { PaymentMethods },
		template: '<payment-methods :paymentMethods="paymentMethods" />',
		data() {
			return {
				paymentMethods: [
					mastercard,
					visa,
					visa2,
					discover,
					americanExpress,
					unknown,
				],
			};
		},
	};
}
