import PointsRedemption from '../../../components/points-redemption';
import PointsRedemptionCard from '../../../components/points-redemption-card';
import { redemptionSummary } from '../../../demo-data/redemption-summary.data';

export default {
	title: 'Components / Cart / PointsRedemption',
	component: PointsRedemption,
};

export function Overview() {
	return {
		components: { PointsRedemptionCard },
		template: `
			<div>
				<points-redemption-card :redemption-summary-item="redemptionSummaryItem" @change="onChange" />
				<div>Quantity selected: {{ quantitySelected }}</div>
			</div>
		`,

		data() {
			return {
				redemptionSummaryItem: redemptionSummary[0],
			};
		},

		methods: {
			onChange(redemptionItem) {
				this.quantitySelected = redemptionItem.quantity;
			},
		},
	};
}

export function CardRow() {
	return {
		components: { PointsRedemption },
		template: '<points-redemption :points="points" :redemption-summary="redemptionSummary" />',

		data() {
			return {
				points: 2000,
				redemptionSummary: redemptionSummary,
			};
		},
	};
}
