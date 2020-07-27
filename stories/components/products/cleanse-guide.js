import CleanseGuide from '../../../components/cleanse-guide';

export default {
	title: 'Components / Products / CleanseGuide',
	component: CleanseGuide,
};

export function Overview() { // eslint-disable-line max-lines-per-function
	return {
		components: { CleanseGuide },
		template: '<cleanse-guide :cleanseGuide="cleanseGuide" />',
		data() { // eslint-disable-line max-lines-per-function
			return {
				cleanseGuide: [{
					timeOfDay: 'morning',
					product: {
						name: 'greens 2',
						description: 'Start your day with a green juice to energize your body.',
						url: 'https://pressedjuicery.com/products/kale-spinach-juice',
					},
				}, {
					timeOfDay: 'mid morning',
					product: {
						name: 'citrus 2',
						// eslint-disable-next-line max-len
						description: 'Great for digestion due to pineapple’s bromelain, Citrus 2 is also full of antioxidants & aids in detoxification.',
						url: 'https://pressedjuicery.com/products/kale-spinach-juice',
					},
				}, {
					timeOfDay: 'noon',
					product: {
						name: 'greens 3',
						description: 'Get all the goodness of leafy greens, plus ginger to aid in digestion.',
						url: 'https://pressedjuicery.com/products/kale-spinach-juice',
					},
				}, {
					timeOfDay: 'afternoon',
					product: {
						name: 'roots 3',
						description: 'Get all the goodness of leafy greens, plus ginger to aid in digestion.',
						url: 'https://pressedjuicery.com/products/kale-spinach-juice',
					},
				}, {
					timeOfDay: 'late afternoon',
					product: {
						name: 'citrus 1',
						description: 'A soothing & very hydrating juice to have before your Vanilla Almond.',
						url: 'https://pressedjuicery.com/products/kale-spinach-juice',
					},
				}, {
					timeOfDay: 'night',
					product: {
						name: 'vanilla almond',
						description: 'End your day sweet & satisfied with your protein & healthy fats.',
						url: 'https://pressedjuicery.com/products/kale-spinach-juice',
					},
				}],
			};
		},
	};
}
