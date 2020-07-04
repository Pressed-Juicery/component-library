<template>
	<validated-form :id="id">
		<validated-select
			v-model="selectedAmount"
			label="Monthly Membership Reload"
			:options="reloadAmounts"
			:rules="reloadAmountRules"
		/>
		<validated-payment-method :braintreeTokenizationKey="braintreeTokenizationKey" @change="handlePaymentSubmit" />
	</validated-form>
</template>

<script>
import ValidatedForm from './validated-form';
import ValidatedPaymentMethod from './validated-payment-method';
import ValidatedSelect from './validated-select';
import { isNotEmpty } from '../utilities/validators';

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
			reloadAmountRules: [{
				validator: isNotEmpty,
				message: 'Please select a monthly reload amount.',
			}],
		};
	},

	methods: {
		handlePaymentSubmit(data) {
			if (!data) return;

			this.$emit('submit', {
				paymentMethod: data.paymentMethod,
				selectedAmount: this.selectedAmount,
			});
		},
	},
};
</script>
