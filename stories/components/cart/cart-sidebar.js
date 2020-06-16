import { CHANGE, boolean, withKnobs } from '@storybook/addon-knobs';
import CartSidebar from '../../../components/cart-sidebar';
import { addons } from '@storybook/addons';
import { redemptionRates } from '../../../demo-data/redemption-rates.data';

export default {
	title: 'Components / Cart / CartSidebar',
	component: CartSidebar,
	decorators: [withKnobs],
};

const cartItems = [{
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
	modifiers: [{
		groupName: 'Toppings',
		name: 'peanuts, caramel, bananas',
	}],
}];

const mixins = [{
	methods: {
		closeSlider() {
			// Reference: https://github.com/storybookjs/storybook/issues/3855#issuecomment-638245040
			addons.getChannel().emit(CHANGE, {
				name: 'Active',
				value: false,
			});
		},

		getUser() {
			return {
				firstName: 'Carl',
				lastName: 'McGee',
				points: 220,
			};
		},

		updateItemQuantity(item) {
			const items = this.cart.items.filter(cartItem => cartItem.id !== item.id);

			this.cart = { ...this.cart, items };
		},
	},
}];

// eslint-disable-next-line max-lines-per-function
export function Overview() {
	return {
		components: { CartSidebar },
		mixins,
		template: `
			<cart-sidebar
				:is-active="isActive"
				:user="user"
				:cart="cart"
				:redemption-rates="redemptionRates"
				@close="closeSlider"
				@cart-quantity-change="updateItemQuantity"
			/>
		`,
		props: {
			isActive: {
				default: boolean('Active', true),
			},
		},
		data() {
			return {
				cart: {
					itemCount: 2,
					items: cartItems,
					originalSubtotal: 14.5,
					subtotal: 10,
					discounts: [
						{ name: 'VIP Member Savings', amount: 2.5 },
						{ name: 'Points Redemption', amount: 6.5 },
					],
					total: 100,
					isShippingAvailable: true,
					fulfillmentSelection: { price: 40 },
				},
				user: this.getUser(),
				redemptionRates,
			};
		},
	};
}

// eslint-disable-next-line max-lines-per-function
export function EmptyCart() {
	return {
		components: { CartSidebar },
		mixins,
		template: `
			<cart-sidebar
				:is-active="isActive"
				:user="user"
				:cart="cart"
				:redemption-rates="redemptionRates"
				@close="closeSlider"
			/>
		`,
		props: {
			isActive: {
				default: boolean('Active', true),
			},
		},
		data() {
			return {
				cart: {
					itemCount: 0,
					items: [],
					originalSubtotal: 0,
					subtotal: 0,
					total: 0,
					isShippingAvailable: false,
				},
				user: this.getUser(),
				items: [],
				redemptionRates,
			};
		},
	};
}
