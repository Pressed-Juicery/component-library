<template>
	<div>
		<Address :address="store.address" />
		<div v-if="store.storeHours" :class="$style.details">
			<div v-for="(hours, index) in store.storeHours" :key="index">{{ hours }}</div>
		</div>
	</div>
</template>

<script>
import Address from './address.vue';

export default {
	components: { Address },

	props: {
		store: {
			required: true,
		},
	},
}
</script>

<style module lang="scss">
	@import '../styles/mixins';

	.details {
		@include text-body-small();
	}
</style>
