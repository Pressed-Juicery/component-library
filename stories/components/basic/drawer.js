import { CHANGE, boolean, withKnobs } from '@storybook/addon-knobs';
import Drawer from '../../../components/drawer.vue';
import { addons } from '@storybook/addons';

export default {
	title: 'Components / Basic / Drawer',
	component: Drawer,
	decorators: [withKnobs],
};

export function Overview() {
	return {
		components: { Drawer },
		template: `
			<drawer :title="title" :isOpen="isOpen" @close="closeDrawer">
				<div>Drawer content goes here. Drawer content goes here. Drawer content goes here.</div>
			</drawer>
		`,
		props: {
			isOpen: {
				default: boolean('Open', true),
			},
		},
		data() {
			return {
				title: 'Drawer title',
			};
		},
		methods: {
			closeDrawer() {
				addons.getChannel().emit(CHANGE, {
					name: 'Open',
					value: false,
				});
			},
		},
	};
}
