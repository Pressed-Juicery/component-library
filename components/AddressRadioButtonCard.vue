<template>
	<radio-button-card :id="address.id.toString()" v-model="selectedAddress">
		<template v-slot:title v-if="title">
			<div>{{ title }}</div>
		</template>

		<template v-slot:content>
			<div>{{ address.address1 }}</div>
			<div v-if="address.address2">{{ address.address2 }}</div>
			<div>{{ address.city }}, {{ address.province }} {{ address.zip }}</div>
		</template>

		<template v-slot:details v-if="address.phone">
			<div>{{ phone }}</div>
		</template>
	</radio-button-card>
</template>

<script>
import RadioButtonCard from './RadioButtonCard';

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
			get() {
				return this.value.id.toString();
			},

			set() { this.$emit('input', this.address) },
		},

		phone() {
			return formatPhoneNumber(this.address.phone);
		},
	},
};
</script>
