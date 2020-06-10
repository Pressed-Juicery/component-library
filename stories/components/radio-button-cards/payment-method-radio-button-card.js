import PaymentMethodRadioButtonCard from '../../../components/payment-method-radio-button-card';

export default {
	title: 'Components / Radio Button Cards / PaymentMethodRadioButtonCard',
	component: PaymentMethodRadioButtonCard,
};

const mastercard = {
	identifier: '····6789',
	cardType: 'mastercard',
};

const visa = {
	identifier: '····4321',
	cardType: 'visa',
};

const visa2 = {
	identifier: '····9360',
	cardType: 'visa',
};

const discover = {
	identifier: '····1111',
	cardType: 'discover',
};

const americanExpress = {
	identifier: '····2222',
	cardType: 'american express',
};

const unknown = {
	identifier: '····3563',
	cardType: 'unknown',
};

export function Overview() {
	return {
		components: { PaymentMethodRadioButtonCard },
		template: '<payment-method-radio-button-card :paymentMethod="mastercard" v-model="selectedPaymentMethod" />',

		data() { return { mastercard, selectedPaymentMethod: null } },
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

		data() { return { mastercard, selectedPaymentMethod: null } },
	};
}

export function Visa() {
	return {
		components: { PaymentMethodRadioButtonCard },
		template: '<payment-method-radio-button-card :paymentMethod="visa" v-model="selectedPaymentMethod" />',

		data() { return { visa, selectedPaymentMethod: null } },
	};
}

export function Discover() {
	return {
		components: { PaymentMethodRadioButtonCard },
		template: '<payment-method-radio-button-card :paymentMethod="discover" v-model="selectedPaymentMethod" />',

		data() { return { discover, selectedPaymentMethod: null } },
	};
}

export function AmericanExpress() {
	return {
		components: { PaymentMethodRadioButtonCard },
		template: `
			<payment-method-radio-button-card :paymentMethod="americanExpress" v-model="selectedPaymentMethod" />
		`,

		data() { return { americanExpress, selectedPaymentMethod: null } },
	};
}

export function Unknown() {
	return {
		components: { PaymentMethodRadioButtonCard },
		template: '<payment-method-radio-button-card :paymentMethod="unknown" v-model="selectedPaymentMethod" />',

		data() { return { unknown, selectedPaymentMethod: null } },
	};
}

export function RadioGroup() {
	return {
		components: { PaymentMethodRadioButtonCard },
		template: `
			<div>
				<payment-method-radio-button-card v-for="paymentMethod in paymentMethods"
				                                  :key="paymentMethod.identifier"
				                                  :paymentMethod="paymentMethod"
				                                  v-model="selectedPaymentMethod" />
			</div>
		`,

		data() {
			return {
				paymentMethods: [mastercard, visa, visa2, unknown],
				selectedPaymentMethod: mastercard,
			};
		},
	};
}
