import AccountSummary from '../../../components/account-summary.vue';

export default {
	title: 'Components / Basic / AccountSummary',
	component: AccountSummary,
};

export function Insider() {
	return {
		components: { AccountSummary },
		template: '<account-summary :user="user" />',
		data() {
			return {
				user: {
					firstName: 'Tom',
					wallet: {
						tier: 'INSIDER',
						points: 80,
						funds: 0,
					},
				},
			};
		},
	};
}

export function VIP() {
	return {
		components: { AccountSummary },
		template: '<account-summary :user="user" />',
		data() {
			return {
				user: {
					firstName: 'Jerry',
					wallet: {
						tier: 'VIP',
						points: 160,
						funds: 25.00,
					},
				},
			};
		},
	};
}
