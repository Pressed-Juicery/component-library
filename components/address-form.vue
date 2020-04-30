<template>
	<div>
		<validated-input v-model="address.name" />
	</div>
</template>

<script>
import ValidatedInput from './validated-input';

export default {
	components: { ValidatedInput },

	props: {
		address: Object,
	},

	methods: {
		onChange() {
			this.$emit('input', this.address);
		},
	},
};
</script>
