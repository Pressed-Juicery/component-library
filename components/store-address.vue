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
		// The following rule will cause the lines to break between
		// store hour elements instead of within the elements themselves.
		// We're using `display: inline-block` instead of `white-space: nowrap` since `v-for`
		// doesn't insert spaces between elements which would normally allow us to break the line.
		display: inline-block;

		&:after {
			content: ', ';
			white-space: pre; // prevent white-space in `content` from collapsing due to `display: inline-block` above
		}

		&:last-child:after {
			content: none;
		}
	}
</style>
