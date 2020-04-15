import RadioButtonCard from '../../components/RadioButtonCard';

export default {
	title: 'RadioButtonCard',
};

const cardData = {
	id: 123,
	title: 'Title',
	content: 'Hello World',
	details: 'Hello World Details',
	selectedItem: '456',
};

const cardTemplate = `
	<radio-button-card :id="card.id.toString()" v-model="card.selectedItem">
		<template v-slot:title>
			<p>{{ card.title }}</p>
		</template>

		<template v-slot:content>
			{{ card.content}}
		</template>

		<template v-slot:details>
			<p>{{ card.details }}</p>
		</template>
	</radio-button-card>
`;

export function Unchecked() {
	return {
		components: { RadioButtonCard },
		template: cardTemplate,

		props: {
			card: {
				default: () => cardData,
			},
		},
	};
}

export function Checked() {
	return {
		components: { RadioButtonCard },
		template: cardTemplate,

		props: {
			card: {
				default: () => ({
					...cardData,
					selectedItem: '123',
				}),
			},
		},
	};
}
