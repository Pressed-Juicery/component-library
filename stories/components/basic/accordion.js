import Accordion from '../../../components/accordion';

export default {
	component: Accordion,
	title: 'Components / Basic / Accordion',
};

export function Overview() {
	return {
		components: { Accordion },
		template: `
			<accordion title="What is Pressed Juice?">
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
			</accordion>
		`,
	};
}

export function AccordionGroup() {
	return {
		components: { Accordion },
		template: `
			<div>
				<accordion v-for="(item, index) in accordionContentList" :key="index" :title="item.title">
					<div v-html="item.content"></div>
				</accordion>
			</div>
		`,
		data: () => {
			return {
				accordionContentList: [{
					title: 'What is Pressed Juice?',
					content: 'Pressed Juice is Juice that is of the Pressed variety.',
				}, {
					title: 'What is Pressed Juice?',
					content: `
						<p>Pressed Juice is Juice that is of the Pressed variety.</p>
						<p>Pressed Juice is Juice that is of the Pressed variety.</p>
					`,
				}],
			};
		},
	};
}
