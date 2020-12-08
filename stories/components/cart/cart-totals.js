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
					originalSubtotal: 150,
					subtotal: 100,
					total: 150.5,
					isShippingAvailable: true,
					tip: 1.35,
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
					originalSubtotal: 150,
					subtotal: 100,
					total: 150.5,
					isShippingAvailable: true,
					fulfillmentPrice: 40,
					tip: 3,
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
					originalSubtotal: 150,
					subtotal: 100,
					total: 150.5,
					isShippingAvailable: true,
					fulfillmentPrice: 0,
					tip: 2.75,
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
					originalSubtotal: 150,
					subtotal: 100,
					total: 150.5,
					isShippingAvailable: false,
					tip: 0,
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
					originalSubtotal: 220.4,
					subtotal: 100,
					total: 150.5,
					isShippingAvailable: true,
					discountSummary: [
						{ name: 'VIP Member Savings', totalDiscount: 2.5 },
						{ name: 'Points Redemption', totalDiscount: 6.5 },
					],
					tip: 0,
				},
			};
		},
	};
}

export function Pickup() {
	return {
		components: { CartTotals },
		template: '<cart-totals :cart="cart" />',

		data() {
			return {
				cart: {
					originalSubtotal: 150,
					subtotal: 100,
					total: 100,
					isShippingAvailable: true,
					fulfillmentPrice: 0,
					fulfillmentSelection: {
						method: 'Pickup',
					},
					tip: 2,
				},
			};
		},
	};
}

export function LocalDelivery() {
	return {
		components: { CartTotals },
		template: '<cart-totals :cart="cart" />',

		data() {
			return {
				cart: {
					originalSubtotal: 150,
					subtotal: 100,
					total: 110,
					isShippingAvailable: true,
					fulfillmentPrice: 10,
					fulfillmentSelection: {
						method: 'Local Delivery',
					},
					tip: 4.05,
				},
			};
		},
	};
}

export function NationwideShipping() {
	return {
		components: { CartTotals },
		template: '<cart-totals :cart="cart" />',

		data() {
			return {
				cart: {
					originalSubtotal: 150,
					subtotal: 100,
					total: 115,
					isShippingAvailable: true,
					fulfillmentPrice: 15,
					fulfillmentSelection: {
						method: 'Nationwide Shipping',
					},
					tip: 3.25,
				},
			};
		},
	};
}
