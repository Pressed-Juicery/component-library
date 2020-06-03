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

const cards = [{
	icon: 'https://d3e4ixgvd0ibii.cloudfront.net/shopify/icons/pressed-points/water-and-shot.svg',
	title: 'Shot or Water',
	points: '70',
	quantityAvailable: 7,
}, {
	icon: 'https://d3e4ixgvd0ibii.cloudfront.net/shopify/icons/pressed-points/freeze-size-1.svg',
	title: 'Size 1 Freeze',
	points: '140',
	quantityAvailable: 3,
}, {
	icon: 'https://d3e4ixgvd0ibii.cloudfront.net/shopify/icons/pressed-points/juice.svg',
	title: 'Any Juice',
	points: '150',
	quantityAvailable: 3,
}, {
	icon: 'https://d3e4ixgvd0ibii.cloudfront.net/shopify/icons/pressed-points/signature-blend.svg',
	title: 'Signature Blend',
	points: '180',
	quantityAvailable: 2,
}, {
	icon: 'https://d3e4ixgvd0ibii.cloudfront.net/shopify/icons/pressed-points/freeze-size-2.svg',
	title: 'Size 2 Freeze',
	points: '180',
	quantityAvailable: 2,
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
			:pointsCards="pointsCards"
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
				// vvvv this is a placeholder to demo functionality,
				// cards should be generated from a service based on user data, not passed in
				pointsCards: cards,
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
