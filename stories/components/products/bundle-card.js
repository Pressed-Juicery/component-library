import BundleCard from '../../../components/bundle-card';
import BundleCardGrid from '../../../components/bundle-card-grid';

const imageUrl = 'https://pressed-product-images.s3-us-west-1.amazonaws.com/shopify/pages/blendjet-landing/bundle-card-berriesandcream.png';

const cards = [
	{
		product: {
			imageUrl,
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
			imageUrl,
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
			imageUrl,
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
			imageUrl,
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
			imageUrl,
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
			imageUrl,
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
			color: '#dbb963',
		},
	},
	{
		product: {
			imageUrl,
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
	title: 'Components / Products / BundleCard',
	component: BundleCard,
};

export function Overview() {
	return {
		components: { BundleCard },
		data() {
			return {
				product: cards[0].product,
				theme: cards[0].theme,
			};
		},
		template: `
			<div>
				<bundle-card :product="product" :theme="theme" />
			</div>
		`,
	};
}

export function MultipleCards() {
	return {
		components: { BundleCardGrid, BundleCard },
		data() {
			return { cards };
		},
		template: `
			<div>
				<bundle-card-grid :cards="cards" />
			</div>
		`,
	};
}
