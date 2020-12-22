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
					title: 'Free Bundle with a purchase of $40+',
					description: 'Buy $40 worth of juice and we\'ll throw in a free bundle!',
					upsellPrice: 0,
					products: [{
						variants: [{
							id: 123,
							name: 'Cleanse 1',
							imageUrl: 'https://cdn.shopify.com/s/files/1/0252/3833/9670/products/Combo-thedailystart_1440x1440_97ce3c8e-8fc9-404b-9c7a-9a3e852babfb.png?v=1594826551',
						}],
					}, {
						variants: [{
							id: 124,
							name: 'Cleanse 2',
							imageUrl: 'https://cdn.shopify.com/s/files/1/0252/3833/9670/products/Combo-thedailystart_1440x1440_97ce3c8e-8fc9-404b-9c7a-9a3e852babfb.png?v=1594826551',
						}],
					}, {
						variants: [{
							id: 125,
							name: 'Cleanse 3',
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
