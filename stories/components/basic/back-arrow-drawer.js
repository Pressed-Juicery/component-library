import { boolean, CHANGE, withKnobs } from '@storybook/addon-knobs';

import Drawer from '../../../components/drawer';
import BackArrowDrawer from '../../../components/back-arrow-drawer';
import SidebarOverlay from '../../../components/sidebar-overlay';

import { addons } from '@storybook/addons';

export default {
	title: 'Components / Basic / BackArrowDrawer',
	component:  BackArrowDrawer,
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
		components: { BackArrowDrawer, Drawer },
		mixins,
		template: `
			<drawer :is-open="isDrawerOpen" @close="closeDrawer">
				<back-arrow-drawer @close="closeDrawer">
					<template v-slot:main-content>
						Content
					</template>
				</back-arrow-drawer>
			</drawer>
		`,

		props: {
			isDrawerOpen: {
				default: boolean('DrawerOpen', true),
			},
		},
	};
}

export function HeaderItem() {
	return {
		components: { BackArrowDrawer, Drawer },
		mixins,
		template: `
			<drawer :is-open="isDrawerOpen" @close="closeDrawer">
				<back-arrow-drawer @close="closeDrawer">
					<template v-slot:header-item>
						Item
					</template>

					<template v-slot:main-content>
						Content
					</template>
				</back-arrow-drawer>
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
		components: { BackArrowDrawer, Drawer, SidebarOverlay },
		mixins,

		template: `
			<sidebar-overlay :is-open="isSidebarOpen" :is-active="!isDrawerOpen" @close="closeSidebar">
				<hr v-for="num in 60" />

				<drawer :is-open="isDrawerOpen" @close="closeDrawer">
					<back-arrow-drawer @close="closeDrawer">
						<template v-slot:header-item>
							Item
						</template>

						<template v-slot:main-content>
							Content
						</template>
					</back-arrow-drawer>
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
