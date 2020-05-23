<template>
	<div v-if="name" :class="$style.name">{{ address.name }}</div>

	<div>{{ address.streetAddress }}</div>
	<div v-if="address.extendedAddress">{{ address.extendedAddress }}</div>
	<div>{{ address.locality }}, {{ address.region }} {{ address.postal }}</div>

	<div v-if="address.phone">{{ address.phone }}</div>
</template>

<script>
export default {
	props: {
		address: Object,
	},
};
</script>

<style module lang="scss">

</style>
