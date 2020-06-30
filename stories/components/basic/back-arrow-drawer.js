import { CHANGE, boolean, withKnobs } from '@storybook/addon-knobs';

import BackArrowDrawer from '../../../components/back-arrow-drawer';
import Drawer from '../../../components/drawer';

import { addons } from '@storybook/addons';

export default {
	title: 'Components / Basic / BackArrowDrawer',
	component: BackArrowDrawer,
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
			<back-arrow-drawer :is-open="isDrawerOpen" @close="closeDrawer">
				<template v-slot:main-content>
					Content
				</template>
			</back-arrow-drawer>
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
			<back-arrow-drawer :is-open="isDrawerOpen" @close="closeDrawer">
				<template v-slot:header-item>
					Item
				</template>

				<template v-slot:main-content>
					Content
				</template>
			</back-arrow-drawer>
		`,

		props: {
			isDrawerOpen: {
				default: boolean('DrawerOpen', true),
			},
		},
	};
}
