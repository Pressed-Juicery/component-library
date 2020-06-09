import { addons } from '@storybook/addons';
import { boolean, withKnobs, CHANGE } from '@storybook/addon-knobs';
import SidebarOverlay from '../../../components/sidebar-overlay';

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
		template: '<sidebar-overlay :is-active="active" @close="closeSlider"/>',
		props: {
			active: {
				default: boolean('Active', true),
			},
		},
	};
}

export function ShowBackButton() {
	return {
		components: { SidebarOverlay },
		mixins,
		template: `
			<sidebar-overlay
				:is-active="active"
				:should-show-back-button="true"
				@close="closeSlider"/>
		`,
		props: {
			active: {
				default: boolean('Active', true),
			},
		},
	};
}
