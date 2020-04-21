<template>
		<template v-slot:title>
			<div>{{ store.name }}</div>
		</template>

		<template v-slot:extraInformation v-if="distance">
			<div>{{ distance }}</div>
		</template>
	<radio-button-card :id="store" v-model="selectedStore">

		<template v-slot:content>
			<div>{{ store.streetAddress }}</div>
			<div v-if="store.extendedAddress">{{ store.extendedAddress }}</div>
			<div>{{ store.locality }}, {{ store.region }} {{ store.postal }}</div>
		</template>

		<template v-slot:details v-if="store.storeHours">
			<div>{{ storeHours }}</div>
		</template>
	</radio-button-card>
</template>

<script>
import RadioButtonCard from './radio-button-card';

import { formatTimes } from '../utilities/storeHours';
import { getDistanceToNearestStore } from '../utilities/storeLocations';

export default {
	props: {
		value: {
			type: Object,
			required: true,
		},
		store: {
			type: Object,
			required: true,
		},
		userLocation: {
			longitude: String,
			latitude: String,
		},
	},

	components: { RadioButtonCard },

	computed: {
		selectedStore: {
			get() {
				return this.value;
			},

			set() { this.$emit('input', this.store) },
		},

		distance() {
			const storeLocation = {
				longitude: this.store.geometry.coordinates[0],
				latitude: this.store.geometry.coordinates[1],
			};

			return getDistanceToNearestStore(this.userLocation, storeLocation);
		},

		storeHours() {
			return formatTimes(this.store.storeHours).join(', ');
		},
	},
};
</script>
