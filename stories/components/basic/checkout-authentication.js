import { CHANGE, boolean, withKnobs } from '@storybook/addon-knobs';

import CartSidebar from '../../../components/cart-sidebar';
import CheckoutAuthentication from '../../../components/checkout-authentication';
import Drawer from '../../../components/drawer';

import { addons } from '@storybook/addons';

export default {
	title: 'Components / Basic / CheckoutAuthentication',
	component: CheckoutAuthentication,
	decorators: [withKnobs],
};

const mixins = [{
	methods: {
		closeDrawer() {
			addons.getChannel().emit(CHANGE, {
				name: 'DrawerOpen',
				value: false,
			});
		},

		closeSidebar() {
			addons.getChannel().emit(CHANGE, {
				name: 'SidebarOpen',
				value: false,
			});
		},
	},
}];

export function Overview() {
	return {
		components: { CheckoutAuthentication },
		mixins,

		template: `
			<div>
				<checkout-authentication @sign-in="credentials => user = credentials"
				                         @add-guest="guestInfo => guest = guestInfo" />
				<div v-if="user">User: {{ user }}</div>
				<div v-if="guest">Guest: {{ guest }}</div>
			</div>
		`,

		data() { return { user: null, guest: null }},
	};
}
