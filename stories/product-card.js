import ProductCard from '../components/product-card';
import ProductCardGrid from '../components/product-card-grid';

const image = 'https://pressed-product-images.s3-us-west-1.amazonaws.com/shopify/pages/blendjet-landing/bundle-card-berriesandcream.png';

const products = [
	{
		image,
		title: 'Tropical Glow',
		description: 'Sweet peach and mango meet citrus flavors in this crowd-pleaser smoothie recipe.',
		price: '$55.00',
		themeColor: '#dbb963',
		productLink: '#',
		bundleItems: [
			{ name: 'BlendJet' },
			{ name: 'Citrus 2' },
			{ name: 'Citrus 2' },
			{ name: 'Citrus 2' },
			{ name: 'Citrus 2' },
		]
	},
	{
		image,
		title: 'Tropical Glow',
		description: 'Sweet peach and mango meet citrus flavors in this crowd-pleaser smoothie recipe.',
		price: '$55.00',
		themeColor: 'pink',
		productLink: '#',
	},
	{
		image,
		title: 'Tropical Glow',
		description: 'Sweet peach and mango meet citrus flavors in this crowd-pleaser smoothie recipe.',
		price: '$55.00',
		themeColor: 'purple',
		productLink: '#',
		bundleItems: [
			{ name: 'BlendJet' },
			{ name: 'Citrus 2' },
			{ name: 'Citrus 2' },
			{ name: 'Citrus 2' },
			{ name: 'Citrus 2' },
		]
	},
	{
		image,
		title: 'Tropical Glow',
		description: `aSweet peach and mango meet citrus flavors in this crowd-pleaser smoothie recipe.
		Sweet peach and mango meet citrus flavors in this crowd-pleaser smoothie recipe.`,
		price: '$55.00',
		themeColor: '#dbb963',
		productLink: '#',
	},
	{
		image,
		title: 'Tropical Glow',
		description: 'Sweet peach and mango meet citrus flavors in this crowd-pleaser smoothie recipe.',
		price: '$55.00',
		themeColor: 'green',
		productLink: '#',
		bundleItems: [
			{ name: 'BlendJet' },
			{ name: 'Citrus 2' },
			{ name: 'Citrus 2' },
			{ name: 'Citrus 2' },
			{ name: 'Citrus 2' },
		]
	},
	{
		image,
		title: 'Tropical Glow',
		description: 'Sweet peach and mango meet citrus flavors in this crowd-pleaser smoothie recipe.',
		price: '$55.00',
		themeColor: '#dbb963',
		productLink: '#',
		bundleItems: [
			{ name: 'BlendJet' },
			{ name: 'Citrus 2' },
			{ name: 'Citrus 2' },
			{ name: 'Citrus 2' },
			{ name: 'Citrus 2' },
		]
	},
	{
		image,
		title: 'Tropical Glow',
		description: 'Sweet peach and mango meet citrus flavors in this crowd-pleaser smoothie recipe.',
		price: '$55.00',
		themeColor: '#dbb963',
		productLink: '#',
		bundleItems: [
			{ name: 'BlendJet' },
			{ name: 'Citrus 2' },
			{ name: 'Citrus 2' },
			{ name: 'Citrus 2' },
			{ name: 'Citrus 2' },
		]
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
				product: products[0],
			};
		},
		template: `
			<div>
				<product-card :product="product"/>
			</div>
		`,
	};
}

export function MultipleCards() {
	return {
		components: { ProductCardGrid, ProductCard },
		data() {
			return {
				products: products,
			};
		},
		template: `
			<div>
				<product-card-grid :products="products" />
			</div>
		`,
	};
}
