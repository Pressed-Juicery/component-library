import FeatureHighlightRow from '../../../components/feature-highlight-row';
import { featureHighlightData } from '../../../demo-data/feature-highlight.data';

export default {
	title: 'Sections / FeatureHighlightRow',
	component: FeatureHighlightRow,
};

export function Overview() {
	return {
		components: { FeatureHighlightRow },
		template: '<feature-highlight-row :features="features" />',
		data() {
			return { features: featureHighlightData.features };
		},
	};
}
