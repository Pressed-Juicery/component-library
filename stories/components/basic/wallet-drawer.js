import { CHANGE, boolean, withKnobs } from '@storybook/addon-knobs';

import Drawer from '../../../components/drawer';
import WalletDrawer from '../../../components/wallet-drawer';

import { addons } from '@storybook/addons';

export default {
	title: 'Components / Basic / WalletDrawer',
	component: WalletDrawer,
	decorators: [withKnobs],
};

const mixins = [{
	methods: {
		closeDrawer() {
			addons.getChannel().emit(CHANGE, {
				name: 'Open',
				value: false,
			});
		},
	},
}];

export function Overview() {
	return {
		components: { WalletDrawer },
		mixins,
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
		mixins,
		template: `
			<drawer :isOpen="isOpen" @close="closeDrawer">
				<wallet-drawer :wallet="wallet" @close="closeDrawer" />
			</drawer>
		`,

		props: {
			isOpen: {
				default: boolean('Open', true),
			},
		},

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
