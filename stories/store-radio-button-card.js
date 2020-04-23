import StoreRadioButtonCard from '../components/store-radio-button-card';

export default {
	title: 'StoreRadioButtonCard',
};

const firstStore = {
	name: 'Beaverton Town Center',
	streetAddress: '1 Canyon Road',
	locality: 'Beaverton',
	region: 'OR',
	postal: '27705',
};

const secondStore = {
	name: 'Pioneer Square',
	streetAddress: '1 Yamhill Road',
	locality: 'Portland',
	region: 'OR',
	postal: '27705',
};

const thirdStore = {
	name: 'Pearl District',
	streetAddress: '42 10th street',
	locality: 'Portland',
	region: 'OR',
	postal: '27705',
};

export function Default() {
	return {
		components: { StoreRadioButtonCard },
		template: `
			<store-radio-button-card :store="firstStore" v-model="selectedStore" />
		`,

		data() { return { firstStore, selectedStore: null } },
	};
}

export function Checked() {
	return {
		components: { StoreRadioButtonCard },
		template: `
			<store-radio-button-card :store="firstStore" v-model="selectedStore" />
		`,

		data() { return { firstStore, selectedStore: firstStore } },
	};
}

export function ExtendedAddress() {
	return {
		components: { StoreRadioButtonCard },
		template: `
			<store-radio-button-card :store="storeWithExtendedAddress" v-model="selectedStore" />
		`,

		data() {
			return {
				storeWithExtendedAddress: { ...secondStore, extendedAddress: 'Suite 42' },
				selectedStore: null
			};
		},
	};
}

export function Hours() {
	return {
		components: { StoreRadioButtonCard },
		template: `
			<store-radio-button-card :store="storeWithHours" v-model="selectedStore" />
		`,

		data() {
			return {
				storeWithHours: {
					...thirdStore,
					storeHours: {
						sunday: { start: 1100, end: 2000 },
						monday: { start: 800, end: 2100 },
						tuesday: { start: 800, end: 2100 },
						wednesday: { start: 800, end: 2100 },
						thursday: { start: 800, end: 2100 },
						friday: { start: 800, end: 2100 },
						saturday: { start: 1100, end: 2000 },
					},
				},
				selectedStore: null,
			};
		},
	};
}

export function VariedHours() {
	return {
		components: { StoreRadioButtonCard },
		template: `
			<store-radio-button-card :store="storeWithVariedHours" v-model="selectedStore" />
		`,

		data() {
			return {
				storeWithVariedHours: {
					...firstStore,
					storeHours: {
						sunday: { start: 1100, end: 2000 },
						monday: { start: 700, end: 2100 },
						tuesday: { start: 800, end: 2100 },
						wednesday: { start: 800, end: 2200 },
						thursday: { start: 800, end: 2100 },
						friday: { start: 800, end: 2000 },
						saturday: { start: 700, end: 1900 },
					},
				},
				selectedStore: null,
			};
		},
	};
}

export function LongStoreName() {
	return {
		components: { StoreRadioButtonCard },
		template: `
			<store-radio-button-card :store="storeWithLongName" v-model="selectedStore" />
		`,

		data() {
			return {
				storeWithLongName: { ...firstStore, name: 'Beaverton Town Center!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!' },
				selectedStore: null,
			};
		},
	};
}

export function RadioGroup() {
	return {
		components: { StoreRadioButtonCard },
		template: `
			<div>
				<store-radio-button-card v-for="store in stores"
				                         :key="store.name"
				                         :store="store"
				                         v-model="selectedStore" />
			</div>
		`,

		data() {
			return {
				stores: [firstStore, secondStore, thirdStore],
				selectedStore: firstStore,
			};
		},
	};
}
