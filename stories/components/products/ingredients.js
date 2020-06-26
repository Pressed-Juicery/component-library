import Ingredients from '../../../components/ingredients.vue';

export default {
	title: 'Components / Products / Ingredients',
	component: Ingredients,
};

export function Overview() {
	return {
		components: { Ingredients },
		template: '<ingredients :ingredients="ingredients" />',
		data() {
			return {
				ingredients: [{
					title: 'Water',
					iconUrl: 'https://d3e4ixgvd0ibii.cloudfront.net/shopify/ingredients/filtered-water.svg',
				}, {
					title: 'Dates',
					iconUrl: 'https://d3e4ixgvd0ibii.cloudfront.net/shopify/ingredients/dates.svg',
				}, {
					title: 'Vanilla Extract',
					iconUrl: 'https://d3e4ixgvd0ibii.cloudfront.net/shopify/ingredients/vanilla-extract.svg',
				}, {
					title: 'Almonds (Pressed Nuts)',
					iconUrl: 'https://d3e4ixgvd0ibii.cloudfront.net/shopify/ingredients/almonds-(pressed-nuts).svg',
				}, {
					title: 'Sea Salt',
					iconUrl: 'https://d3e4ixgvd0ibii.cloudfront.net/shopify/ingredients/sea-salt.svg',
				}],
			};
		},
	};
}
