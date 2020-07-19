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
				<wallet-drawer :wallet="wallet" />
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
	};
}
