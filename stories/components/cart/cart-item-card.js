import CartItemCard from '../../../components/cart-item-card';

export default {
	title: 'Components / Cart / CartItemCard',
	component: CartItemCard,
};

export function Overview() {
	return {
		components: { CartItemCard },
		template: '<cart-item-card :item="item" />',

		data() {
			return {
				item: {
					variant: {
						name: 'Strawberry Basil Lemonade',
						imageUrl: 'https://cdn.shopify.com/s/files/1/0252/3833/9670/products/STLEM_43924384-906a-4aaa-a74f-6fcb8fb22cfb_large.png?v=1565306900',
					},
					quantity: 3,
					price: 6.50,
					originalPrice: 122.5,
				},
			};
		},
	};
}

export function DiscountedPrice() {
	return {
		components: { CartItemCard },
		template: '<cart-item-card :item="item" />',

		data() {
			return {
				item: {
					variant: {
						name: 'Strawberry Basil Lemonade',
						imageUrl: 'https://cdn.shopify.com/s/files/1/0252/3833/9670/products/STLEM_43924384-906a-4aaa-a74f-6fcb8fb22cfb_large.png?v=1565306900',
					},
					quantity: 3,
					originalPrice: 6.50,
					price: 5.00,
				},
			};
		},
	};
}

export function AdditionalInformation() {
	return {
		components: { CartItemCard },
		template: '<cart-item-card :item="item" />',

		data() {
			return {
				item: {
					variant: {
						name: 'Strawberry Almond',
						imageUrl: 'https://cdn.shopify.com/s/files/1/0252/3833/9670/products/STLEM_43924384-906a-4aaa-a74f-6fcb8fb22cfb_large.png?v=1565306900',
					},
					modifiers: [{
						groupName: 'Toppings',
						name: 'Chocolate chip cookies, granola, chocolate chips',
					}],
					quantity: 3,
					price: 6.50,
					originalPrice: 122.5,
				},
			};
		},
	};
}

export function LongAdditionalInformation() {
	return {
		components: { CartItemCard },
		template: '<cart-item-card :item="item" />',

		data() {
			return {
				item: {
					variant: {
						name: 'Strawberry Basil Lemonade',
						imageUrl: 'https://cdn.shopify.com/s/files/1/0252/3833/9670/products/STLEM_43924384-906a-4aaa-a74f-6fcb8fb22cfb_large.png?v=1565306900',
					},
					modifiers: [{
						groupName: 'Toppings',
						name: `
							Chocolate chip cookies, granola, chocolate chips, coconut,
							blueberries, pistachios, almonds, chocolate sauce, caramel
						`,
					}],
					quantity: 3,
					price: 6.50,
					originalPrice: 122.5,
				},
			};
		},
	};
}
