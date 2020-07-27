import BundleItems from '../../../components/bundle-items';

export default {
	title: 'Components / Products / BundleItems',
	component: BundleItems,
};

export function Overview() {
	return {
		components: { BundleItems },
		template: '<bundle-items :bundle-items="bundleItems"/>',
		data() {
			return {
				bundleItems: [
					{ name: 'Greens 1', imageUrl: 'https://d3e4ixgvd0ibii.cloudfront.net/shopify/cleanse-pdp/GRN1.png' },
					{ name: 'Citrus 1', imageUrl: 'https://d3e4ixgvd0ibii.cloudfront.net/shopify/cleanse-pdp/CIT1.png' },
					{ name: 'Greens 2', imageUrl: 'https://d3e4ixgvd0ibii.cloudfront.net/shopify/cleanse-pdp/GRN1.png' },
					{ name: 'Citrus 2', imageUrl: 'https://d3e4ixgvd0ibii.cloudfront.net/shopify/cleanse-pdp/CIT1.png' },
					{ name: 'Greens 3', imageUrl: 'https://d3e4ixgvd0ibii.cloudfront.net/shopify/cleanse-pdp/GRN1.png' },
					{ name: 'Citrus 3', imageUrl: 'https://d3e4ixgvd0ibii.cloudfront.net/shopify/cleanse-pdp/CIT1.png' },
				],
			};
		},
	};
}
