import Drawer from '../../../components/drawer.vue';

export default {
	title: 'Components / Basic / Drawer',
	component: Drawer,
};

export function Overview() {
	return {
		components: { Drawer },
		template: '<drawer :title="title" :isOpen="isOpen"></drawer>',
		data() {
			return {
				title: 'enhance your cleanse',
				isOpen: true,
			};
		},
	};
}
