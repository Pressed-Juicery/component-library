import ModifierOptions from '../../../components/modifier-options';

export default {
	title: 'Components / Products / ModifierOptions',
	component: ModifierOptions,
};

export function Overview() { // eslint-disable-line max-lines-per-function
	return {
		components: { ModifierOptions },
		template: `
			<modifier-options
				@change="addSelected"
				:modifiers="modifiers"
				:selected-modifiers="selectedModifiers"
			/>
		`,
		data() { // eslint-disable-line max-lines-per-function
			return {
				selectedModifiers: [],
				modifiers: {
					groupName: 'toppings',
					maximumCount: 3,
					modifierGroups: [{
						name: 'TOPPINGS',
						modifiers: [{
							name: 'Chocolate Chips',
							description: 'Vegan, Gluten Free, Non-GMO',
						},
						{
							name: 'Chocolate Chip Cookie Crumble',
							description: 'Vegan, Gluten Free, Non-GMO, Kosher',
						},
						{
							name: 'Dark Chocolate Crispy Quinoa Gems',
							description: 'Vegan, Gluten Free, Non-GMO',
						},
						{
							name: 'Granola',
							description: 'Gluten Free, Non-GMO, Kosher',
						},
						{
							name: 'Vegan Gummy Bears',
							description: 'Vegan, Gluten Free, Non-GMO, Kosher',
						},
						{
							name: 'Marshmallows',
							description: 'Vegan, Gluten Free, Non-GMO, Kosher',
						},
						{
							name: 'Praline Pecan Pieces',
							description: 'Gluten Free, Non-GMO, Kosher',
						},
						{
							name: 'Sea Salt',
							description: 'Vegan, Gluten Free, Non-GMO',
						},
						{
							name: 'Shredded Coconut',
							description: 'Vegan, Gluten Free, Kosher',
						},
						{
							name: 'Sliced Almonds',
							description: 'Vegan, Gluten Free, Kosher',
						},
						{
							name: 'Sprinkles',
							description: 'Vegan, Gluten Free, Non-GMO, Kosher',
						}],
					},
					{
						name: 'FRESH FRUITS',
						modifiers: [{
							name: 'Fresh Blueberries',
							description: 'Vegan, Gluten Free',
						},
						{
							name: 'Fresh Strawberries',
							description: 'Vegan, Gluten Free',
						}],
					},
					{
						name: 'SAUCES',
						modifiers: [{
							name: 'Almond Butter',
							description: 'Vegan, Gluten Free, Non-GMO, Kosher',
						},
						{
							name: 'Chocolate Drizzle',
							description: 'Gluten Free, Kosher',
						},
						{
							name: 'Granola Butter',
							description: 'Vegan, Gluten Free',
						},
						{
							name: 'Honey',
							description: 'Gluten Free',
						},
						{
							name: 'Raspberry Puree',
							description: 'Vegan, Gluten Free, Non-GMO, Kosher',
						}],
					}],
				},
			};
		},
		methods: {
			addSelected(selected) {
				this.selectedModifiers = selected;
			},
		},
	};
}
