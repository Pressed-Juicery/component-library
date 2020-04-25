<template>
	<radio-button-card :value="address" v-model="model">
		<template>
			<div v-if="title" class="address-radio-button-card__title">{{ title }}</div>

			<div class="address-radio-button-card__content">
				<div>{{ address.streetAddress }}</div>
				<div v-if="address.extendedAddress">{{ address.extendedAddress }}</div>
				<div>{{ address.locality }}, {{ address.region }} {{ address.postal }}</div>
			</div>

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
			return formatPhoneNumber(this.address.phone)
				.split('-')
				.join(' - ');
		},
	},
};
</script>

<style scoped lang="scss">
	@import '../styles/variables';

	.address-radio-button-card__title {
		margin-bottom: $spacing-04;
		font-size: $font-size-04;
		font-weight: $font-weight-bold;
	}

	.address-radio-button-card__content {
		font-size: $font-size-04;
	}

	.address-radio-button-card__details {
		margin-top: $spacing-04;
		font-size: $font-size-02;
	}
</style>
