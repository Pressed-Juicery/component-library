import CategorySelector from '../../../components/category-selector.vue';

export default {
	title: 'Components / Basic / CategorySelector',
	component: CategorySelector,
};

export function Overview() {
	return {
		components: { CategorySelector },
		template: '<category-selector :category="category" @selected="handleSelected" />',
		data() {
			return {
				category: {
					id: '1234567890',
					iconUrl: 'https://d3e4ixgvd0ibii.cloudfront.net/shopify/icons/categories/shots-bottom-aligned.svg',
					name: 'Shots',
				},
			};
		},
		methods: {
			handleSelected(selectedCategoryId) {
				console.log(selectedCategoryId);
			},
		},
	};
}
