import ProductOrderingSection from '../../../components/product-ordering-section.vue';

export default {
	title: 'Components / Products / ProductOrderingSection',
	component: ProductOrderingSection,
};

export function Overview() {
	return {
		components: { ProductOrderingSection },
		template: '<product-ordering-section :isVip="isVip" :product="product" @addedToCart="addToCart"/>',
		data() {
			return {
				isVip: false,
				product: {
					name: 'Vanilla Freeze',
					variants: [{
						id: 1,
						name: 'Size 1',
						calories: '200',
						nonMemberPrice: '5.00',
						memberPrice: '6.50',
					}, {
						id: 2,
						name: 'Size 2',
						calories: '400',
						nonMemberPrice: '8.50',
						memberPrice: '7.00',
					}, {
						id: 3,
						name: 'Size 3',
						calories: '100',
						nonMemberPrice: '4.00',
						memberPrice: '4.00',
					}],
				},
			};
		},
	};
}
