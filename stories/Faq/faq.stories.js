import FAQ from './faq.component';

export default {
	component: FAQ,
	title: 'FAQ',
};

export function SingleFAQ() {
	return {
		components: { FAQ },
		template: '<FAQ :faq="faq"></FAQ>',
		data: () => {
			return {
				faq: {
					question: 'What is Pressed Juice?',
					answers: [
						{
							content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
						},
					],
				},
			};
		},
	};
}

export function GroupOfFAQs() {
	return {
		components: { FAQ },
		template: `
			<div>
				<FAQ v-for="faq in faqList" :faq="faq"></FAQ>
			</div>
		`,
		data: () => {
			return {
				faqList: [
					{
						question: 'What is Pressed Juice?',
						answers: [
							{ content: 'Pressed Juice is Juice that is of the Pressed variety.' },
						],
					},
					{
						question: 'What is Pressed Juice?',
						answers: [
							{ content: 'Pressed Juice is Juice that is of the Pressed variety.' },
						],
					},
				],
			};
		},
	};
}
