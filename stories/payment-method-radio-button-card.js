import PaymentMethodRadioButtonCard from '../components/payment-method-radio-button-card';

export default {
	title: 'PaymentMethodRadioButtonCard',
	component: PaymentMethodRadioButtonCard,
};

const paymentMethod = {
	expirationDate: '11/22',
	billingAddress: {
		postalCode: '93711',
	},
};

const mastercard = {
	maskedNumber: '123456789',
	cardType: 'mastercard',
	...paymentMethod,
};

const visa = {
	maskedNumber: '987654321',
	cardType: 'visa',
	...paymentMethod,
};

const visa2 = {
	maskedNumber: '148259360',
	cardType: 'visa',
	...paymentMethod,
};

const discover = {
	maskedNumber: '11111111111',
	cardType: 'discover',
	expirationDate: '02/22',
	...paymentMethod,
};

const americanExpress = {
	maskedNumber: '2222222222',
	cardType: 'american express',
	expirationDate: '05/22',
	...paymentMethod,
};

const unknown = {
	maskedNumber: '45654343563',
	cardType: 'Excelsior',
	...paymentMethod,
};

export function Overview() {
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

export function Mastercard() {
	return {
		components: { PaymentMethodRadioButtonCard },
		template: '<payment-method-radio-button-card :paymentMethod="mastercard" v-model="selectedPaymentMethod" />',

		data() { return { mastercard, selectedPaymentMethod: visa } },
	};
}

export function Visa() {
	return {
		components: { PaymentMethodRadioButtonCard },
		template: '<payment-method-radio-button-card :paymentMethod="visa" v-model="selectedPaymentMethod" />',

		data() { return { visa, selectedPaymentMethod: discover } },
	};
}

export function Discover() {
	return {
		components: { PaymentMethodRadioButtonCard },
		template: '<payment-method-radio-button-card :paymentMethod="discover" v-model="selectedPaymentMethod" />',

		data() { return { discover, selectedPaymentMethod: visa } },
	};
}

export function AmericanExpress() {
	return {
		components: { PaymentMethodRadioButtonCard },
		template: `
			<payment-method-radio-button-card :paymentMethod="americanExpress" v-model="selectedPaymentMethod" />
		`,

		data() { return { americanExpress, selectedPaymentMethod: visa } },
	};
}

export function Unknown() {
	return {
		components: { PaymentMethodRadioButtonCard },
		template: '<payment-method-radio-button-card :paymentMethod="unknown" v-model="selectedPaymentMethod" />',

		data() { return { unknown, selectedPaymentMethod: visa } },
	};
}

export function RadioGroup() {
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
