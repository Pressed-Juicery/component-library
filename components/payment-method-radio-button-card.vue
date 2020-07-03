<template>
	<radio-button-card :value="paymentMethod" v-model="model">
		<payment-method-formatter :payment-method="paymentMethod" />
	</radio-button-card>
</template>

<script>
import PaymentMethodFormatter from './payment-method-formatter';
import RadioButtonCard from './radio-button-card';

export default {
	components: { PaymentMethodFormatter, RadioButtonCard },

	model: {
		prop: 'selectedPaymentMethod',
		event: 'change',
	},

	props: {
		selectedPaymentMethod: {
			required: true,
		},

		paymentMethod: {
			required: true,
		},
	},

	computed: {
		model: {
			get() { return this.selectedPaymentMethod },
			set(value) { this.$emit('change', value) },
		},
	},
};
</script>
