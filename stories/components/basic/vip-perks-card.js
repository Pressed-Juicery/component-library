import VipPerksCard from '../../../components/vip-perks-card.vue';

export default {
	title: 'Components / Basic / VipPerksCard',
	component: VipPerksCard,
};

export function Overview() {
	return {
		components: { VipPerksCard },
		template: '<vip-perks-card :vipPerks="vipPerks" />',
		data() {
			return {
				vipPerks: {
					title: 'Save $7 today with vip',
					message: 'As a VIP Member, enjoy Pressed at discounted prices, earn points for rewards, and get access to exclusive member-only deals.',
					iconUrl: 'https://d3e4ixgvd0ibii.cloudfront.net/shopify/icons/vip-member-black.svg',
				},
			};
		},
	};
}
