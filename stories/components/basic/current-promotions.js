import currentPromotions from '../../../components/current-promotions.vue';

export default {
	title: 'Components / Basic / CurrentPromotions',
	component: currentPromotions,
};

export function Overview() {
	return {
		components: { currentPromotions },
		template: '<current-promotions :currentPromotions="currentPromotions" />',
		data() {
			return {
				currentPromotions: [
					{
						handle: '6-for-29',
						name: 'ANY 6 ITEMS FOR $29',
						helpText: 'Applied at checkout',
					},
					{
						handle: '4-for-20',
						name: 'ANY 4 ITEMS & 1 SHOT FOR $20',
						helpText: 'Applied at cart',
					},
					{
						handle: '10-for-60',
						name: 'ANY 10 ITEMS & 1 SHOT FOR $0',
						helpText: 'Applied never',
					},
					{
						handle: '10-for-60',
						name: 'EXTRA EXTRA EXTRA EXTRA EXTRA EXTRA EXTRA EXTRA EXTRA LONG BOY',
						helpText: 'Applied never',
					},
				],
			};
		},
	};
}
