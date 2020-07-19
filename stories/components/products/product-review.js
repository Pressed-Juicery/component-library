import ProductReview from '../../../components/product-review.vue';

export default {
	title: 'Components / Products / ProductReview',
	component: ProductReview,
};

export function Overview() {
	return {
		components: { ProductReview },
		template: '<product-review :review="review" />',
		data() {
			return {
				review: {
					title: 'Test',
					body: `
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
						laboris nisi ut aliquip ex ea commodo consequat.
					`,
					rating: 4,
					name: 'Jane Doe',
					createdAt: '2020-07-19T19:28:51.008Z',
				},
			};
		},
	};
}
