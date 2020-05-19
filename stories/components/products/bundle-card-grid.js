import BundleCardGrid from '../../../components/bundle-card-grid';
import { bundleCardGridData } from '../../../demo-data/bundle-card-grid.data';

export default {
	title: 'Components / Products / BundleCardGrid',
	component: BundleCardGrid,
};

export function Overview() {
	return {
		components: { BundleCardGrid },
		template: '<bundle-card-grid :cards="cards" />',
		data() {
			return { cards: [bundleCardGridData[0]] };
		},
	};
}

export function MultipleCards() {
	return {
		components: { BundleCardGrid },
		template: '<bundle-card-grid :cards="cards" />',
		data() {
			return { cards: bundleCardGridData };
		},
	};
}
