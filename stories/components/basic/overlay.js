import { CHANGE, boolean } from '@storybook/addon-knobs';
import Overlay from '../../../components/overlay';
import { addons } from '@storybook/addons';

export default {
	title: 'Components / Basic / Overlay',
	component: Overlay,
};

export function Overview() {
	return {
		components: { Overlay },
		template: `
			<div>
				<div v-for="number in 200">Background {{ number }}</div>
				<overlay :is-active="isActive" @close="close" />
			</div>
		`,
		props: {
			isActive: {
				default: boolean('Active', true),
			},
		},
		methods: {
			close() {
				addons.getChannel().emit(CHANGE, {
					name: 'Active',
					value: false,
				});
			},
		},
	};
}
