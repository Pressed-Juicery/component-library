import { CHANGE, boolean, withKnobs } from '@storybook/addon-knobs';
import ContentWrapper from '../../../components/content-wrapper';
import Drawer from '../../../components/drawer.vue';
import { addons } from '@storybook/addons';

export default {
	title: 'Components / Basic / Drawer',
	component: Drawer,
	decorators: [withKnobs],
};

export function Overview() {
	return {
		components: { ContentWrapper, Drawer },
		template: `
			<drawer :isOpen="isOpen" @close="closeDrawer">
				<content-wrapper>
					Drawer content goes here. Drawer content goes here. Drawer content goes here.
				</content-wrapper>
			</drawer>
		`,
		props: {
			isOpen: {
				default: boolean('Open', true),
			},
		},
		methods: {
			closeDrawer() {
				addons.getChannel().emit(CHANGE, {
					name: 'Open',
					value: false,
				});
			},
		},
	};
}
