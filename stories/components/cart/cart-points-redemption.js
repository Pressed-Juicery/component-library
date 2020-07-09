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
					firstName: 'Test',
					lastName: 'User',
					points: 220,
				},
				redemptionSummary: redemptionRates.map(rate => {
					rate.quantityAvailable = 1;

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
					firstName: 'Test',
					lastName: 'User',
					points: 220,
				},
				redemptionSummary: redemptionRates.map((rate, index) => {
					rate.quantityAvailable = index % 2;

					return rate;
				}),
			};
		},
	};
}