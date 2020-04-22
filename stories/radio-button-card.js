import RadioButtonCard from '../components/radio-button-card';

export default {
	title: 'RadioButtonCard',
	component: RadioButtonCard,
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
				<radio-button-card v-for="(item, index) in items" :key="index" :value="item" v-model="selectedItem">
					<template>
						<div>{{ item }}</div>
					</template>
				</radio-button-card>
			</div>
		`,

		data() {
			return {
				items: [
					'Bonjour Tout le Monde!',
					'Guten Tag Alles!',
					'¡Hola Mundo!',
				],
				selectedItem: null,
			};
		},
	};
}
