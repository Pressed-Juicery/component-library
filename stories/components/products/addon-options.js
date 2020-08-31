import AddonOptions from '../../../components/addon-options';

export default {
	title: 'Components / Products / AddonOptions',
	component: AddonOptions,
};

export function Overview() { // eslint-disable-line max-lines-per-function
	return {
		components: { AddonOptions },
		template: '<addon-options :addon-group="addonGroup" :selection="selection" @change="addSelected" />',
		data() {
			return {
				addonGroup: {
					name: 'Enhance your cleanse',
					addons: [{
						name: 'Addon 1',
						variantIds: ['1', '2', '3'],
						price: 5.00,
						displayPrice: '$5.00/day',
					}, {
						name: 'Addon 2',
						variantIds: ['1', '2', '3'],
						price: 5.00,
						displayPrice: '$5.00/day',
					}, {
						name: 'Addon 3',
						variantIds: ['1', '2', '3'],
						price: 5.00,
						displayPrice: '$5.00/day',
					}],
				},
				selection: [],
			};
		},
		methods: {
			addSelected(selected) {
				this.selection = selected;
			},
		},
	};
}
