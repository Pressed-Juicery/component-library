import { boolean, withKnobs } from '@storybook/addon-knobs';
import CartSidebar from '../../../components/cart-sidebar';

export default {
	title: 'Components / Cart / CartSidebar',
	component: CartSidebar,
	decorators: [withKnobs],
};

const fullCart = [{
	id: 1,
	variant: {
		name: 'Strawberry Basil Lemonade',
		imageUrl: 'https://cdn.shopify.com/s/files/1/0252/3833/9670/products/STLEM_43924384-906a-4aaa-a74f-6fcb8fb22cfb_large.png?v=1565306900',
	},
	quantity: 1,
	originalPrice: 6.75,
	price: 6.00,
}, {
	id: 2,
	variant: {
		name: 'Chocolate Freeze (Size 1)',
		imageUrl: 'https://cdn.shopify.com/s/files/1/0252/3833/9670/products/STLEM_43924384-906a-4aaa-a74f-6fcb8fb22cfb_large.png?v=1565306900',
	},
	quantity: 1,
	originalPrice: 6.75,
	price: 6.00,
	modifiers: {
		toppings: 'peanuts, caramel, bananas',
	},
}];

const mixins = [{
	methods: {
		closeSlider() {
			this.isActive = false;
		},

		getItems() {
			this.items = fullCart;
		},

		getEmptyItems() {
			this.items = [];
		},

		getUser() {
			// Placeholder for async call
			this.user = {
				firstName: 'Carl',
				lastName: 'McGee',
				points: 220,
			};
		},

		getTotal() {
			const subtotal = this.getSubtotal();
			const { price: shipping } = this.getFulfillmentSelection();

			return subtotal + shipping;
		},

		getCart() {
			this.cart = {
				itemCount: 2,
				items: fullCart,
				originalSubtotal: 14.5,
				subtotal: 10,
				discounts: [
					{ name: 'VIP Member Savings', amount: 2.5 },
					{ name: 'Points Redemption', amount: 6.5 },
				],
				total: 100,
				isShippingAvailable: true,
				fulfillmentSelection: { price: 40 },
			};
		},

		getEmptyCart() {
			this.cart = {
				itemCount: 2,
				items: [],
				originalSubtotal: 14.5,
				subtotal: 10,
				discounts: [
					{ name: 'VIP Member Savings', amount: 2.5 },
					{ name: 'Points Redemption', amount: 6.5 },
				],
				total: 100,
				isShippingAvailable: true,
				fulfillmentSelection: { price: 40 },
			};
		},

		updateItemQuantity(item) {
			const index = this.cart.items.findIndex(cartItem => cartItem.id === item.id);

			if (item.quantity) {
				this.cart.items[index].quantity = item.quantity;
			} else {
				this.cart.items = this.cart.items.filter(cartItem => cartItem.id === item.id);
			}

			this.getCart();
		},

	},
}];

export function Overview() {
	return {
		components: { CartSidebar },
		mixins,
		template: `
			<cart-sidebar
				:is-active="isActive"
				:user="user"
				:cart="cart"
				@close="closeSlider"
				@cart-quantity-change="updateItemQuantity"/>`,
		props: {
			isActive: {
				default: boolean('Active', true),
			},
		},
		created() {
			this.getCart();
			this.getUser();
		},
		data() {
			return {
				cart: {},
				user: {},
			};
		},
	};
}

export function EmptyCart() {
	return {
		components: { CartSidebar },
		mixins,
		template: `
			<cart-sidebar
				:is-active="isActive"
				:user="user"
				:cart="cart"
				@close="closeSlider"/>`,
		props: {
			isActive: {
				default: boolean('Active', true),
			},
		},
		created() {
			this.getEmptyItems();
			this.getEmptyCart();
			this.getUser();
		},
		data() {
			return {
				cart: {},
				user: {},
			};
		},
	};
}
