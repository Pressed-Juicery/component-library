import Drawer from '../../../components/drawer.vue';

export default {
	title: 'Components / Basic / Drawer',
	component: Drawer,
};

export function DrawerOpen() {
	return {
		components: { Drawer },
		template: `
			<div style="height: 100vh">
				<button 
					style="position:fixed; top: 0; background-color: navajowhite;"
					@click="drawer"
				>
					toggle drawer
				</button>
				<drawer :title="title" :isOpen="isOpen" @toggleDrawer="drawerAction">
					<div style="width: 100%;">
						<button style="width: 100%; margin: 10px 0;">
							done
						</button>
						<button style="width: 100%; margin: 10px 0;">
							cancel
						</button>
					</div>
				</drawer>
			</div>
		`,
		data() {
			return {
				title: 'enhance your cleanse',
				isOpen: true,
			};
		},
		methods: {
			drawerAction() {
				this.isOpen = !this.isOpen;
			},
		},
	};
}
