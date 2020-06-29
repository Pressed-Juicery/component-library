import { CHANGE, boolean, withKnobs } from '@storybook/addon-knobs';

import CollapsibleDrawer from '../../../components/collapsible-drawer';
import Drawer from '../../../components/drawer';
import Sidebar from '../../../components/sidebar';

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
			<collapsible-drawer title="Title" :is-open="isDrawerOpen" @close="closeDrawer">
				Content
			</collapsible-drawer>
		`,

		props: {
			isDrawerOpen: {
				default: boolean('DrawerOpen', true),
			},
		},
	};
}

export function InsideSidebar() {
	return {
		components: { CollapsibleDrawer, Drawer, Sidebar },
		mixins,

		template: `
			<sidebar :is-active="isSidebarOpen" @close="closeSidebar">
				<hr v-for="num in 200" />

				<collapsible-drawer title="Title" :is-open="isDrawerOpen" @close="closeDrawer">
					Content
				</collapsible-drawer>
			</sidebar>
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