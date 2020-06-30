import { CHANGE, boolean, withKnobs } from '@storybook/addon-knobs';

import CollapsibleDrawer from '../../../components/collapsible-drawer';
import Drawer from '../../../components/drawer';

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
