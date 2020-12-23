import UpsellProductCard from '../../../components/upsell-product-card';

export default {
	title: 'Components / Cart / UpsellProductCard',
	component: UpsellProductCard,
};

// eslint-disable-next-line max-lines-per-function
export function Overview() {
	return {
		components: { UpsellProductCard },

		template: `
			<upsell-product-card
				:tier="tier"
				:variant="variant"
				:upsellPrice="1000"
				@add-product="handleAddProduct"
			/>
		`,

		data() {
			return {
				tier: 'insider',
				variant: {
					nonMemberSalePrice: 2,
					id: 123,
					name: 'Fanny Pack - Red',
					imageUrl: 'https://cdn.shopify.com/s/files/1/0252/3833/9670/products/Combo-thedailystart_1440x1440_97ce3c8e-8fc9-404b-9c7a-9a3e852babfb.png?v=1594826551',
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
