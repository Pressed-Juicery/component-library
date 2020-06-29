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
			<div>
				<div v-for="number in 200">Background {{ number }}</div>

				<collapsible-drawer title="Title" :is-open="isDrawerOpen"  @close="closeDrawer">
					Content
				</collapsible-drawer>
			</div>
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
			<div>
				<div v-for="number in 200">Background {{ number }}</div>

				<sidebar :is-active="isSidebarOpen" @close="closeSidebar">
					<div v-for="number in 200">Sidebar {{ number }}</div>

					<collapsible-drawer title="Title" :is-open="isDrawerOpen" @close="closeDrawer">
						<div v-for="number in 20">Drawer {{ number }}</div>
					</collapsible-drawer>
				</sidebar>
			</div>
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
