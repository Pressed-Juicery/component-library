import BundleCardSection from '../../../components/bundle-card-section';
import { bundleCardSectionData } from '../../../demo-data/bundle-card-section.data';

export default {
	title: 'Sections / BundleCardSection',
	component: BundleCardSection,
};

export function Overview() {
	return {
		components: { BundleCardSection },
		template: '<bundle-card-section :config="config" @cta-click="onClick"/>',
		data() {
			return { config: bundleCardSectionData };
		},
		methods: {
			onClick(product) {
				console.log(`Clicked CTA for ${product.name}`); // eslint-disable-line no-console
			},
		},
	};
}
