import CategorySelector from '../../../components/category-selector.vue';

export default {
	title: 'Components / Basic / CategorySelector',
	component: CategorySelector,
};

export function Overview() {
	return {
		components: { CategorySelector },
		template: '<category-selector :category="category" />',
		data() {
			return {
				category: {
					iconUrl: 'https://d3e4ixgvd0ibii.cloudfront.net/shopify/icons/half-day-1_black.svg',
					name: 'Cleanses',
				},
			};
		},
	};
}
