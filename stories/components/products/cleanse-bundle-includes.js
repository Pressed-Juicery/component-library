import CleanseBundleIncludes from '../../../components/cleanse-bundle-includes.vue';

export default {
	title: 'Components / Products / CleanseBundleIncludes',
	component: CleanseBundleIncludes
}

export function Overview() {
	return {
		components: { CleanseBundleIncludes },
		template: '<cleanse-bundle-includes :cleanseBundle="cleanseBundle"/>',
		data() {
			return {
				cleanseBundle: [
					{ title: "Greens 1", imageUrl: "https://d3e4ixgvd0ibii.cloudfront.net/shopify/cleanse-pdp/GRN1.png" },
					{ title: "Citrus 1", imageUrl: "https://d3e4ixgvd0ibii.cloudfront.net/shopify/cleanse-pdp/CIT1.png" },
					{ title: "Greens 2", imageUrl: "https://d3e4ixgvd0ibii.cloudfront.net/shopify/cleanse-pdp/GRN1.png" },
					{ title: "Citrus 2", imageUrl: "https://d3e4ixgvd0ibii.cloudfront.net/shopify/cleanse-pdp/CIT1.png" },
					{ title: "Greens 3", imageUrl: "https://d3e4ixgvd0ibii.cloudfront.net/shopify/cleanse-pdp/GRN1.png" },
					{ title: "Citrus 3", imageUrl: "https://d3e4ixgvd0ibii.cloudfront.net/shopify/cleanse-pdp/CIT1.png" },
				],
			};
		},
	};
}