import PaymentMethodIcon from '../components/payment-method-icon';

export default {
	title: 'PaymentMethodIcon',
	component: PaymentMethodIcon,
};

export function AmericanExpress() {
	return {
		components: { PaymentMethodIcon },
		template: '<payment-method-icon type="american express" />',
	};
}

export function Discover() {
	return {
		components: { PaymentMethodIcon },
		template: '<payment-method-icon type="discover" />',
	};
}

export function Mastercard() {
	return {
		components: { PaymentMethodIcon },
		template: '<payment-method-icon type="mastercard" />',
	};
}

export function Visa() {
	return {
		components: { PaymentMethodIcon },
		template: '<payment-method-icon type="visa" />',
	};
}

export function Unknown() {
	return {
		components: { PaymentMethodIcon },
		template: '<payment-method-icon type="unknown" />',
	};
}
