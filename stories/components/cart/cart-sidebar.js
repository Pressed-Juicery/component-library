import { boolean, withKnobs } from '@storybook/addon-knobs';
import CartSidebar from '../../../components/cart-sidebar';

export default {
	title: 'Components / Cart / CartSidebar',
	component: CartSidebar,
	decorators: [withKnobs],
};

export function Overview() {
	return {
		components: { CartSidebar },
		template: '<cart-sidebar :active="active"/>',
		props: {
			active: {
				default: boolean('Active', true),
			},
		},
	};
}
