import { CHANGE, boolean, withKnobs } from '@storybook/addon-knobs';

import Drawer from '../../../components/drawer.vue';

import { addons } from '@storybook/addons';

export default {
	title: 'Components / Basic / Drawer',
	component: Drawer,
	decorators: [withKnobs],
};

const mixins = [{
	methods: {
		closeDrawer() {
			addons.getChannel().emit(CHANGE, {
				name: 'Open',
				value: false,
			});
		},
	},
}];

export function Overview() {
	return {
		components: { Drawer },
		mixins,
		template: `
			<div style="background: navajowhite; height: 1500px; margin: 200px 0">
				<drawer :isOpen="isOpen" @close="closeDrawer">
					<div style="padding: 40px;">Fully Customizable Drawer Content</div>
				</drawer>
			</div>`,

		props: {
			isOpen: {
				default: boolean('Open', true),
			},
		},
	};
}
