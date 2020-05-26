<template>
	<div :class="$style.root">
		<div v-if="address.name" :class="$style.name">{{ address.name }}</div>

		<div>{{ address.streetAddress }}</div>
		<div v-if="address.extendedAddress">{{ address.extendedAddress }}</div>
		<div>{{ address.locality }}, {{ address.region }} {{ address.postal }}</div>

		<div v-if="address.phone">{{ phone }}</div>
	</div>
</template>

<script>
import { formatPhoneNumber } from '../utilities/formatters';

export default {
	props: {
		address: { required: true },
	},

	computed: {
		phone() {
			return formatPhoneNumber(this.address.phone);
		},
	},
};
</script>

<style module lang="scss">
	@import '../styles/mixins';
	@import '../styles/variables';

	.root {
		@include text-body-small();
		@include text-bold();
	}

	.name {
		@include text-body();
		margin-bottom: $spacing-02;
	}
</style>
