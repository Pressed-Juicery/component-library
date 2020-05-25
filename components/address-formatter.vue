<template>
	<div>
		<div v-if="address.name" :class="$style.title">{{ address.name }}</div>

		<div :class="$style.text">{{ address.streetAddress }}</div>
		<div :class="$style.text" v-if="address.extendedAddress">{{ address.extendedAddress }}</div>
		<div :class="$style.text">{{ address.locality }}, {{ address.region }} {{ address.postal }}</div>

		<div :class="$style.text" v-if="address.phone">{{ phone }}</div>
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

	.title {
		@include text-bold();

		margin-bottom: $spacing-02;
	}

	.text {
		@include text-body-small();
		@include text-bold();
	}
</style>
