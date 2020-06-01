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

export function CustomRangeWithInput() {
	return {
		components: { QuantitySelector },
		template: '<quantity-selector :options="[0, 1, 2, 3, 4, 5]" />',
	};
}

export function CustomRangeWithoutInput() {
	return {
		components: { QuantitySelector },
		template: '<quantity-selector :options="[0, 1, 2, 3, 4, 5]" :canUseInput="false" />',
	};
}

export function Preselected() {
	return {
		components: { QuantitySelector },
		template: '<quantity-selector :quantity="3" />',
	};
}
