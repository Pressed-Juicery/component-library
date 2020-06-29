import { CHANGE, boolean, withKnobs } from '@storybook/addon-knobs';

import CollapsibleDrawer from '../../../components/collapsible-drawer';
import Drawer from '../../../components/drawer';
import SidebarOverlay from '../../../components/sidebar-overlay';

import { addons } from '@storybook/addons';

export default {
	title: 'Components / Basic / CollapsibleDrawer',
	component: CollapsibleDrawer,
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
		components: { CollapsibleDrawer, Drawer },
		mixins,

		template: `
			<drawer :isOpen="isDrawerOpen" @close="closeDrawer">
				<collapsible-drawer title="Title" @close="closeDrawer">
					Content
				</collapsible-drawer>
			</drawer>
		`,

		props: {
			isDrawerOpen: {
				default: boolean('DrawerOpen', true),
			},
		},
	};
}

export function Sidebar() {
	return {
		components: { CollapsibleDrawer, Drawer, SidebarOverlay },
		mixins,

		template: `
			<sidebar-overlay :is-open="isSidebarOpen" :is-active="!isDrawerOpen" @close="closeSidebar">
				<hr v-for="num in 160" />

				<drawer :is-open="isDrawerOpen" @close="closeDrawer">
					<collapsible-drawer title="Title" @close="closeDrawer">
						Content
					</collapsible-drawer>
				</drawer>
			</sidebar-overlay>
		`,

		props: {
			isDrawerOpen: {
				default: boolean('DrawerOpen', true),
			},

			isSidebarOpen: {
				default: boolean('SidebarOpen', true),
			},
		},
	};
}
