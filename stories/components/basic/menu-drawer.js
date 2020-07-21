import { CHANGE, boolean, withKnobs } from '@storybook/addon-knobs';
import MenuDrawer from '../../../components/menu-drawer.vue';
import { addons } from '@storybook/addons';

export default {
	title: 'Components / Basic / MenuDrawer',
	component: MenuDrawer,
	decorators: [withKnobs],
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
					@close="closeDrawer"
				/>
				<div>Action: {{ action }}</div>
			</div>
		`,

		props: {
			isOpen: {
				default: boolean('Open', true),
			},
		},

		data() {
			return {
				menuItems: [
					{ label: 'First Action' , action: this.makeOne },
					{ label: 'Second Action', action: this.makeTwo },
					{ label: 'Third Action', action: this.makeThree },
				],
				action: null,
			};
		},

		methods: {
			makeOne() { this.action = 'one'; },
			makeTwo() { this.action = 'two'; },
			makeThree() { this.action = 'three'; },
			closeDrawer() {
				addons.getChannel().emit(CHANGE, { name: 'Open', value: false });
			},
		},
	};
}
