<template>
	<radio-button-card :value="store" v-model="model">
		<template>
			<div class="store-radio-button-card__title">{{ store.name }}</div>

			<div>{{ store.streetAddress }}</div>
			<div v-if="store.extendedAddress">{{ store.extendedAddress }}</div>
			<div>{{ store.locality }}, {{ store.region }} {{ store.postal }}</div>

			<div v-if="store.storeHours" class="store-radio-button-card__details">{{ storeHours }}</div>
		</template>

		<template v-slot:secondary v-if="distance">
			<div>{{ distance }}</div>
		</template>
	</radio-button-card>
</template>

<script>
import RadioButtonCard from './radio-button-card';

import { formatTimes } from '../utilities/storeHours';

export default {
	components: { RadioButtonCard },

	model: {
		prop: 'selectedStore',
		event: 'change',
	},

	props: {
		selectedStore: {
			required: true,
		},
		store: {
			required: true,
		},
	},

	computed: {
		model: {
			get() { return this.selectedStore },
			set(value) { this.$emit('change', value) },
		},

		distance() {
			return null;
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
	margin-bottom: $spacing-04;
	font-size: $font-size-04;
	font-weight: $font-weight-bold;
}

.store-radio-button-card__content {
	font-size: $font-size-04;
}

.store-radio-button-card__details {
	margin-top: $spacing-04;
	font-size: $font-size-02;
}
</style>
