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
			<cart-points-redemption :user="user" :redemption-summary="redemptionSummary" />
		`,

		data() {
			return {
				user: {
					points: 220,
				},
				redemptionSummary: redemptionRates.map(rate => {
					rate.quantityAvailable = 1; // eslint-disable-line no-param-reassign

					return rate;
				}),
			};
		},
	};
}

export function DisabledItems() {
	return {
		components: { CartPointsRedemption },
		template: `
			<cart-points-redemption :user="user" :redemption-summary="redemptionSummary" />
		`,

		data() {
			return {
				user: {
					points: 220,
				},
				redemptionSummary: redemptionRates.map((rate, index) => {
					rate.quantityAvailable = index % 2; // eslint-disable-line no-param-reassign

					return rate;
				}),
			};
		},
	};
}
