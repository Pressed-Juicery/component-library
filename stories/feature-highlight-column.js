import FeatureHighlightColumn from '../components/feature-highlight-column';

export default {
	title: 'FeatureHighlightColumn',
	component: FeatureHighlightColumn,
};

export function Overview() {
	return {
		components: { FeatureHighlightColumn },
		template: `
			<feature-highlight-column :icon="icon" :title="title" :description="description"/>
		`,
		data() {
			return {
				icon: 'https://pressed-product-images.s3-us-west-1.amazonaws.com/shopify/icons/coconut.svg',
				title: 'Coconuts',
				description: 'Coconuts are good for you because of the way that they are.',
				color: 'red',
			};
		},
	};
}
