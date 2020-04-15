import Vue from 'vue';
import FAQ from './faq.component';

export default {
	component: FAQ,
	title: 'FAQ',
};

export const SingleFAQ = () => ({
	components: { FAQ},
	template: `
		<FAQ :faq="faq" />
	`,
	data: () => ({
		faq: {
			question: 'What is Pressed Juice?',
			answers: [
				{
					content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Unum dicam posidonium eu vix, sea eu ubique viderer civibus, oporteat signiferumque eos et. Scripta periculis ei eam, te pro movet reformidans. Pri posse graeco definitiones cu, id eam populo quaestio adipiscing, usu quod malorum te. Scripta periculis ei eam, te pro movet reformidans. Offendit eleifend moderatius ex vix, quem odio mazim et qui, purto expetendis cotidieque quo cu, veri persius vituperata ei nec. Pri posse graeco definitiones cu, id eam populo quaestio adipiscing, usu quod malorum te. Offendit eleifend moderatius ex vix, quem odio mazim et qui, purto expetendis cotidieque quo cu, veri persius vituperata ei nec. Eos ex affert fabulas iudicabit, dolore ornatus instructior ex per. Pri posse graeco definitiones cu, id eam populo quaestio adipiscing, usu quod malorum te. Offendit eleifend moderatius ex vix, quem odio mazim et qui, purto expetendis cotidieque quo cu, veri persius vituperata ei nec.",
				},
			]
		}
	})
});

export const GroupOfFAQs = () => ({
	components: { FAQ },
	template: `
		<div>
			<FAQ v-for="faq in faqList" :faq="faq" />
		</div>
	`,
	data: () => ({
		faqList: [
			{
				question: 'What is Pressed Juice?',
				answers: [
					{
						content: 'Pressed Juice is Juice that is of the Pressed variety.',
					},
				]
			},
			{
				question: 'What is Pressed Juice?',
				answers: [
					{
						content: 'Pressed Juice is Juice that is of the Pressed variety.',
					},
				]
			},
			{
				question: 'What is Pressed Juice?',
				answers: [
					{
						content: 'Pressed Juice is Juice that is of the Pressed variety.',
					},
					{
						content: 'Pressed Juice is Juice that is of the Pressed variety.',
					},
					{
						content: 'Pressed Juice is Juice that is of the Pressed variety.',
					},
					{
						reference: "www.info.org",
						content: 'Pressed Juice is Juice that is of the Pressed variety.',
					},
				]
			},
		]
	})
});
