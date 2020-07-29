import ProductOrderingSection from '../../../components/product-ordering-section';

export default {
	title: 'Components / Products / ProductOrderingSection',
	component: ProductOrderingSection,
};

export function Overview() { // eslint-disable-line max-lines-per-function
	return {
		components: { ProductOrderingSection },
		template: '<product-ordering-section :isVip="isVip" :product="product" />',
		data() {
			return {
				isVip: false,
				product: {
					name: 'Greens 1',
					variants: [{
						id: '15277171441699',
						name: 'Greens 1',
						imageUrl: 'https://cdn.shopify.com/s/files/1/0022/5601/1299/products/GRN1.jpg?v=1563830728',
						memberPrice: 5,
						nonMemberPrice: 6.5,
						nonMemberSalePrice: null,
					}, {
						id: '1814748889123',
						name: 'Greens 1.5',
						imageUrl: 'https://cdn.shopify.com/s/files/1/0022/5601/1299/products/GRN1p5.jpg?v=1563830730',
						memberPrice: 5,
						nonMemberPrice: 6.5,
						nonMemberSalePrice: null,
					}],
				},
			};
		},
	};
}
