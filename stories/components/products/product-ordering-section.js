import ProductOrderingSection from '../../../components/product-ordering-section.vue';

export default {
	title: 'Components / Products / ProductOrderingSection',
	component: ProductOrderingSection,
};

export function Overview() {
	return {
		components: { ProductOrderingSection },
		template: '<product-ordering-section :isVip="isVip" :product="product" @addedToCart="addToCart"/>',
		methods: {
			addToCart(item) {
				console.log("Added to cart", item)
			}
		},
		data() {
			return {
				isVip: false,
				product: {
					name: "Vanilla Freeze",
					variants: [
						{
							id: 1,
							name: "Size 1",
							calories: "200",
							nonMemberPrice: "6.50",
							memberPrice: "5.00",
						},
						{
							id: 2,
							name: "Size 2",
							calories: "400",
							nonMemberPrice: "8.50",
							memberPrice: "7.00",
						},
					],
				}
			}
		}
	}
}