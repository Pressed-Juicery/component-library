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
		components: { WalletDrawer },
		template: `
			<wallet-drawer :wallet="wallet"
			               :isOpen="isOpen"
			               @toggle="isOpen = !isOpen"
			               @reload-balance="isOpen = false" />
		`,

		data() {
			return {
				isOpen: false,

				wallet: {
					cardNumber: '411111111111',
					points: 250,
					funds: 50.25,
				},
			};
		},
	};
}
