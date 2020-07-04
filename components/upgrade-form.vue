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
		braintreeTokenizationKey: {
			type: String,
			required: true,
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
			paymentMethod: null,
		};
	},

	methods: {
		handlePaymentSubmit(data) {
			this.$emit('submit', { paymentMethod: data, selectedAmount: this.selectedAmount });
		},
	},
};
</script>
