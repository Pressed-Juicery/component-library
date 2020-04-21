<template>
	<radio-button-card :item="store" v-model="selectedStore">
		<template v-slot:main-content>
			<div class="store-radio-button-card__title">{{ store.name }}</div>

			<div>{{ store.streetAddress }}</div>
			<div v-if="store.extendedAddress">{{ store.extendedAddress }}</div>
			<div>{{ store.locality }}, {{ store.region }} {{ store.postal }}</div>

			<div v-if="store.storeHours" class="store-radio-button-card__details">{{ storeHours }}</div>
		</template>

		<template v-slot:top-right-content v-if="distance">
			<div>{{ distance }}</div>
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
			get() { return this.value },
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

<style scoped lang="scss">
@import '../styles/variables';

.store-radio-button-card__title {
	margin-bottom: $spacing-03;
	font-size: $font-size-04;
	font-weight: $font-weight-bold;
}

.store-radio-button-card__content {
	font-size: $font-size-04;
}

.store-radio-button-card__details {
	margin-top: $spacing-03;
}

@media (max-width: 400px) {
	.store-radio-button-card__title {
		font-size: $font-size-default;
	}

	.store-radio-button-card__content {
		font-size: $font-size-default;
	}

	.store-radio-button-card__details {
		font-size: $font-size-02;
	}
}
</style>
