import BundleCard from '../../../components/bundle-card';
import BundleCardGrid from '../../../components/bundle-card-grid';

import { bundleCardGridData } from '../../../demo-data/bundle-card-grid.data';

export default {
	title: 'Components / Products / BundleCard',
	component: BundleCard,
};

export function Overview() {
	return {
		components: { BundleCard },
		data() {
			return bundleCardGridData[0];
		},
		template: `
			<div>
				<bundle-card :product="product" :theme="theme" />
			</div>
		`,
	};
}

export function MultipleCards() {
	return {
		components: { BundleCardGrid, BundleCard },
		data() {
			return { cards: bundleCardGridData };
		},
		template: `
			<div>
				<bundle-card-grid :cards="cards" />
			</div>
		`,
	};
}
