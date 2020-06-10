import ProductDetails from '../../../components/product-details.vue';

export default {
	title: 'Components / Products / ProductDetails',
	component: ProductDetails,
};

export function Overview() {
	return {
		components: { ProductDetails },
		template: '<product-details :productInfo="productInfo" />',
		data() {
			return {
				productInfo: {
					overview: `
						With 190% of your daily vitamin C, this blood orange juice is the perfect
						 elevated OJ to take you from winter to spring!
					`,
					details: [
						{
							icon: '//pressed-product-images.s3-us-west-1.amazonaws.com/shopify/icons/greens.svg',
							title: 'Your Daily Greens: Leveled Up',
							content: `
								The combination of apple cider vinegar with fresh-pressed juices
								 from ginger, spinach & more add minerals and prebiotics.
							`,
						},
						{
							icon: '//pressed-product-images.s3-us-west-1.amazonaws.com/shopify/icons/probiotics.svg',
							title: 'With the Mother',
							content: `
								Bragg apple cider vinegar contains the amazing vinegar “Mother,” which
								 occurs naturally as it produces prebiotics.
							`,
						},
						{
							icon: '//pressed-product-images.s3-us-west-1.amazonaws.com/shopify/icons/acv.svg',
							title: 'Balancing Your Appetite',
							content: `
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
