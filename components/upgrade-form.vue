<template>
	<validated-form :id="id" @submit="$emit('submit', { selectedReloadAmount, selectedPaymentMethod })">
		<validated-select
			label="Monthly Membership Reload"
			:options="reloadAmounts"
			:rules="reloadAmountRules"
			v-model="selectedReloadAmount"
		/>

		<payment-method-radio-button-card
			v-for="method in paymentMethods"
			:paymentMethod="method"
			:key="method.id"
			v-model="paymentMethod"
		/>


	</validated-form>
</template>

<script>
import Card from './card';
import PaymentMethodRadioButtonCard from './payment-method-radio-button-card';
import ValidatedForm from './validated-form';
import ValidatedSelect from './validated-select';
import { isNotEmpty } from '../utilities/validators';

export default {
	components: {
		Card,
		ValidatedForm,
		ValidatedSelect,
		PaymentMethodRadioButtonCard,
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
		handleCardSelect(newPaymentMethod) {
			this.selectedPaymentMethod = newPaymentMethod;
		},
	},
};
</script>

<style lang="scss" module>
	@import '../styles/mixins';
	@import '../styles/variables';

	.paymentMethod {
		margin-bottom: $spacing-03;
	}

	.selectedMethod {
		background-color: #e4d8a6;
		border: 1px solid black;
	}

	.content {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

</style>
