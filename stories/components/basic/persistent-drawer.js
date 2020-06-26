import PersistentDrawer from '../../../components/persistent-drawer';
import WalletDrawer from '../../../components/wallet-drawer';

export default {
	title: 'Components / Basic / PersistentDrawer',
	component: PersistentDrawer,
};

export function Overview() {
	return {
		components: { PersistentDrawer },
		template: `
			<persistent-drawer :is-open="false">
				<div style="padding:20px">Fully customizable content</div>
			</persistent-drawer>
		`,
	};
}

export function Logo() {
	return {
		components: { PersistentDrawer },
		template: `
			<persistent-drawer :is-open="false" :has-logo="true">
				<div style="padding:20px">Fully customizable content</div>
			</persistent-drawer>
		`,
	};
}

export function SlidableContent() {
	return {
		components: { PersistentDrawer, WalletDrawer },
		template: `
			<persistent-drawer :is-open="isOpen" :has-logo="true" @close="isOpen = false">
				<wallet-drawer :wallet="wallet" :isOpen="isOpen" @toggle="isOpen = !isOpen" />
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

export function ClickableBackground() {
	return {
		components: { PersistentDrawer, WalletDrawer },
		template: `
			<div>
				<div>Clicked: {{ message }}</div>
				<div v-for="(num, index) in 50"><div @click="message = num">{{ num }}: Click Me!</div></div>

				<persistent-drawer :is-open="isOpen" :has-logo="true" @close="isOpen = false">
					<wallet-drawer :wallet="wallet"
					               :is-open="isOpen"
					               @toggle="isOpen = !isOpen"
					               @reload-balance="isOpen = false" />
				</persistent-drawer>
			</div>
		`,

		data() {
			return {
				message: null,
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
