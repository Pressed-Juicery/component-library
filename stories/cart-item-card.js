import CartItemCard from '../components/cart-item-card';

export default {
	title: 'CartItemCard',
	component: CartItemCard,
};

export function Overview() {
	return {
		components: { CartItemCard },
		template: '<cart-item-card style="margin: 20px" :item="item" />',

		data() {
			return {
				item: {
					name: 'Greens 1',
					imageUrl: 'https://cdn.shopify.com/s/files/1/0022/5601/1299/products/GRN1_medium.jpg?v=1563830728',
					quantity: '3',
					discountedTotalPrice: '6.50',
				},
			};
		},
	};
}

export function AdditionalInformation() {
	return {
		components: { CartItemCard },
		template: '<cart-item-card style="margin: 20px" :item="item" />',

		data() {
			return {
				item: {
					name: 'Greens 1',
					imageUrl: 'https://cdn.shopify.com/s/files/1/0022/5601/1299/products/GRN1_medium.jpg?v=1563830728',
					additionalInformation: 'Chocolate chip cookies, granola, chocolate chips',
					quantity: '3',
					discountedTotalPrice: '6.50',
				},
			};
		},
	};
}
