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
					variants: [{
						id: 1,
						name: "Something",
						calories: "200",
						nonMemberPrice: "6.50",
						memberPrice: "5.00",
					}],
					availableModifiers: [{
						id: 1,
						name: "First Mod",
						price: "1.50",
					}]
				}
			}
		}
	}
}