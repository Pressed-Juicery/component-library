import { CHANGE, boolean, withKnobs } from '@storybook/addon-knobs';
import MenuDrawer from '../../../components/menu-drawer';
import { addons } from '@storybook/addons';

export default {
	title: 'Components / Basic / MenuDrawer',
	component: MenuDrawer,
	decorators: [withKnobs],
};

// eslint-disable-next-line max-lines-per-function
export function Overview() {
	return {
		components: { MenuDrawer },
		template: `
			<div>
				<menu-drawer
					:is-open="isOpen"
					heading="Menu Drawer Title"
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
					{ label: 'First Action', action: this.firstAction },
					{ label: 'Second Action', action: this.secondAction },
					{ label: 'Third Action', action: this.thirdAction },
				],
				action: null,
			};
		},

		methods: {
			firstAction() { this.action = 'one' },
			secondAction() { this.action = 'two' },
			thirdAction() { this.action = 'three' },
			closeDrawer() {
				addons.getChannel().emit(CHANGE, { name: 'Open', value: false });
			},
		},
	};
}
