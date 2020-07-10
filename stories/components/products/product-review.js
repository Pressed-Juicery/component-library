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
						Lorem ipsum dolor sit amet, consectetur adipisicing elit,
						sed do eiusmod tempor incididunt ut labore et dolore magna
						aliqua. Ut enim ad minim veniam, quis nostrud exercitation
						ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
					rating: 3.68,
					name: 'First Last',
					createdAt: '01/01/2020',
				},
			};
		},
	};
}
