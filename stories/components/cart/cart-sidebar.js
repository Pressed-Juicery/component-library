import { boolean, withKnobs } from '@storybook/addon-knobs';
import CartSidebar from '../../../components/cart-sidebar';

export default {
	title: 'Components / Cart / CartSidebar',
	component: CartSidebar,
	decorators: [withKnobs],
};

const fullCart = [{
	name: 'Strawberry Basil Lemonade',
	quantity: 1,
	imageSrc: 'https://cdn.shopify.com/s/files/1/0252/3833/9670/products/STLEM_43924384-906a-4aaa-a74f-6fcb8fb22cfb_large.png?v=1565306900',
	price: 6.75,
}, {
	name: 'Chocolate Freeze (Size 1)',
	quantity: 1,
	imageSrc: 'https://cdn.shopify.com/s/files/1/0252/3833/9670/products/Chocolate_large.png?v=1565302867',
	price: 6.55,
	modifiers: {
		toppings: 'peanuts, caramel, vegan imitation bat wings',
	},
}, {
	name: 'Strawberry Basil Lemonade',
	quantity: 1,
	imageSrc: 'https://cdn.shopify.com/s/files/1/0252/3833/9670/products/STLEM_43924384-906a-4aaa-a74f-6fcb8fb22cfb_large.png?v=1565306900',
	price: 6.75,
}, {
	name: 'Chocolate Freeze (Size 1)',
	quantity: 1,
	imageSrc: 'https://cdn.shopify.com/s/files/1/0252/3833/9670/products/Chocolate_large.png?v=1565302867',
	price: 6.55,
	modifiers: {
		toppings: 'peanuts, caramel, vegan imitation bat wings',
	},
}];

const mixins = {
	methods: {
		closeSlider() {
			this.active = false;
		},
	},
	computed: {
		itemCount() {
			return this.items.reduce((accum, item) => accum + item.quantity, 0);
		},
		cart() {
			return {
				itemCount: this.itemCount,
				items: this.items,
				originalTotalPrice: 220.4,
				subtotal: 100,
				total: 150.5,
				isShippingAvailable: true,
				discounts: [
					{ name: 'VIP Member Savings', amount: 2.5 },
					{ name: 'Points Redemption', amount: 6.5 },
				],
			};
		},
	},
};

export function Overview() {
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
		data() {
			return {
				items: fullCart,
				user: {
					firstName: 'Carl',
					lastName: 'McGee',
				},
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
		data() {
			return {
				items: [],
			};
		},
	};
}
