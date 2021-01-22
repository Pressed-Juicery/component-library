import CurrentOffers from '../../../components/current-offers.vue';

export default {
	title: 'Components / Basic / CurrentOffers',
	component: CurrentOffers,
};

export function Overview() {
	return {
		components: { CurrentOffers },
		template: '<current-offers :currentOffers="currentOffers" @selected="handleSelected" />',
		data() {
			return {
				currentOffers: [
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
			handleSelected(selectedOffer) {
				console.log({ selectedOffer });
			},
		},
	};
}
