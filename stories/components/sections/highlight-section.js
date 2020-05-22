import HighlightSection from '../../../components/highlight-section';
import { highlightSectionData } from '../../../demo-data/highlight-section.data';

export default {
	title: 'Sections / HighlightSection',
	component: HighlightSection,
};

export function Overview() {
	return {
		components: { HighlightSection },
		template: '<highlight-section :config="config" />',
		data() {
			return {
				config: highlightSectionData,
			};
		},
	};
}
