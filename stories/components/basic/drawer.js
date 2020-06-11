import { addons } from '@storybook/addons';
import { boolean, CHANGE, withKnobs } from '@storybook/addon-knobs';
import Drawer from '../../../components/drawer.vue';

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
		template: '<drawer :title="title" :isOpen="isOpen" @toggleDrawer="closeDrawer"></drawer>',
		props: {
			isOpen: {
				default: boolean('Open', true),
			},
		},
		data() {
			return {
				title: 'enhance your cleanse',
			};
		},
	};
}
