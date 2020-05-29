import QuantitySelector from '../../../components/quantity-selector';

export default {
	component: QuantitySelector,
	title: 'Components / Forms / QuantitySelector',
};

export function Overview() {
	return {
		components: { QuantitySelector },
		template: '<quantity-selector />',
	};
}

export function DropdownOnly() {
	return {
		components: { QuantitySelector },
		template: '<quantity-selector :canUseInput="false" />',
	};
}
