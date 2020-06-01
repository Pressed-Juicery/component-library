import { boolean, withKnobs } from '@storybook/addon-knobs';
import SidebarOverlay from '../../../components/sidebar-overlay';

export default {
	title: 'Components / Basic / SidebarOverlay',
	component: SidebarOverlay,
	decorators: [withKnobs],
};

export function Overview() {
	return {
		components: { SidebarOverlay },
		template: '<sidebar-overlay :active="active"/>',
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
		template: '<sidebar-overlay :active="active" :shouldShowBackButton="shouldShowBackButton"/>',
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
