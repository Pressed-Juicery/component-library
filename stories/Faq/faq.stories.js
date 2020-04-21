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
					content: [
						`
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						</p>
						`,
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
						content: [
							`
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
							</p>
							`,
						],
					},
					{
						question: 'What is Pressed Juice?',
						content: [
							`
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
							</p>
							`,
							`
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
							`,
							`
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
							</p>
							`,
						],
					},
				],
			};
		},
	};
}
