<template>
	<div>
		<address-formatter :address="store.address" />
		<div v-if="store.storeHours" :class="$style.details">
			<span
				v-for="(hours, index) in store.storeHours"
				:class="$style.hours"
				:key="index"
			>{{ hours }}</span>
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

	.hours {
		&:after {
			content: ', ';
		}

		&:last-child:after {
			content: none;
		}
	}
</style>
