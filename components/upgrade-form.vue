<template>
	<validated-form :id="id">
		<validated-select v-model="selectedAmount" label="Monthly Membership Reload" :options="reloadAmounts"/>
		<validated-payment-method :braintreeTokenizationKey="braintreeTokenizationKey" @change="handlePaymentSubmit" />
	</validated-form>
</template>

<script>
import ValidatedForm from './validated-form';
import ValidatedPaymentMethod from './validated-payment-method';
import ValidatedSelect from './validated-select';
import { config } from '../config';

export default {
	components: {
		ValidatedForm,
		ValidatedSelect,
		ValidatedPaymentMethod,
	},

	props: {
		id: {
			type: String,
		},
		reloadAmounts: {
			type: Array,
			required: true,
		},
		selectedAmount: {
			type: Number,
		},
	},

	data() {
		return {
			braintreeTokenizationKey: config.braintreeTokenizationKey,
			paymentMethod: null,
		};
	},

	methods: {
		async handlePaymentSubmit(data) {
			await data;
			this.$emit('submit', { paymentMethod: data, selectedAmount: this.selectedAmount });
		},
	},
};
</script>
