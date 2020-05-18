import ProductCardSection from '../components/product-card-section';

const cards = [
	{
		product: {
			imageUrl: 'https://pressed-product-images.s3-us-west-1.amazonaws.com/shopify/pages/blendjet-landing/BJ-vanilla.png',
			name: 'Triple Berry',
			shortDescription: 'This triple berry & banana smoothie recipe is perfect for a healthy refuel between meals.', // eslint-disable-line max-len
			price: '$55.00',
			url: '#',
			bundleItems: [
				{ name: 'BlendJet' },
				{ name: 'Vanilla Almond' },
				{ name: 'Vanilla Almond' },
				{ name: 'Vanilla Almond' },
				{ name: 'Vanilla Almond' },
			],
		},
		theme: {
			color: '#c58582',
		},
	},
	{
		product: {
			imageUrl: 'https://pressed-product-images.s3-us-west-1.amazonaws.com/shopify/pages/blendjet-landing/BJ-citrus.png',
			name: 'Tropical Glow',
			shortDescription: 'Sweet peach and mango meet citrus flavors in this crowd-pleaser smoothie recipe.',
			price: '$55.00',
			url: '#',
			bundleItems: [
				{ name: 'BlendJet' },
				{ name: 'Citrus 2' },
				{ name: 'Citrus 2' },
				{ name: 'Citrus 2' },
				{ name: 'Citrus 2' },
			],
		},
		theme: {
			color: '#e0c069',
		},
	},
	{
		product: {
			imageUrl: 'https://pressed-product-images.s3-us-west-1.amazonaws.com/shopify/pages/blendjet-landing/BJ-greens.png',
			name: 'Essential Greens',
			shortDescription: 'All the leafy goodness of greens & cold-pressed juice in one powerhouse smoothie recipe.', // eslint-disable-line max-len
			price: '$55.00',
			url: '#',
			bundleItems: [
				{ name: 'BlendJet' },
				{ name: 'Greens 2' },
				{ name: 'Greens 2' },
				{ name: 'Greens 2' },
				{ name: 'Greens 2' },
			],
		},
		theme: {
			color: '#50561a',
		},
	},
	{
		product: {
			imageUrl: 'https://pressed-product-images.s3-us-west-1.amazonaws.com/shopify/pages/blendjet-landing/BJ-chocolate.png',
			name: 'Power Protein',
			shortDescription: 'This chocolate peanut butter smoothie recipe is perfect for a post-workout treat.',
			price: '$55.00',
			url: '#',
			bundleItems: [
				{ name: 'BlendJet' },
				{ name: 'Chocolate Almond' },
				{ name: 'Chocolate Almond' },
				{ name: 'Chocolate Almond' },
				{ name: 'Chocolate Almond' },
			],
		},
		theme: {
			color: '#af7340',
		},
	},
	{
		product: {
			imageUrl: 'https://pressed-product-images.s3-us-west-1.amazonaws.com/shopify/pages/blendjet-landing/BJ-variety.png',
			name: 'Variety Pack',
			shortDescription: 'Sweet peach and mango meet citrus flavors in this crowd-pleaser smoothie recipe.',
			price: '$55.00',
			url: '#',
			bundleItems: [
				{ name: 'BlendJet' },
				{ name: 'Greens 2' },
				{ name: 'Citrus 2' },
				{ name: 'Vanilla Almond' },
				{ name: 'Chocolate Almond' },
			],
		},
		theme: {
			color: '#3f3d62',
		},
	},
	{
		product: {
			imageUrl: 'https://pressed-product-images.s3-us-west-1.amazonaws.com/shopify/pages/blendjet-landing/blendjet.png',
			name: 'BlendJet',
			shortDescription: 'Small, but mighty powerful. Meet the modern day blender for a quick nutritious smoothie.', // eslint-disable-line max-len
			price: '$39.95',
			url: '#',
			bundleItems: [
				{ name: 'BlendJet' },
			],
		},
		theme: {
			color: '#282321',
		},
	},
];

export default {
	title: 'Sections / ProductCardSection',
	component: ProductCardSection,
};

export function Overview() {
	return {
		components: { ProductCardSection },
		template: '<product-card-section :config="config" />',
		data() {
			return {
				config: {
					title: 'Choose Your Bundle',
					description: `
						Each bundle includes a BlendJet, a recipe guide and nutritious cold-pressed juices.
						Simply combine your fruit, veggie or protein ingredients, add your Pressed juice, blend and go!
					`,
					cards,
				},
			};
		},
	};
}
