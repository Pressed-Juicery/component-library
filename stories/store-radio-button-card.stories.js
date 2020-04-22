import StoreRadioButtonCard from '../components/store-radio-button-card';

export default {
	title: 'StoreRadioButtonCard',
};

const storeHours = {
	sunday: { start: 1100, end: 2000 },
	monday: { start: 800, end: 2100 },
	tuesday: { start: 800, end: 2100 },
	wednesday: { start: 800, end: 2100 },
	thursday: { start: 800, end: 2100 },
	friday: { start: 800, end: 2100 },
	saturday: { start: 1100, end: 2000 },
};

const variedStoreHours = {
	sunday: { start: 1100, end: 2000 },
	monday: { start: 700, end: 2100 },
	tuesday: { start: 800, end: 2100 },
	wednesday: { start: 800, end: 2200 },
	thursday: { start: 800, end: 2100 },
	friday: { start: 800, end: 2000 },
	saturday: { start: 700, end: 1900 },
};

const defaultStore = {
	id: 123,
	name: 'Beaverton Town Center',
	streetAddress: '1 Canyon Road',
	locality: 'Beaverton',
	region: 'OR',
	postal: '27705',
	storeHours,
};

const storeWithExtendedAddress = {
	id: 456,
	name: 'Pioneer Square',
	streetAddress: '1 Yamhill Road',
	extendedAddress: 'Suite 42',
	locality: 'Portland',
	region: 'OR',
	postal: '27705',
	storeHours,
};

const storeWithoutHours = {
	id: 789,
	name: 'Pearl District',
	streetAddress: '42 10th street',
	locality: 'Portland',
	region: 'OR',
	postal: '27705',
};

const storeWithVariedHours = {
	id: 567,
	name: 'Beaverton Farmers Market',
	streetAddress: '1 Hall',
	locality: 'Beaverton',
	region: 'OR',
	postal: '27705',
	storeHours: variedStoreHours,
};

const storeWithoutDistance = {
	id: 234,
	name: 'Hawthorne',
	streetAddress: '1 Hawthorne',
	locality: 'Portland',
	region: 'OR',
	postal: '27705',
	storeHours,
};

export function Default() {
	return {
		components: { StoreRadioButtonCard },
		template: `
			<store-radio-button-card :store="defaultStore" v-model="selectedStore" />
		`,

		data() { return { defaultStore, selectedStore: storeWithExtendedAddress } },
	};
}

export function Checked() {
	return {
		components: { StoreRadioButtonCard },
		template: `
			<store-radio-button-card :store="defaultStore" v-model="selectedStore" />
		`,

		data() { return { defaultStore, selectedStore: defaultStore } },
	};
}

export function WithExtendedAddress() {
	return {
		components: { StoreRadioButtonCard },
		template: `
			<store-radio-button-card :store="storeWithExtendedAddress" v-model="selectedStore" />
		`,

		data() { return { storeWithExtendedAddress, selectedStore: defaultStore } },
	};
}

export function WithoutHours() {
	return {
		components: { StoreRadioButtonCard },
		template: `
			<store-radio-button-card :store="storeWithoutHours" v-model="selectedStore" />
		`,

		data() { return { storeWithoutHours, selectedStore: storeWithExtendedAddress } },
	};
}

export function withVariedHours() {
	return {
		components: { StoreRadioButtonCard },
		template: `
			<store-radio-button-card :store="storeWithVariedHours" v-model="selectedStore" />
		`,

		data() { return { storeWithVariedHours, selectedStore: storeWithExtendedAddress } },
	};
}

export function withoutDistance() {
	return {
		components: { StoreRadioButtonCard },
		template: `
			<store-radio-button-card :store="storeWithoutDistance" v-model="selectedStore" />
		`,

		data() { return { storeWithoutDistance, selectedStore: storeWithExtendedAddress } },
	};
}

export function withMultipleSelections() {
	return {
		components: { StoreRadioButtonCard },
		template: `
			<div>
				<store-radio-button-card v-for="store in stores"
				                         :key="store.id"
				                         :store="store"
				                         v-model="selectedStore" />
			</div>
		`,

		data() {
			return {
				stores: [defaultStore, storeWithExtendedAddress, storeWithoutHours, storeWithVariedHours],
				selectedStore: defaultStore,
			};
		},
	};
}
