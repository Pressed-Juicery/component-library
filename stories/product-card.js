import ProductCard from '../components/product-card';
import ProductCardGrid from '../components/product-card-grid';

const imageUrl = 'https://pressed-product-images.s3-us-west-1.amazonaws.com/shopify/pages/blendjet-landing/bundle-card-berriesandcream.png';

const cards = [
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
			name: 'Tropical Glow',
			shortDescription: 'Sweet peach and mango meet citrus flavors in this crowd-pleaser smoothie recipe.',
			price: '$55.00',
			url: '#',
		},
		theme: {
			color: 'pink',
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
			color: 'purple',
		},
	},
	{
		product: {
			imageUrl,
			name: 'Tropical Glow',
			shortDescription: `
				Sweet peach and mango meet citrus flavors in this crowd-pleaser smoothie recipe.
				Sweet peach and mango meet citrus flavors in this crowd-pleaser smoothie recipe.
			`,
			price: '$55.00',
			url: '#',
		},
		theme: {
			color: '#dbb963',
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
			color: 'green',
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
];

export default {
	title: 'Components / Products / ProductCard',
	component: ProductCard,
};

export function Overview() {
	return {
		components: { ProductCard },
		data() {
			return {
				product: cards[0].product,
				theme: cards[0].theme,
			};
		},
		template: `
			<div>
				<product-card :product="product" :theme="theme" />
			</div>
		`,
	};
}

export function MultipleCards() {
	return {
		components: { ProductCardGrid, ProductCard },
		data() {
			return { cards };
		},
		template: `
			<div>
				<product-card-grid :cards="cards" />
			</div>
		`,
	};
}
