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
		id: String,
		braintreeTokenizationKey: {
			type: String,
			required: true,
		},
		initialPaymentMethod: Object,
		paymentMethods: Array,
		reloadAmounts: {
			type: Array,
			required: true,
		},
	},

	created() {
		const defaultPaymentMethod = this.paymentMethods && this.paymentMethods.find(method => method.isPrimary);
		if(!this.initialPaymentMethod) {
			this.selectedPaymentMethod = defaultPaymentMethod || this.paymentMethods[0];
		}
	},

	data() {
		return {
			selectedReloadAmount: this.reloadAmounts[0].value,
			selectedPaymentMethod: null,
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
