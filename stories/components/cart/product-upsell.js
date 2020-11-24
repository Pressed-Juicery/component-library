/* eslint-disable max-lines */
import ProductUpsell from '../../../components/product-upsell';

export default {
	title: 'Components / Cart / ProductUpsell',
	component: ProductUpsell,
};

const mixins = [{
	data() {
		return {
			isOpen: true,
		};
	},
	methods: {
		handleAddItem(item) {
			// eslint-disable-next-line no-console
			console.log('item:', item);
		},

		handleChooseProduct() {
			// eslint-disable-next-line no-console
			console.log('choose-product event');
		},

		handleContinueShopping() {
			// eslint-disable-next-line no-console
			console.log('continue shopping event');
		},
	},
}];

export function Overview() {
	return {
		mixins,
		components: { ProductUpsell },
		template: `
			<product-upsell
				:upsell="upsell"
				:cart="cart"
				:isOpen="isOpen"
				@continue-shopping="handleContinueShopping"
				@add-product="handleAddItem"
				@choose-product="handleChooseProduct"
				@toggle-accordion="isOpen = !isOpen"
			/>
		`,

		data() {
			return {
				cart: {
					total: 50,
					items: [],
				},
				upsell: {
					title: 'Get a Fanny Pack for $2',
					description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
					nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
					minimumSubtotalRequirement: 100,
					productType: '',
					products: [{
						variants: [{
							name: 'Strawberry Basil Lemonade',
							imageUrl: 'https://cdn.shopify.com/s/files/1/0252/3833/9670/products/Combo-thedailystart_1440x1440_97ce3c8e-8fc9-404b-9c7a-9a3e852babfb.png?v=1594826551',
						}],
					}],
				},
			};
		},
	};
}

export function SingleItem() {
	return {
		mixins,
		components: { ProductUpsell },
		template: `
			<product-upsell
				:upsell="upsell"
				:cart="cart"
				:isOpen="isOpen"
				@continue-shopping="handleContinueShopping"
				@add-product="handleAddItem"
				@choose-product="handleChooseProduct"
				@toggle-accordion="isOpen = !isOpen"
			/>
		`,

		data() {
			return {
				cart: {
					total: 100,
					items: [{
						variantId: 124,
						name: 'Strawberry Basil Lemonade',
						imageUrl: 'https://cdn.shopify.com/s/files/1/0252/3833/9670/products/Combo-thedailystart_1440x1440_97ce3c8e-8fc9-404b-9c7a-9a3e852babfb.png?v=1594826551',
					}],
				},
				upsell: {
					title: 'Get a Fanny Pack for $2',
					description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
					sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
					enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat.`,
					minimumSubtotalRequirement: 100,
					productType: '',
					products: [{
						variants: [{
							id: 123,
							name: 'Strawberry Basil Lemonade',
							imageUrl: 'https://cdn.shopify.com/s/files/1/0252/3833/9670/products/Combo-thedailystart_1440x1440_97ce3c8e-8fc9-404b-9c7a-9a3e852babfb.png?v=1594826551',
						}],
					}],
				},
			};
		},
	};
}

export function MultipleItems() {
	return {
		mixins,
		components: { ProductUpsell },
		template: `
			<product-upsell
				:upsell="upsell"
				:cart="cart"
				:isOpen="isOpen"
				@continue-shopping="handleContinueShopping"
				@add-product="handleAddItem"
				@choose-product="handleChooseProduct"
				@toggle-accordion="isOpen = !isOpen"
			/>
		`,

		data() {
			return {
				cart: {
					total: 100,
					items: [{
						variantId: 1,
						name: 'Strawberry Basil Lemonade',
						imageUrl: 'https://cdn.shopify.com/s/files/1/0252/3833/9670/products/Combo-thedailystart_1440x1440_97ce3c8e-8fc9-404b-9c7a-9a3e852babfb.png?v=1594826551',
					}],
				},
				upsell: {
					title: 'Get a Fanny Pack for $2',
					description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
					sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
					enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat.`,
					minimumSubtotalRequirement: 100,
					productType: 'Widget',
					products: [{
						variants: [{
							id: 123,
							name: 'Strawberry Basil Lemonade',
							imageUrl: 'https://cdn.shopify.com/s/files/1/0252/3833/9670/products/Combo-thedailystart_1440x1440_97ce3c8e-8fc9-404b-9c7a-9a3e852babfb.png?v=1594826551',
						}],
					}, {
						variants: [{
							id: 456,
							name: 'Strawberry Basil Lemonade',
							imageUrl: 'https://cdn.shopify.com/s/files/1/0252/3833/9670/products/Combo-thedailystart_1440x1440_97ce3c8e-8fc9-404b-9c7a-9a3e852babfb.png?v=1594826551',
						}],
					}],
				},
			};
		},
	};
}

export function AppliedOffer() {
	return {
		mixins,
		components: { ProductUpsell },
		template: `
			<product-upsell
				:upsell="upsell"
				:cart="cart"
				:isOpen="isOpen"
				@continue-shopping="handleContinueShopping"
				@add-product="handleAddItem"
				@choose-product="handleChooseProduct"
				@toggle-accordion="isOpen = !isOpen"
			/>
		`,

		data() {
			return {
				cart: {
					total: 100,
					items: [{
						variantId: 123,
						name: 'Strawberry Basil Lemonade',
						imageUrl: 'https://cdn.shopify.com/s/files/1/0252/3833/9670/products/Combo-thedailystart_1440x1440_97ce3c8e-8fc9-404b-9c7a-9a3e852babfb.png?v=1594826551',
					}],
				},
				upsell: {
					title: 'Get a Fanny Pack for $2',
					description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
					sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
					enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat.`,
					minimumSubtotalRequirement: 100,
					productType: '',
					products: [{
						variants: [{
							id: 123,
							name: 'Strawberry Basil Lemonade',
							imageUrl: 'https://cdn.shopify.com/s/files/1/0252/3833/9670/products/Combo-thedailystart_1440x1440_97ce3c8e-8fc9-404b-9c7a-9a3e852babfb.png?v=1594826551',
						}],
					}, {
						variants: [{
							id: 456,
							name: 'Strawberry Basil Lemonade',
							imageUrl: 'https://cdn.shopify.com/s/files/1/0252/3833/9670/products/Combo-thedailystart_1440x1440_97ce3c8e-8fc9-404b-9c7a-9a3e852babfb.png?v=1594826551',
						}],
					}],
				},
			};
		},
	};
}
