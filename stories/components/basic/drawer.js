import Drawer from '../../../components/drawer.vue';

export default {
	title: 'Components / Basic / Drawer',
	component: Drawer,
};

export function DrawerOpen() {
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
export function DrawerClosed() {
	return {
		components: { Drawer },
		template: '<drawer :title="title" :isOpen="isOpen"></drawer>',
		data() {
			return {
				title: 'enhance your cleanse',
				isOpen: false,
			};
		},
	};
}
