<template>
	<radio-button-card :value="store" v-model="model">
		<div :class="$style.title">{{ store.name }}</div>

		<div>{{ store.streetAddress }}</div>
		<div v-if="store.extendedAddress">{{ store.extendedAddress }}</div>
		<div>{{ store.locality }}, {{ store.region }} {{ store.postal }}</div>

		<div v-if="store.storeHours" :class="[$style.details, { [$style.subtle] : store.isAfterHours }]">
			<div v-for="(hours, index) in store.storeHours" :key="index">{{ hours }}</div>
		</div>

		<div v-if="store.isAfterHours" :class="[$style.pickupEta]">
			After hours order: available {{ store.pickupEta }}
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

<style module lang="scss">
@import '../styles/variables';
@import '../styles/mixins';

.title {
	margin-bottom: $spacing-04;
	@include text-bold();
}

.details {
	margin-top: $spacing-04;
	@include text-body-small();
}

.subtle {
	@include text-subtle();
}

.pickupEta {
	margin-top: $spacing-04;
	@include text-body-small();
}
</style>
