import PersistentDrawer from '../../../components/persistent-drawer';
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
		components: { PersistentDrawer, WalletDrawer },
		template: `
			<persistent-drawer :isOpen="isOpen" @toggle="isOpen = !isOpen">
				<wallet-drawer :wallet="wallet" @toggle="isOpen = !isOpen" />
			</persistent-drawer>
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
