import CurrentOffers from '../../../components/current-offers.vue';

export default {
	title: 'Components / Basic / CurrentOffers',
	component: CurrentOffers,
};

export function Overview() {
	return {
		components: { CurrentOffers },
		template: '<current-offers :currentOffers="currentOffers" />',
		data() {
			return {
				currentOffers: [
					{
					  offerHandle: '6-for-29',
					  title: 'ANY 6 ITEMS FOR $29',
					  subtitle: 'Applied at checkout',
					},
					{
					  offerHandle: '4-for-20',
					  title: 'ANY 4 ITEMS & 1 SHOT FOR $20',
					  subtitle: 'Applied at cart',
					},
					{
					  offerHandle: '10-for-60',
					  title: 'ANY 10 ITEMS & 1 SHOT FOR $0',
					  subtitle: 'Applied never',
					},
				],
			};
		},
	};
}
