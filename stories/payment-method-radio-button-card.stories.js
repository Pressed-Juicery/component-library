import PaymentMethodRadioButtonCard from '../components/payment-method-radio-button-card';

export default {
	title: 'PaymentMethodRadioButtonCard',
	component: PaymentMethodRadioButtonCard,
};

const mastercard = {
	uniqueNumberIdentifier: 'qwerty12345',
	maskedNumber: '123456789',
	cardType: 'mastercard',
	expirationDate: '11/22',
	billingAddress: {
		postalCode: '93711',
	},
};

const visa = {
	uniqueNumberIdentifier: 'asdfg7890',
	maskedNumber: '987654321',
	cardType: 'visa',
	expirationDate: '10/22',
	billingAddress: {
		postalCode: '93799',
	},
};

const discover = {
	uniqueNumberIdentifier: 'zxcv9876',
	maskedNumber: '11111111111',
	cardType: 'discover',
	expirationDate: '02/22',
	billingAddress: {
		postalCode: '93709',
	},
};

const americanExpress = {
	uniqueNumberIdentifier: 'poiu12345',
	maskedNumber: '2222222222',
	cardType: 'american express',
	expirationDate: '05/22',
	billingAddress: {
		postalCode: '93776',
	},
};

const unknown = {
	uniqueNumberIdentifier: 'lkjhg12345',
	maskedNumber: '45654343563',
	cardType: 'Excelsior',
	expirationDate: '09/22',
	billingAddress: {
		postalCode: '93678',
	},
};

export function Default() {
	return {
		components: { PaymentMethodRadioButtonCard },
		template: '<payment-method-radio-button-card :paymentMethod="mastercard" v-model="selectedPaymentMethod" />',

		data() { return { mastercard, selectedPaymentMethod: visa } },
	};
}

export function Checked() {
	return {
		components: { PaymentMethodRadioButtonCard },
		template: '<payment-method-radio-button-card :paymentMethod="mastercard" v-model="selectedPaymentMethod" />',

		data() { return { mastercard, selectedPaymentMethod: mastercard } },
	};
}

export function withMastercard() {
	return {
		components: { PaymentMethodRadioButtonCard },
		template: '<payment-method-radio-button-card :paymentMethod="mastercard" v-model="selectedPaymentMethod" />',

		data() { return { mastercard, selectedPaymentMethod: visa } },
	};
}

export function withVisa() {
	return {
		components: { PaymentMethodRadioButtonCard },
		template: '<payment-method-radio-button-card :paymentMethod="visa" v-model="selectedPaymentMethod" />',

		data() { return { visa, selectedPaymentMethod: discover } },
	};
}

export function withDiscover() {
	return {
		components: { PaymentMethodRadioButtonCard },
		template: '<payment-method-radio-button-card :paymentMethod="discover" v-model="selectedPaymentMethod" />',

		data() { return { discover, selectedPaymentMethod: visa } },
	};
}

export function withAmericanExpress() {
	return {
		components: { PaymentMethodRadioButtonCard },
		template: `
			<payment-method-radio-button-card :paymentMethod="americanExpress" v-model="selectedPaymentMethod" />
		`,

		data() { return { americanExpress, selectedPaymentMethod: visa } },
	};
}

export function withUnknownPaymentMethod() {
	return {
		components: { PaymentMethodRadioButtonCard },
		template: '<payment-method-radio-button-card :paymentMethod="unknown" v-model="selectedPaymentMethod" />',

		data() { return { unknown, selectedPaymentMethod: visa } },
	};
}

export function withMultipleSelections() {
	return {
		components: { PaymentMethodRadioButtonCard },
		template: `
			<div>
				<payment-method-radio-button-card v-for="paymentMethod in paymentMethods"
				                                  :key="paymentMethod.id"
				                                  :paymentMethod="paymentMethod"
				                                  v-model="selectedPaymentMethod" />
			</div>
		`,

		data() {
			return {
				paymentMethods: [mastercard, visa, discover, americanExpress, unknown],
				selectedPaymentMethod: mastercard,
			};
		},
	};
}
