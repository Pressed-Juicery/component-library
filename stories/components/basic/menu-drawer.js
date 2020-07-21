import MenuDrawer from '../../../components/menu-drawer.vue';

export default {
	title: 'Components / Basic / MenuDrawer',
	component: MenuDrawer,
};

export function Overview() {
	return {
		components: { MenuDrawer },
		template: `
			<div>
				<menu-drawer
					:is-open="isOpen"
					heading="Menu Dialog Template"
					:menu-items="menuItems"
					@close="$emit('close')"
				/>
				<div>Action: {{ action }}</div>
			</div>
		`,

		data() {
			return {
				isOpen: true,
				menuItems: [
					{ label: 'First Action' , action: this.makeOne },
					{ label: 'Second Action', action: this.makeTwo },
					{ label: 'Third Action', action: this.makeThree },
				],
				action: null,
			};
		},

		methods: {
			makeOne() { this.action = 'one' },
			makeTwo() { this.action = 'two' },
			makeThree() { this.action = 'three' },
			close() { this.action = 'closing...'},
		},
	};
}
