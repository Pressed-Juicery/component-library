import BundleItems from '../../../components/bundle-items.vue';

export default {
	title: 'Components / Products / BundleItems',
	component: BundleItems,
};

export function Overview() {
	return {
		components: { BundleItems },
		template: '<bundle-items :cleanseBundle="cleanseBundle"/>',
		data() {
			return {
				cleanseBundle: [
					{ title: 'Greens 1', imageUrl: 'https://d3e4ixgvd0ibii.cloudfront.net/shopify/cleanse-pdp/GRN1.png' },
					{ title: 'Citrus 1', imageUrl: 'https://d3e4ixgvd0ibii.cloudfront.net/shopify/cleanse-pdp/CIT1.png' },
					{ title: 'Greens 2', imageUrl: 'https://d3e4ixgvd0ibii.cloudfront.net/shopify/cleanse-pdp/GRN1.png' },
					{ title: 'Citrus 2', imageUrl: 'https://d3e4ixgvd0ibii.cloudfront.net/shopify/cleanse-pdp/CIT1.png' },
					{ title: 'Greens 3', imageUrl: 'https://d3e4ixgvd0ibii.cloudfront.net/shopify/cleanse-pdp/GRN1.png' },
					{ title: 'Citrus 3', imageUrl: 'https://d3e4ixgvd0ibii.cloudfront.net/shopify/cleanse-pdp/CIT1.png' },
				],
			};
		},
	};
}
