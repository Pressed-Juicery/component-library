import RadioButtonCard from '../components/radio-button-card';

export default {
	title: 'RadioButtonCard',
	component: RadioButtonCard,
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

export function Overview() {
	return {
		components: { RadioButtonCard },
		template: `
			<radio-button-card :value="'overview'" v-model="selectedItem">
				<template>
					<div>This is a RadioButtonCard</div>
					<div>Its contents are completely customizable.</div>
				</template>
			</radio-button-card>
		`,

		data() { return { selectedItem: null } },
	};
}

export function Checked() {
	return {
		components: { RadioButtonCard },
		template: `
			<radio-button-card :value="'thisCard'" v-model="selectedItem">
				<template>
					<div>This radio card is checked.</div>
				</template>
			</radio-button-card>
		`,

		data() { return { selectedItem: 'thisCard' } },
	};
}

export function SecondaryContent() {
	return {
		components: { RadioButtonCard },
		template: `
			<radio-button-card :value="1" v-model="selectedItem">
				<template>
					<div>Primary Content</div>
				</template>

				<template v-slot:secondary>
					<div>Secondary Content</div>
				</template>
			</radio-button-card>
		`,

		data() { return { selectedItem: null } },
	};
}

export function RadioGroup() {
	return {
		components: { RadioButtonCard },
		template: `
			<div>
				<radio-button-card v-for="item in items" :key="item.id" :value="item" v-model="selectedItem">
					<template>
						<div>{{ item.line1 }}</div>
						<div>{{ item.line2 }}</div>
					</template>
				</radio-button-card>
			</div>
		`,

		data() {
			return {
				items: [item1, item2, item3],
				selectedItem: item1,
			};
		},
	};
}
