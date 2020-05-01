<template>
	<radio-button-card :value="address" v-model="model">
		<template>
			<div v-if="title" class="address-radio-button-card__title">{{ title }}</div>

			<div>{{ address.streetAddress }}</div>
			<div v-if="address.extendedAddress">{{ address.extendedAddress }}</div>
			<div>{{ address.locality }}, {{ address.region }} {{ address.postal }}</div>

			<div v-if="address.phone" class="address-radio-button-card__details">{{ phone }}</div>
		</template>
	</radio-button-card>
</template>

<script>
import RadioButtonCard from './radio-button-card';

import { formatPhoneNumber } from '../utilities/formatters';

export default {
	components: { RadioButtonCard },

	model: {
		prop: 'selectedAddress',
		event: 'change',
	},

	props: {
		selectedAddress: {
			required: true,
		},
		address: {
			required: true,
		},
		title: String,
	},

	computed: {
		model: {
			get() { return this.selectedAddress },
			set(value) { this.$emit('change', value) },
		},

		phone() {
			return formatPhoneNumber(this.address.phone);
		},
	},
};
</script>

<style scoped lang="scss">
	@import '../styles/variables';
	@import '../styles/mixins';

	.address-radio-button-card__title {
		margin-bottom: $spacing-04;
		@include text-bold();
	}

	.address-radio-button-card__details {
		margin-top: $spacing-04;
		@include text-body-small();
	}
</style>
