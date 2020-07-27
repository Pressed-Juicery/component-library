import CleanseGuide from '../../../components/cleanse-guide';

export default {
	title: 'Components / Products / CleanseGuide',
	component: CleanseGuide,
};

export function Overview() {
	return {
		components: { CleanseGuide },
		template: '<cleanse-guide :cleanseGuide="cleanseGuide" />',
		data() { // eslint-disable-line max-lines-per-function
			return {
				cleanseGuide: [{
					timeOfDay: 'morning',
					juice: 'greens 2',
					description: 'Start your day with a green juice to energize your body.',
					learnMoreUrl: 'https://pressedjuicery.com/products/kale-spinach-juice',
				}, {
					timeOfDay: 'mid morning',
					juice: 'citrus 2',
					description: 'Great for digestion due to pineapple’s bromelain, Citrus 2 is also full of antioxidants & aids in detoxification.',
					learnMoreUrl: 'https://pressedjuicery.com/products/kale-spinach-juice',
				}, {
					timeOfDay: 'noon',
					juice: 'greens 3',
					description: 'Get all the goodness of leafy greens, plus ginger to aid in digestion.',
					learnMoreUrl: 'https://pressedjuicery.com/products/kale-spinach-juice',
				}, {
					timeOfDay: 'afternoon',
					juice: 'roots 3',
					description: 'Get all the goodness of leafy greens, plus ginger to aid in digestion.',
					learnMoreUrl: 'https://pressedjuicery.com/products/kale-spinach-juice',
				}, {
					timeOfDay: 'late afternoon',
					juice: 'citrus 1',
					description: 'A soothing & very hydrating juice to have before your Vanilla Almond.',
					learnMoreUrl: 'https://pressedjuicery.com/products/kale-spinach-juice',
				}, {
					timeOfDay: 'night',
					juice: 'vanilla almond',
					description: 'End your day sweet & satisfied with your protein & healthy fats.',
					learnMoreUrl: 'https://pressedjuicery.com/products/kale-spinach-juice',
				}],
			};
		},
	};
}
