import WalletDrawer from '../../../components/wallet-drawer';

export default {
	title: 'Components / Basic / WalletDrawer',
	component: WalletDrawer,
};

export function Overview() {
	return {
		components: { WalletDrawer },
		template: '<wallet-drawer :wallet="wallet" />',

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

export function InDrawer() {
	return {
		components: { Drawer, WalletDrawer },
		template: `
			<drawer :isOpen="isOpen" @close="closeDrawer">
				<wallet-drawer :wallet="wallet" @close="closeDrawer" />
			</drawer>
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
