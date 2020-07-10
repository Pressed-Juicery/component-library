import CartPointsRedemption from '../../../components/cart-points-redemption';
import { redemptionRates } from '../../../demo-data/redemption-rates.data';

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
				redemptionSummary: redemptionRates.map(rate => {
					return { ...rate, quantityAvailable: 1 };
				}),
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
				redemptionSummary: redemptionRates.map((rate, index) => {
					return { ...rate, quantityAvailable: index % 2 };
				}),
			};
		},
	};
}
