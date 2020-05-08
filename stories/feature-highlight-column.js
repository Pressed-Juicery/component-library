import FeatureHighlightColumn from '../components/feature-highlight-column';

export default {
	title: 'FeatureHighlightColumn',
	component: FeatureHighlightColumn,
};

export function Overview() {
	return {
		components: { FeatureHighlightColumn },
		template: `
			<feature-highlight-column />
		`,
	};
}
