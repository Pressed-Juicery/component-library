<template>
	<radio-button-card :item="address" v-model="selectedAddress">
		<template v-slot:main-content>
			<div class="address-radio-button-card__title" v-if="title">{{ title }}</div>

			<div class="address-radio-button-card__content">
				<div>{{ address.address1 }}</div>
				<div v-if="address.address2">{{ address.address2 }}</div>
				<div>{{ address.city }}, {{ address.province }} {{ address.zip }}</div>
			</div>

			<div class="address-radio-button-card__details" v-if="address.phone">{{ phone }}</div>
		</template>
	</radio-button-card>
</template>

<script>
import RadioButtonCard from './radio-button-card';

import { formatPhoneNumber } from '../utilities/formatters';

export default {
	props: {
		value: {
			type: Object,
			required: true,
		},
		address: {
			type: Object,
			required: true,
		},
		title: String,
	},

	components: { RadioButtonCard },

	computed: {
		selectedAddress: {
			get() { return this.value },
			set() { this.$emit('input', this.address) },
		},

		phone() {
			return formatPhoneNumber(this.address.phone).split('-').join(' - ');
		},
	},
};
</script>

<style scoped lang="scss">
	@import '../styles/variables';

	$font-size-card: $font-size-04;

	.address-radio-button-card__title {
		margin-bottom: $spacing-03;
		font-size: $font-size-card;
		font-weight: $font-weight-bold;
	}

	.address-radio-button-card__content {
		font-size: $font-size-card;
	}

	.address-radio-button-card__details {
		margin-top: $spacing-04;
		font-size: $font-size-02;
	}
</style>
