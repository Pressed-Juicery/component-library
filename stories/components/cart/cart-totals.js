import CartTotals from '../../../components/cart-totals';

export default {
	title: 'Components / Cart / CartTotals',
	component: CartTotals,
};

const cart = {
	subtotal: 100,
	total: 150.5,
	shippingPrice: 40,
	discounts: [
		{ name: 'VIP Member Savings', amount: 2.5 },
		{ name: 'Points Redemption', amount: 6.5 },
	],
};

export function Overview() {
	return {
		components: { CartTotals },
		template: '<cart-totals :cart="cart" style="margin:40px" />',

		data() {
			return {
				cart: {
					subtotal: 100,
					total: 150.5,
				},
			};
		}
	};
}

export function ShippingDeliveryPrice() {
	return {
		components: { CartTotals },
		template: '<cart-totals :cart="cart"  style="margin:40px" />',

		data() {
			return {
				cart: {
					subtotal: 100,
					total: 150.5,
					shippingPrice: 40,
				},
			};
		},
	};
}

export function Discounts() {
	return {
		components: { CartTotals },
		template: '<cart-totals :cart="cart"  style="margin:40px" />',

		data() {
			return {
				cart: {
					originalTotalPrice: 220.4,
					subtotal: 100,
					total: 150.5,
					discounts: [
						{ name: 'VIP Member Savings', amount: 2.5 },
						{ name: 'Points Redemption', amount: 6.5 },
					],
				},
			};
		},
	};
}
