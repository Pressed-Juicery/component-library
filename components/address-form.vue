<template>
	<div>
		<validated-input v-model="address.name" />
	</div>
</template>

<script>
import ValidatedInput from './validated-input';

export default {
	components: { ValidatedInput },

	model: {
		prop: 'address',
		event: 'change',
	},

	props: {
		address: { required: true },
	},

	},

	computed: {
		model: {
			get() { return this.address },
			set(value) { this.$emit('change', value) },
		},
	},
};
</script>
