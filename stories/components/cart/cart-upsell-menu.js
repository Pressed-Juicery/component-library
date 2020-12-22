import CartUpsellMenu from '../../../components/cart-upsell-menu';

export default {
	title: 'Components / Cart / CartUpsellMenu',
	component: CartUpsellMenu,
};

// eslint-disable-next-line max-lines-per-function
export function Overview() {
	return {
		components: { CartUpsellMenu },

		template: `
			<cart-upsell-menu
				:upsell="upsell"
				@add-product="handleAddProduct"
			/>
		`,

		data() {
			return {
				upsell: {
					title: 'Free Juice when you buy Juice',
					description: 'If you buy juice, we\'ll give you more juice.',
					upsellPrice: 0,
					products: [{
						variants: [{
							id: 123,
							name: 'Juice Bundle',
							imageUrl: 'https://cdn.shopify.com/s/files/1/0252/3833/9670/products/Combo-thedailystart_1440x1440_97ce3c8e-8fc9-404b-9c7a-9a3e852babfb.png?v=1594826551',
						}],
					}, {
						variants: [{
							id: 123,
							name: 'Another Juice Bundle',
							imageUrl: 'https://cdn.shopify.com/s/files/1/0252/3833/9670/products/Combo-thedailystart_1440x1440_97ce3c8e-8fc9-404b-9c7a-9a3e852babfb.png?v=1594826551',
						}],
					}, {
						variants: [{
							id: 123,
							name: 'Yet Another Juice Bundle',
							imageUrl: 'https://cdn.shopify.com/s/files/1/0252/3833/9670/products/Combo-thedailystart_1440x1440_97ce3c8e-8fc9-404b-9c7a-9a3e852babfb.png?v=1594826551',
						}],
					}],
				},
			};
		},

		methods: {
			handleAddProduct(product) {
				// eslint-disable-next-line no-console
				console.log('product:', product);
			},
		},
	};
}
