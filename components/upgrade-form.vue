<template>
	<validated-form @submit="$emit('change', paymentMethod)">
		<validated-select  v-model="selectedAmount" label="Monthly Membership Reload" :options="reloadAmounts"/>
		<validated-payment-method
			:braintreeTokenizationKey="braintreeTokenizationKey"
			@change="paymentMethodData => paymentMethod = paymentMethodData" />
		<slot />
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
};
</script>

<style module lang="scss">

</style>
