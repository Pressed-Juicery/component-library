import { CHANGE, boolean, withKnobs } from '@storybook/addon-knobs';
import Sidebar from '../../../components/sidebar';
import { addons } from '@storybook/addons';

export default {
	title: 'Components / Basic / Sidebar',
	component: Sidebar,
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
		components: { Sidebar },
		mixins,
		template: `
			<div>
				<div v-for="number in 200">Background {{ number }}</div>

				<sidebar :is-active="active" @close="closeSlider">
					<div v-for="number in 200">Sidebar {{ number }}</div>
				</sidebar>
			</div>
		`,
		props: {
			active: {
				default: boolean('Active', true),
			},
		},
	};
}
