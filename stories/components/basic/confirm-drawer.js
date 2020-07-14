import { CHANGE, boolean, withKnobs } from '@storybook/addon-knobs';
import ConfirmDrawer from '../../../components/confirm-drawer.vue';
import ContentWrapper from '../../../components/content-wrapper';
import { addons } from '@storybook/addons';

export default {
	title: 'Components / Basic / ConfirmDrawer',
	component: ConfirmDrawer,
	decorators: [withKnobs],
};

// eslint-disable-next-line
export function Overview() {
	return {
		components: { ContentWrapper, ConfirmDrawer },
		template: `
			<confirm-drawer
				:title="title"
				:cancelButtonText="cancelButtonText"
				:confirmButtonText="confirmButtonText"
				:isOpen="isOpen"
				@close="closeDrawer"
			>
				<div>
					Lorem ipsum dolor sit amet,
					consectetur adipisicing elit, sed
					do eiusmod tempor incididunt ut
					labore et dolore magna aliqua. Ut
					enim ad minim veniam, quis nostrud
					exercitation ullamco laboris nisi
					ut aliquip ex ea commodo
					consequat. <a style="text-decoration: underline;" href="https://pressedjuicery.com/">Click Here</a>
				</div>
			</confirm-drawer>
		`,
		data() {
			return {
				title: 'Terms & Conditions',
				cancelButtonText: 'disagree',
				confirmButtonText: 'agree',
			};
		},
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
