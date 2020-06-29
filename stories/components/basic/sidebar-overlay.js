import { CHANGE, boolean, withKnobs } from '@storybook/addon-knobs';
import SidebarOverlay from '../../../components/sidebar-overlay';
import { addons } from '@storybook/addons';

export default {
	title: 'Components / Basic / SidebarOverlay',
	component: SidebarOverlay,
	decorators: [withKnobs],
};

const mixins = [{
	methods: {
		closeSlider() {
			// Reference: https://github.com/storybookjs/storybook/issues/3855#issuecomment-638245040
			addons.getChannel().emit(CHANGE, {
				name: 'Active',
				value: false,
			});
		},
	},
}];

export function Overview() {
	return {
		components: { SidebarOverlay },
		mixins,
		template: `
			<div>
				<div v-for="number in 200">Background {{ number }}</div>

				<sidebar-overlay :is-active="active" @close="closeSlider">
					<div v-for="number in 200">Sidebar {{ number }}</div>
				</sidebar-overlay>
			</div>
		`,
		props: {
			active: {
				default: boolean('Active', true),
			},
		},
	};
}
