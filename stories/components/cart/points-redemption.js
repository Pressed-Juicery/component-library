import PointsRedemption from '../../../components/points-redemption';
import PointsRedemptionCard from '../../../components/points-redemption-card';
import { pointsRewardCards } from '../../../constants/points-reward-cards';

export default {
	title: 'Components / Cart / PointsRedemption',
	component: PointsRedemption,
};

export function Overview() {
	return {
		components: { PointsRedemptionCard },
		template: `
			<div>
				<points-redemption-card
					:icon="icon"
					:title="title"
					:points="points"
					:quantity-available="quantityAvailable"
					@change="onChange"
				/>
				<div>Quantity selected: {{ quantitySelected }}</div>
			</div>
		`,

		data() {
			return {
				...pointsRewardCards[0],
				quantitySelected: null,
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
		template: '<points-redemption :points="points" />',

		data() {
			return { points: 2000 };
		},
	};
}
