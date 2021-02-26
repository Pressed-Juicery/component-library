import PaymentMethodIcon from '../../components/payment-method-icon';

export default {
	title: 'Icons / PaymentMethodIcon',
	component: PaymentMethodIcon,
};

export function AmericanExpress() {
	return {
		components: { PaymentMethodIcon },
		template: '<payment-method-icon type="American Express" />',
	};
}

export function Discover() {
	return {
		components: { PaymentMethodIcon },
		template: '<payment-method-icon type="Discover" />',
	};
}

export function Mastercard() {
	return {
		components: { PaymentMethodIcon },
		template: '<payment-method-icon type="MasterCard" />',
	};
}

export function Visa() {
	return {
		components: { PaymentMethodIcon },
		template: '<payment-method-icon type="Visa" />',
	};
}

export function Paypal() {
	return {
		components: { PaymentMethodIcon },
		template: '<payment-method-icon type="PayPal" />',
	};
}

export function Venmo() {
	return {
		components: { PaymentMethodIcon },
		template: '<payment-method-icon type="Venmo" />',
	};
}

export function ApplePay() {
	return {
		components: { PaymentMethodIcon },
		template: '<payment-method-icon type="Apple Pay" />',
	};
}

export function GooglePay() {
	return {
		components: { PaymentMethodIcon },
		template: '<payment-method-icon type="Google Pay" />',
	};
}

export function Unknown() {
	return {
		components: { PaymentMethodIcon },
		template: '<payment-method-icon type="unknown" />',
	};
}
