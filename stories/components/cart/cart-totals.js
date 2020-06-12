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
				},
			};
		},
	};
}
