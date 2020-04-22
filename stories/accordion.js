import Accordion from '../components/accordion';

export default {
	component: Accordion,
	title: 'Accordion',
};

export function Overview() {
	return {
		components: { Accordion },
		template: '<accordion :accordionContent="accordionContent"></accordion>',
		data: () => {
			return {
				accordionContent: {
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

export function AccordionGroup() {
	return {
		components: { Accordion },
		template: `
			<div>
				<accordion v-for="(content, i) in accordionContentList" :accordionContent="content" :key="i">
				</accordion>
			</div>
		`,
		data: () => {
			return {
				accordionContentList: [
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
