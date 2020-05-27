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
							name: 'Strawberry Basil Lemonade',
							quantity: 10,
							imageSrc: 'https://cdn.shopify.com/s/files/1/0252/3833/9670/products/STLEM_43924384-906a-4aaa-a74f-6fcb8fb22cfb_large.png?v=1565306900',
							price: 10,
						},
						{
							name: 'Turmeric Almond',
							quantity: 5,
							imageSrc: 'https://cdn.shopify.com/s/files/1/0252/3833/9670/products/STLEM_43924384-906a-4aaa-a74f-6fcb8fb22cfb_large.png?v=1565306900',
							price: 25,
						},
						{
							name: 'Daily Fuel',
							quantity: 1,
							imageSrc: 'https://cdn.shopify.com/s/files/1/0252/3833/9670/products/STLEM_43924384-906a-4aaa-a74f-6fcb8fb22cfb_large.png?v=1565306900',
							price: 26.57,
							bundleItems: 'Vanilla Almond, Chocolate Almond',
						},
						{
							name: 'Strawberry Freeze',
							quantity: 101,
							imageSrc: 'https://cdn.shopify.com/s/files/1/0252/3833/9670/products/STLEM_43924384-906a-4aaa-a74f-6fcb8fb22cfb_large.png?v=1565306900',
							price: 122.5,
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
