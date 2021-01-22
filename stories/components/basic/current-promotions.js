import currentPromotions from '../../../components/current-promotions.vue';

export default {
	title: 'Components / Basic / CurrentPromotions',
	component: currentPromotions,
};

export function Overview() {
	return {
		components: { currentPromotions },
		template: '<current-promotions :currentPromotions="currentPromotions" @selected="handleSelected" />',
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
						name: 'ANY 10 ITEMS & 1 SHOT FOR $60',
						helpText: 'Applied at cart',
					},
					{
						handle: 'extra-long-example',
						name: 'EXTRA EXTRA EXTRA EXTRA EXTRA EXTRA EXTRA EXTRA EXTRA LONG',
						helpText: 'Applied never',
					},
				],
			};
		},
		methods: {
			handleSelected(currentlySelectedPromotion) {
				console.log({ currentlySelectedPromotion });
			},
		},
	};
}
