import { CHANGE, boolean, withKnobs } from '@storybook/addon-knobs';

import CollapsableDrawer from '../../../components/collapsable-drawer';
import Drawer from '../../../components/drawer';
import SidebarOverlay from '../../../components/sidebar-overlay';

import { addons } from '@storybook/addons';

export default {
	title: 'Components / Basic / CollapsableDrawer',
	component: CollapsableDrawer,
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
		components: { CollapsableDrawer, Drawer },
		mixins,

		template: `
			<drawer :isOpen="isDrawerOpen" @close="closeDrawer">
				<collapsable-drawer title="Title" @close="closeDrawer">
					Content
				</collapsable-drawer>
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
		components: { CollapsableDrawer, Drawer, SidebarOverlay },
		mixins,

		template: `
			<sidebar-overlay :is-open="isSidebarOpen" :is-active="!isDrawerOpen" @close="closeSidebar">
				<hr v-for="num in 60" />
				<drawer :is-open="isDrawerOpen" @close="closeDrawer">
					<collapsable-drawer title="Title" @close="closeDrawer">
						Content
					</collapsable-drawer>
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
