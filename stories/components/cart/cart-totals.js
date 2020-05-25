import CartTotals from '../../../components/cart-totals';

export default {
	title: 'Components / Cart / CartTotals',
	component: CartTotals,
};

export function Overview() {
	return {
		components: { CartTotals },
		template: '<cart-totals :cart="cart" />',

		data() {
			return {
				cart: {
					subtotal: 100,
					total: 150.5,
					isShippingAvailable: true,
				},
			};
		},
	};
}

export function ShippingDeliveryPrice() {
	return {
		components: { CartTotals },
		template: '<cart-totals :cart="cart" />',

		data() {
			return {
				cart: {
					subtotal: 100,
					total: 150.5,
					shippingPrice: 40,
					isShippingAvailable: true,
				},
			};
		},
	};
}

export function FreeShipping() {
	return {
		components: { CartTotals },
		template: '<cart-totals :cart="cart" />',

		data() {
			return {
				cart: {
					subtotal: 100,
					total: 150.5,
					shippingPrice: 0.0,
					isShippingAvailable: true,
				},
			};
		},
	};
}

export function UnavailableShipping() {
	return {
		components: { CartTotals },
		template: '<cart-totals :cart="cart" />',

		data() {
			return {
				cart: {
					subtotal: 100,
					total: 150.5,
					isShippingAvailable: false,
				},
			};
		},
	};
}

export function Discounts() {
	return {
		components: { CartTotals },
		template: '<cart-totals :cart="cart" />',

		data() {
			return {
				cart: {
					originalTotalPrice: 220.4,
					subtotal: 100,
					total: 150.5,
					isShippingAvailable: true,
					discounts: [
						{ name: 'VIP Member Savings', amount: 2.5 },
						{ name: 'Points Redemption', amount: 6.5 },
					],
				},
			};
		},
	};
}
