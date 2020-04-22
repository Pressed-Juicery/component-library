import faq from '../components/faq';

export default {
	component: faq,
	title: 'faq',
};

export function singleFaq() {
	return {
		components: { faq },
		template: '<faq :faq="faq"></faq>',
		data: () => {
			return {
				faq: {
					question: 'What is Pressed Juice?',
					content: [
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
					],
				},
			};
		},
	};
}

export function groupOfFaqs() {
	return {
		components: { faq },
		template: `
			<div>
				<faq v-for="(faq, i) in faqList" :faq="faq" :key="i"></faq>
			</div>
		`,
		data: () => {
			return {
				faqList: [
					{
						question: 'What is Pressed Juice?',
						content: [
							'Pressed Juice is Juice that is of the Pressed variety.',
						],
					},
					{
						question: 'What is Pressed Juice?',
						content: [
							'<p>Pressed Juice is Juice that is of the Pressed variety.</p>',
							'<p>Pressed Juice is Juice that is of the Pressed variety.</p>',
						],
					},
				],
			};
		},
	};
}
