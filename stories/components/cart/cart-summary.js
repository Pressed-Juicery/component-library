import CartSummary from '../../../components/cart-summary';

export default {
	title: 'Components / Cart / CartSummary',
	component: CartSummary,
};

// eslint-disable-next-line max-lines-per-function
export function Overview() {
	return {
		components: { CartSummary },
		template: '<cart-summary :cart="cart" />',

		// eslint-disable-next-line max-lines-per-function
		data() {
			return {
				cart: {
					itemCount: 101,
					items: [
						{
							quantity: 10,
							price: 10,
							variant: {
								name: 'Strawberry Basil Lemonade',
								imageUrl: 'https://cdn.shopify.com/s/files/1/0252/3833/9670/products/STLEM_43924384-906a-4aaa-a74f-6fcb8fb22cfb_large.png?v=1565306900',
							},
						},
						{
							quantity: 5,
							price: 25,
							variant: {
								name: 'Turmeric Almond',
								imageUrl: 'https://cdn.shopify.com/s/files/1/0252/3833/9670/products/STLEM_43924384-906a-4aaa-a74f-6fcb8fb22cfb_large.png?v=1565306900',
							},
						},
						{
							quantity: 1,
							price: 26.57,
							variant: {
								name: 'Daily Fuel',
								imageUrl: 'https://cdn.shopify.com/s/files/1/0252/3833/9670/products/STLEM_43924384-906a-4aaa-a74f-6fcb8fb22cfb_large.png?v=1565306900',
							},
							bundleItems: 'Vanilla Almond, Chocolate Almond',
						},
						{
							quantity: 101,
							price: 122.5,
							variant: {
								name: 'Strawberry Freeze',
								imageUrl: 'https://cdn.shopify.com/s/files/1/0252/3833/9670/products/STLEM_43924384-906a-4aaa-a74f-6fcb8fb22cfb_large.png?v=1565306900',
							},
							modifiers: {
								toppings: 'Chocolate Chips, Granola, Coconut',
							},
						},
					],
				},
			};
		},
	};
}
