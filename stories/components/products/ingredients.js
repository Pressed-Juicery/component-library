import Ingredients from '../../../components/ingredients.vue';

export default {
	title: 'Components / Products / Ingredients',
	component: Ingredients,
};

// eslint-disable-next-line max-lines-per-function
export function Overview() {
	return {
		components: { Ingredients },
		template: '<ingredients :ingredients="ingredients" />',
		data() { // eslint-disable-line max-lines-per-function
			return {
				ingredients: [
					{
						id: 1,
						title: 'Water',
						iconUrl: 'https://d3e4ixgvd0ibii.cloudfront.net/shopify/ingredients/filtered-water.svg',
					},
					{
						id: 2,
						title: 'Dates',
						iconUrl: 'https://d3e4ixgvd0ibii.cloudfront.net/shopify/ingredients/dates.svg',
					},
					{
						id: 3,
						title: 'Almonds (Pressed Nuts)',
						iconUrl: 'https://d3e4ixgvd0ibii.cloudfront.net/shopify/ingredients/almonds-(pressed-nuts).svg',
					},
					{
						id: 4,
						title: 'Vanilla Extract',
						iconUrl: 'https://d3e4ixgvd0ibii.cloudfront.net/shopify/ingredients/vanilla-extract.svg',
					},
					{
						id: 5,
						title: 'Sea Salt',
						iconUrl: 'https://d3e4ixgvd0ibii.cloudfront.net/shopify/ingredients/sea-salt.svg',
					},
				],
			};
		},
	};
}
