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
			<div>{{ card.title }}</div>
		</template>

		<template v-slot:content>
			{{ card.content}}
		</template>

		<template v-slot:details>
			<div>{{ card.details }}</div>
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
				default() {
					return {
						...cardData,
						selectedItem: '123',
					};
				},
			},
		},
	};
}
