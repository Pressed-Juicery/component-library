import FeatureHighlightRow from '../../../components/feature-highlight-row';

export default {
	title: 'Sections / FeatureHighlightRow',
	component: FeatureHighlightRow,
};

// eslint-disable-next-line max-lines-per-function
export function Overview() {
	return {
		components: { FeatureHighlightRow },
		template: `
			<feature-highlight-row :features="features" />
		`,
		data() {
			return {
				features: [{
					icon: 'https://pressed-product-images.s3-us-west-1.amazonaws.com/shopify/icons/coconut.svg',
					title: 'Coconuts',
					description: `
						Coconuts are good for you because of the way that they are.
						Coconuts are good for you because of the way that they are.
					`,
				}, {
					icon: 'https://pressed-product-images.s3-us-west-1.amazonaws.com/shopify/icons/coconut.svg',
					title: 'Coconuts',
					description: `
						Coconuts are good for you because of the way that they are.
						Coconuts are good for you because of the way that they are.
						Coconuts are good for you because of the way that they are.
					`,
				}, {
					icon: 'https://pressed-product-images.s3-us-west-1.amazonaws.com/shopify/icons/coconut.svg',
					title: 'Coconuts',
					description: 'Coconuts are good for you because of the way that they are.',
				}],
			};
		},
	};
}
