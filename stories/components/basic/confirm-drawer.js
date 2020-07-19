import { CHANGE, boolean, withKnobs } from '@storybook/addon-knobs';
import ConfirmDrawer from '../../../components/confirm-drawer.vue';
import { addons } from '@storybook/addons';

export default {
	title: 'Components / Basic / ConfirmDrawer',
	component: ConfirmDrawer,
	decorators: [withKnobs],
};

// eslint-disable-next-line max-lines-per-function
export function Overview() {
	return {
		components: { ConfirmDrawer },
		template: `
			<confirm-drawer
				title="Terms & Conditions"
				cancelButtonText="Disagree"
				confirmButtonText="Agree"
				:isOpen="isOpen"
				@close="closeDrawer"
			>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
				et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
				aliquip ex ea commodo consequat. <a style="text-decoration: underline;" href="#">Click Here</a>
			</confirm-drawer>
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
