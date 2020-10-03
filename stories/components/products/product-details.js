import ProductDetails from '../../../components/product-details.vue';

export default {
	title: 'Components / Products / ProductDetails',
	component: ProductDetails,
};

// eslint-disable-next-line max-lines-per-function
export function Overview() {
	return {
		components: { ProductDetails },
		template: '<product-details :productDescription="productDescription" />',
		data() { // eslint-disable-line max-lines-per-function
			return {
				productDescription: {
					overview: `
						With 190% of your daily vitamin C, this blood orange juice is the perfect
						elevated OJ to take you from winter to spring!
					`,
					details: [
						{
							iconUrl: '//d3e4ixgvd0ibii.cloudfront.net/ingredients/coconutcream.svg',
							title: 'Your Daily Greens: Leveled Up',
							description: `
								The combination of apple cider vinegar with fresh-pressed juices
								from ginger, spinach & more add minerals and prebiotics.
							`,
						},
						{
							iconUrl: '//pressed-product-images.s3-us-west-1.amazonaws.com/shopify/icons/probiotics.svg',
							title: 'With the Mother',
							description: `
								Bragg apple cider vinegar contains the amazing vinegar “Mother,” which
								occurs naturally as it produces prebiotics.
							`,
						},
						{
							iconUrl: '//pressed-product-images.s3-us-west-1.amazonaws.com/shopify/icons/acv.svg',
							title: 'Balancing Your Appetite',
							description: `
								Bragg apple cider vinegar is full of zesty natural goodness. Studies show when
								incorporated as part of a healthy diet, it may help maintain a healthy weight -
								it’s associated with increased feelings of fullness!
							`,
						},
					],
				},
			};
		},
	};
}
