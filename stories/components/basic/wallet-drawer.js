import WalletDrawer from '../../../components/wallet-drawer';

export default {
	title: 'Components / Basic / WalletDrawer',
	component: WalletDrawer,
};

export function Overview() {
	return {
		components: { WalletDrawer },
		template: `
			<div style="position:fixed;bottom:0;left:0;right:0;">
				<wallet-drawer :wallet="wallet" @reload="onReload"/>
			</div>
		`,

		data() {
			return {
				wallet: {
					cardNumber: '411111111111',
					points: 250,
					funds: 50.25,
				},
			};
		},
		methods: {
			onReload() {
				console.log('Reload button clicked'); // eslint-disable-line no-console
			},
		},
	};
}

export function VIP() {
	return {
		components: { WalletDrawer },
		template: `
			<div style="position:fixed;bottom:0;left:0;right:0;">
				<wallet-drawer :wallet="wallet" @reload="onReload"/>
			</div>
		`,

		data() {
			return {
				wallet: {
					cardNumber: '411111111111',
					points: 250,
					funds: 50.25,
					tier: 'vip',
				},
			};
		},
		methods: {
			onReload() {
				console.log('Reload button clicked'); // eslint-disable-line no-console
			},
		},
	};
}
