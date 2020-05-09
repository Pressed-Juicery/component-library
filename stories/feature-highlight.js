import FeatureHighlight from '../components/feature-highlight';

export default {
	title: 'FeatureHighlight',
	component: FeatureHighlight,
};

export function Overview() {
	return {
		components: { FeatureHighlight },
		template: `
			<feature-highlight :icon="icon" :title="title" :description="description" />
		`,
		data() {
			return {
				icon: 'https://pressed-product-images.s3-us-west-1.amazonaws.com/shopify/icons/coconut.svg',
				title: 'Coconuts',
				description: 'Coconuts are good for you because of the way that they are.',
			};
		},
	};
}
