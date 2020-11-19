<template>
	<card v-if="upsell" :class="[[$style.root], {[$style.isOpen]: isOpen}]">
	</card>
</template>

<script>
import Card from './card';
export default {
	components: { Card },

	props: {
		upsell: {
			type: Object,
			required: true,
		},
		isOpen: Boolean,
	},
};
</script>

<style module lang="scss">
</style>
