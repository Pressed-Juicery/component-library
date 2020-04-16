import FAQ from './faq.component';

export default {
	component: FAQ,
	title: 'FAQ',
};

export function SingleFAQ() {
	return {
		components: { FAQ },
		template: '<FAQ :faq="faq"><img style="width:20px" src="https://d3e4ixgvd0ibii.cloudfront.net/icons/down-arrow-wide-grey.svg" alt="faq arrow"></FAQ>',
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
				<FAQ v-for="faq in faqList" :faq="faq">
					<img style="width:20px" src="https://d3e4ixgvd0ibii.cloudfront.net/icons/plus.svg" alt="faq arrow">
				</FAQ>
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
