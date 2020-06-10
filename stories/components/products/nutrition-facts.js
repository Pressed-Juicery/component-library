import NutritionFacts from '../../../components/nutrition-facts.vue';

export default {
	title: 'Components / Products / NutritionFacts',
	component: NutritionFacts,
};

// eslint-disable-next-line max-lines-per-function
export function Overview() {
	return {
		components: { NutritionFacts },
		template: '<nutrition-facts :nutritionDetails="nutritionDetails" />',
		data() { // eslint-disable-line max-lines-per-function
			return {
				nutritionDetails: {
					servingSize: '2 fl oz',
					servingsPerContainer: '1',
					actualServingsPerContainer: 1,
					calories: 200,
					claims: ['Vegan', 'Gluten Free', 'Kosher', '100% Cold Pressed Juice', 'Non-GMO Project Certified'],
					additionalInfo: ['Perishable.', 'Keep Refrigerated.', 'Shake away separation.'],
					warnings: ['Manufactured in a facility that processes tree nuts.'],
					vitamins: [
						{ label: 'Vitamin A', value: '20%' },
						{ label: 'Vitamin C', value: '20%' },
						{ label: 'Calcium', value: '2%' },
						{ label: 'Iron', value: '6%' },
					],
					facts: [
						{
							label: 'Total Fat',
							amountPerServing: '0g',
							dailyValue: '0%',
							children: [
								{ label: 'Sat Fat', amountPerServing: '0g', dailyValue: '0%' },
								{ label: 'Trans Fat', amountPerServing: '0g', dailyValue: '0%' },
							],
						},
						{ label: 'Cholest', amountPerServing: '0g', dailyValue: '0%', children: [] },
						{ label: 'Sodium', amountPerServing: '10mg', dailyValue: '0%', children: [] },
					],
				},
			};
		},
	};
}
