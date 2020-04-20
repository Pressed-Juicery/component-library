import RadioButtonCard from '../../components/RadioButtonCard';

export default {
	title: 'RadioButtonCard',
};

const item1 = {
	id: 123,
	line1: 'Hello World',
	line2: 'Bonjour Tout le Monde!',
};

const item2 = {
	id: 456,
	line1: 'Hello World',
	line2: 'Guten Tag Alles!',
};

const item3 = {
	id: 789,
	line1: 'Hello World',
	line2: '¡Hola Mundo!',
};

export function Unchecked() {
	return {
		components: { RadioButtonCard },
		template: `
			<radio-button-card :item="item1" v-model="item2">
				<template v-slot:main-content>
					<div>{{ item1.line1 }}</div>
					<div>{{ item1.line2 }}</div>
				</template>
			</radio-button-card>
		`,

		data() { return { item1, item2 }; },
	};
}

export function Checked() {
	return {
		components: { RadioButtonCard },
		template: `
			<radio-button-card :item="item1" v-model="item1">
				<template v-slot:main-content>
					<div>{{ item1.line1 }}</div>
					<div>{{ item1.line2 }}</div>
				</template>
			</radio-button-card>
		`,

		data() { return { item1 }; },
	};
}

export function MultipleSelections() {
	return {
		components: { RadioButtonCard },
		template: `
			<div>
				<radio-button-card v-for="item in items" :key="item.id" :item="item" v-model="selectedItem">
					<template v-slot:main-content>
						<div>{{ item.line1 }}</div>
						<div>{{ item.line2 }}</div>
					</template>
				</radio-button-card>
			</div>
		`,

		data() {
			return {
				items: [ item1, item2, item3 ],
				selectedItem: item1,
			};
		},
	};
}
