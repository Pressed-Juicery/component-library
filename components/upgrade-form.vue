<template>
	<validated-form :id="id" @submit="onSubmit">
		<validated-select
			label="Monthly Membership Reload"
			:options="reloadAmounts"
			:rules="reloadAmountRules"
			v-model="selectedAmount"
		/>
		<validated-payment-method
			:braintreeTokenizationKey="braintreeTokenizationKey"
			@change="onPaymentMethodChange"
		/>
	</validated-form>
</template>

<script>
import { isNotEmpty } from '../utilities/validators';
import ValidatedForm from './validated-form';
import ValidatedSelect from './validated-select';
import Card from './card';
import PaymentMethodFormatter from './payment-method-formatter';
import AddItemButton from './add-item-button';

export default {
	components: {
		AddItemButton,
		Card,
		PaymentMethodFormatter,
		ValidatedForm,
		ValidatedSelect,
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
		onPaymentMethodChange(data) {
			this.paymentMethod = data && data.paymentMethod;
		},

		onSubmit() {
			this.$emit('submit', {
				paymentMethod: this.paymentMethod,
				selectedAmount: this.selectedAmount,
			});
		},
	},
};
</script>
