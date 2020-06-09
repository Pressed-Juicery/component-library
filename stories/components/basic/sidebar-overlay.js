import { boolean, withKnobs } from '@storybook/addon-knobs';
import SidebarOverlay from '../../../components/sidebar-overlay';

export default {
	title: 'Components / Basic / SidebarOverlay',
	component: SidebarOverlay,
	decorators: [withKnobs],
};

const mixins = [{
	methods: {
		closeSlider() {
			this.active = false;
		},
	},
}];

export function Overview() {
	return {
		components: { SidebarOverlay },
		mixins,
		template: '<sidebar-overlay :active="active" @close="closeSlider"/>',
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
		template: `<sidebar-overlay
			:active="active"
			:shouldShowBackButton="shouldShowBackButton"
			@close="closeSlider"/>`,
		props: {
			active: {
				default: boolean('Active', true),
			},
		},
		data() {
			return {
				shouldShowBackButton: true,
			};
		},
	};
}
