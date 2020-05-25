<template>
	<div>
		<address-formatter :address="store.address" />
		<div v-if="store.storeHours" :class="$style.details">
			<div v-for="(hours, index) in store.storeHours" :key="index">{{ hours }}</div>
		</div>
	</div>
</template>

<script>
import AddressFormatter from './address-formatter.vue';

export default {
	components: { AddressFormatter },

	props: {
		store: {
			required: true,
		},
	},
};
</script>

<style module lang="scss">
	@import '../styles/mixins';

	.details {
		@include text-body-small();
		@include text-bold();
	}
</style>
