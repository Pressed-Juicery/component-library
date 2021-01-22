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

export function Elite() {
	return {
		components: { AccountSummary },
		template: '<account-summary :user="user" />',
		data() {
			return {
				user: {
					firstName: 'Sasha',
					wallet: {
						tier: 'ELITE',
						points: 100,
						funds: 12.00,
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
						points: 80,
						funds: 15.35,
					},
				},
			};
		},
	};
}

export function GenericMember() {
	return {
		components: { AccountSummary },
		template: '<account-summary :user="user" />',
		data() {
			return {
				user: {
					firstName: 'Raphael',
					wallet: {
						tier: 'unknown-tier',
						points: 80,
						funds: 15.35,
					},
				},
			};
		},
	};
}

export function NoFirstName() {
	return {
		components: { AccountSummary },
		template: '<account-summary :user="user" />',
		data() {
			return {
				user: {
					firstName: '',
					wallet: {
						tier: 'unknown-tier',
						points: 80,
						funds: 15.35,
					},
				},
			};
		},
	};
}

export function NoUser() {
	return {
		components: { AccountSummary },
		template: '<account-summary :user="user" />',
		data() {
			return {
				user: null,
			};
		},
	};
}
