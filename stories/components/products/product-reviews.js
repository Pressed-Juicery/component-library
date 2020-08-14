import ProductReviews from '../../../components/product-reviews.vue';

export default {
	title: 'Components / Products / ProductReviews',
	component: ProductReviews,
};

const reviews = [{
	title: 'Fantastic',
	body: `
		Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
	`,
	rating: 4,
	name: 'Jane Doe',
	createdAt: '2020-07-19T19:28:51.008Z',
}, {
	title: 'Incredible',
	body: `
		Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
	`,
	rating: 5,
	name: 'John Doe',
	createdAt: '2020-07-19T19:28:51.008Z',
}];

export function Overview() {
	return {
		components: { ProductReviews },
		template: `<product-reviews
						:customerRating="customerRating"
						:verifiedPurchase="verifiedPurchase"
						:reviewCount="reviewCount"
						:reviews="reviews"
					/>`,
		data() {
			return {
				customerRating: 4.5,
				reviewCount: 2,
				verifiedPurchase: true,
				reviews,
			};
		},
	};
}

export function NonVerifiedPurchase() {
	return {
		components: { ProductReviews },
		template: `<product-reviews
						:customerRating="customerRating"
						:verifiedPurchase="verifiedPurchase"
						:reviewCount="reviewCount"
						:reviews="reviews"
					/>`,
		data() {
			return {
				customerRating: 4.5,
				reviewCount: 2,
				verifiedPurchase: false,
				reviews,
			};
		},
	};
}
