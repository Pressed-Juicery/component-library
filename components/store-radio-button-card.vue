<template>
	<radio-button-card :value="store" v-model="model">
		<div class="store-radio-button-card__title">{{ store.name }}</div>

		<div>{{ store.streetAddress }}</div>
		<div v-if="store.extendedAddress">{{ store.extendedAddress }}</div>
		<div>{{ store.locality }}, {{ store.region }} {{ store.postal }}</div>

		<div v-if="store.storeHours" class="store-radio-button-card__details">
			<div v-for="(hours, index) in store.storeHours" :key="index">{{ hours }}</div>
		</div>
	</radio-button-card>
</template>

<script>
import RadioButtonCard from './radio-button-card';

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
