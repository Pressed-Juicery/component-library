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
	price: 6.75,
}, {
	id: 2,
	variant: {
		name: 'Chocolate Freeze (Size 1)',
		imageUrl: 'https://cdn.shopify.com/s/files/1/0252/3833/9670/products/STLEM_43924384-906a-4aaa-a74f-6fcb8fb22cfb_large.png?v=1565306900',
	},
	quantity: 1,
	price: 6.55,
	modifiers: {
		toppings: 'peanuts, caramel, bananas',
	},
}];

const mixins = {
	methods: {
		closeSlider() {
			this.active = false;
		},

		getItems() {
			// Placeholder for async call
			return fullCart;
		},

		getEmptyItems() {
			return [];
		},

		getUser() {
			// Placeholder for async call
			this.user = {
				firstName: 'Carl',
				lastName: 'McGee',
				points: 220,
			};
		},

		getItemCount(items) {
			return items.reduce((accum, item) => accum + Number(item.quantity), 0);
		},

		getOriginalTotalPrice(items) {
			return items.reduce((accum, item) => accum + (Number(item.price) * Number(item.quantity)), 0) || 0;
		},

		getSubtotal() {
			const subtotal = this.getOriginalTotalPrice(this.items) - this.getTotalDiscounts(this.getCartDiscounts());

			return subtotal > 0 ? subtotal : 0;
		},

		getCartDiscounts() {
			// Placeholder for async call
			return [
				{ name: 'VIP Member Savings', amount: 2.5 },
				{ name: 'Points Redemption', amount: 6.5 },
			];
		},

		getTotalDiscounts(discounts) {
			return discounts.reduce((accum, discount) => accum + Number(discount.totalDiscount), 0) || 0;
		},

		isShippingAvailable() {
			// Placeholder for async call
			return true;
		},

		getFulfillmentSelection() {
			// Placeholder for async call
			return {
				price: 40,
			};
		},

		getTotal() {
			const subtotal = this.getSubtotal();
			const { price: shipping } = this.getFulfillmentSelection();

			return subtotal + shipping;
		},

		getCart() {
			this.cart = {
				itemCount: this.getItemCount(this.items),
				items: this.items,
				originalTotalPrice: this.getOriginalTotalPrice(this.items),
				subtotal: this.getSubtotal(this.items),
				discounts: this.getCartDiscounts(),
				total: this.getTotal(),
				isShippingAvailable: this.isShippingAvailable(),
				fulfillmentSelection: this.getFulfillmentSelection(),
			};
		},

		getEmptyCart() {
			this.cart = {
				itemCount: this.getItemCount(this.items),
				items: [],
				originalTotalPrice: this.getOriginalTotalPrice(this.items),
				subtotal: this.getSubtotal(this.items),
				discounts: this.getCartDiscounts(),
				total: this.getTotal(),
				isShippingAvailable: this.isShippingAvailable(),
				fulfillmentSelection: this.getFulfillmentSelection(),
			};
		},

		updateItemQuantity(item) {
			const index = this.items.findIndex(cartItem => cartItem.name.toLowerCase() === item.name.toLowerCase());

			if (item.quantity) {
				this.items[index].quantity = item.quantity;
			} else {
				this.items = this.items.filter(cartItem => cartItem.name.toLowerCase() !== item.name.toLowerCase());
			}

			this.getCart();
		},

	},
};

export function Overview() {
	return {
		components: { CartSidebar },
		mixins: [mixins],
		template: `<cart-sidebar
			:is-active="isActive"
			:items="items"
			:user="user"
			:cart="cart"
			@close="closeSlider"
			@cart-quantity-change="updateItemQuantity"/>`,
		props: {
			isActive: {
				default: boolean('Active', true),
			},
		},
		async created() {
			this.items = await this.getItems();
			this.getCart();
			this.getUser();
		},
		data() {
			return {
				items: [],
				cart: {},
				user: {},
			};
		},
	};
}

export function EmptyCart() {
	return {
		components: { CartSidebar },
		mixins: [mixins],
		template: `<cart-sidebar
			:active="active"
			:user="user"
			:cart="cart"
			@close="closeSlider"/>`,
		props: {
			active: {
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
				items: [],
				user: {},
			};
		},
	};
}
