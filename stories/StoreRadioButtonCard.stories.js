import StoreRadioButtonCard from '../components/StoreRadioButtonCard';

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

const storeLongitude = 14;
const storeLatitude = 50;
const geometry = { coordinates: [storeLongitude, storeLatitude] };

const defaultStore = {
	id: 123,
	name: 'Beaverton Town Center',
	streetAddress: '1 Canyon Road',
	locality: 'Beaverton',
	region: 'OR',
	postal: '27705',
	storeHours,
	geometry,
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
	geometry,
};

const storeWithoutHours = {
	id: 789,
	name: 'Pearl District',
	streetAddress: '42 10th street',
	locality: 'Portland',
	region: 'OR',
	postal: '27705',
	geometry,
};

const storeWithVariedHours = {
	id: 567,
	name: 'Beaverton Farmers Market',
	streetAddress: '1 Hall',
	locality: 'Beaverton',
	region: 'OR',
	postal: '27705',
	storeHours: variedStoreHours,
	geometry,
};

const storeWithoutDistance = {
	id: 234,
	name: 'Hawthorne',
	streetAddress: '1 Hawthorne',
	locality: 'Portland',
	region: 'OR',
	postal: '27705',
	storeHours,
	geometry,
};

const cardTemplate = `
	<store-radio-button-card :store="cardData.store"
	                         :userLocation="{ longitude: 13, latitude: 52 }"
	                         v-model="cardData.selectedStore" />
`;

export function Default() {
	return {
		components: { StoreRadioButtonCard },
		template: cardTemplate,

		props: {
			cardData: {
				default() {
					return {
						store: defaultStore,
						selectedStore: storeWithExtendedAddress,
					};
				},
			},
		},
	};
}

export function Checked() {
	return {
		components: { StoreRadioButtonCard },
		template: cardTemplate,

		props: {
			cardData: {
				default() {
					return {
						store: defaultStore,
						selectedStore: defaultStore,
					};
				},
			},
		},
	};
}

export function WithExtendedAddress() {
	return {
		components: { StoreRadioButtonCard },
		template: cardTemplate,

		props: {
			cardData: {
				default() {
					return {
						store: storeWithExtendedAddress,
						selectedStore: defaultStore,
					};
				},
			},
		},
	};
}

export function WithoutHours() {
	return {
		components: { StoreRadioButtonCard },
		template: cardTemplate,

		props: {
			cardData: {
				default() {
					return {
						store: storeWithoutHours,
						selectedStore: storeWithExtendedAddress,
					};
				},
			},
		},
	};
}

export function withVariedHours() {
	return {
		components: { StoreRadioButtonCard },
		template: cardTemplate,

		props: {
			cardData: {
				default() {
					return {
						store: storeWithVariedHours,
						selectedStore: storeWithExtendedAddress,
					};
				},
			},
		},
	};
}

export function withoutDistance() {
	return {
		components: { StoreRadioButtonCard },
		template: cardTemplate,

		props: {
			cardData: {
				default() {
					return {
						store: storeWithoutDistance,
						selectedStore: storeWithExtendedAddress,
					};
				},
			},
		},
	};
}
