import CartPointsRedemption from '../../../components/cart-points-redemption';
import { redemptionSummary } from '../../../demo-data/redemption-summary.data';

export default {
	title: 'Components / Cart / CartPointsRedemption',
	component: CartPointsRedemption,
};

export function Overview() {
	return {
		components: { CartPointsRedemption },
		template: `
			<cart-points-redemption :wallet="wallet" :redemption-summary="redemptionSummary" />
		`,

		data() {
			return {
				wallet: {
					points: 220,
				},
				redemptionSummary,
			};
		},
	};
}

export function DisabledItems() {
	return {
		components: { CartPointsRedemption },
		template: `
			<cart-points-redemption :wallet="wallet" :redemption-summary="redemptionSummary" />
		`,

		data() {
			return {
				wallet: {
					points: 220,
				},
				redemptionSummary: redemptionSummary.map((rate, index) => {
					return { ...rate, eligibleCartItemQuantity: index % 2 };
				}),
			};
		},
	};
}
