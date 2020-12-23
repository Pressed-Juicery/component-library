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
			console.log('add-item event:', item); // eslint-disable-line no-console
		},

		handleChooseProduct() {
			console.log('choose-product event'); // eslint-disable-line no-console
		},

		handleContinueShopping() {
			console.log('continue-shopping event'); // eslint-disable-line no-console
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
				:wallet="wallet"
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
					subtotal: 102,
				},
				wallet: {
					tier: 'INSIDER',
				},
				upsell: {
					title: 'Get a Fanny Pack for $2',
					description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
					nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
					additionalSubtotalRequirement: 6,
					isApplied: false,
					variants: [{
						nonMemberSalePrice: 2,
						name: 'Fanny Pack',
						imageUrl: 'https://cdn.shopify.com/s/files/1/0252/3833/9670/products/Combo-thedailystart_1440x1440_97ce3c8e-8fc9-404b-9c7a-9a3e852babfb.png?v=1594826551',
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
				:wallet="wallet"
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
					subtotal: 108,
					items: [{
						variantId: 124,
						name: 'Strawberry Basil Lemonade',
						imageUrl: 'https://cdn.shopify.com/s/files/1/0252/3833/9670/products/Combo-thedailystart_1440x1440_97ce3c8e-8fc9-404b-9c7a-9a3e852babfb.png?v=1594826551',
					}],
				},
				wallet: {
					tier: 'INSIDER',
				},
				upsell: {
					title: 'Get a Fanny Pack for $2',
					description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
					sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
					enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat.`,
					additionalSubtotalRequirement: 0,
					isApplied: false,
					variants: [{
						nonMemberSalePrice: 2,
						id: 124,
						name: 'Fanny Pack',
						imageUrl: 'https://cdn.shopify.com/s/files/1/0252/3833/9670/products/Combo-thedailystart_1440x1440_97ce3c8e-8fc9-404b-9c7a-9a3e852babfb.png?v=1594826551',
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
				:wallet="wallet"
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
					subtotal: 109,
					items: [{
						variantId: 1,
						name: 'Strawberry Basil Lemonade',
						imageUrl: 'https://cdn.shopify.com/s/files/1/0252/3833/9670/products/Combo-thedailystart_1440x1440_97ce3c8e-8fc9-404b-9c7a-9a3e852babfb.png?v=1594826551',
					}],
				},
				wallet: {
					tier: 'INSIDER',
				},
				upsell: {
					title: 'Get a Fanny Pack for $2',
					description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
					sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
					enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat.`,
					additionalSubtotalRequirement: 1,
					productType: 'Fanny pack',
					isApplied: false,
					variants: [{
						nonMemberSalePrice: 2,
						id: 123,
						name: 'Fanny Pack - Red',
						imageUrl: 'https://cdn.shopify.com/s/files/1/0252/3833/9670/products/Combo-thedailystart_1440x1440_97ce3c8e-8fc9-404b-9c7a-9a3e852babfb.png?v=1594826551',
					}, {
						nonMemberSalePrice: 2,
						id: 456,
						name: 'Fanny Pack - Blue',
						imageUrl: 'https://cdn.shopify.com/s/files/1/0252/3833/9670/products/Combo-thedailystart_1440x1440_97ce3c8e-8fc9-404b-9c7a-9a3e852babfb.png?v=1594826551',
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
				:wallet="wallet"
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
					subtotal: 100,
					items: [{
						variantId: 123,
						name: 'Fanny Pack - Red',
						imageUrl: 'https://cdn.shopify.com/s/files/1/0252/3833/9670/products/Combo-thedailystart_1440x1440_97ce3c8e-8fc9-404b-9c7a-9a3e852babfb.png?v=1594826551',
					}],
				},
				wallet: {
					tier: 'INSIDER',
				},
				upsell: {
					title: 'Get a Fanny Pack for $2',
					description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
					sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
					enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat.`,
					additionalSubtotalRequirement: 0,
					isApplied: true,
					variants: [{
						nonMemberSalePrice: 2,
						id: 123,
						name: 'Fanny Pack - Red',
						imageUrl: 'https://cdn.shopify.com/s/files/1/0252/3833/9670/products/Combo-thedailystart_1440x1440_97ce3c8e-8fc9-404b-9c7a-9a3e852babfb.png?v=1594826551',
					}, {
						nonMemberSalePrice: 2,
						id: 456,
						name: 'Fanny Pack - Blue',
						imageUrl: 'https://cdn.shopify.com/s/files/1/0252/3833/9670/products/Combo-thedailystart_1440x1440_97ce3c8e-8fc9-404b-9c7a-9a3e852babfb.png?v=1594826551',
					}],
				},
			};
		},
	};
}
