import { CHANGE, boolean, withKnobs } from '@storybook/addon-knobs';
import CollapsibleWalletDrawer from '../../../components/collapsible-wallet-drawer';
import { addons } from '@storybook/addons';

export default {
	title: 'Components / Basic / CollapsibleWalletDrawer',
	component: CollapsibleWalletDrawer,
	decorators: [withKnobs],
};

export function Overview() { // eslint-disable-line max-lines-per-function
	return {
		components: { CollapsibleWalletDrawer },
		template: `
			<div style="position:fixed;bottom:0;left:0;right:0;">
				<collapsible-wallet-drawer :isOpen="isOpen" :wallet="wallet" @reload="onReload" @close="closeDrawer"/>
			</div>
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

		methods: {
			onReload() {
				console.log('Reload button clicked'); // eslint-disable-line no-console
			},
			closeDrawer() {
				addons.getChannel().emit(CHANGE, {
					name: 'Open',
					value: false,
				});
			},
		},
	};
}
