<template>
	<validated-form :id="id" @submit="$emit('submit', { selectedReloadAmount, selectedPaymentMethod })">
		<validated-select
			label="Monthly Membership Reload"
			:options="reloadAmounts"
			:rules="reloadAmountRules"
			v-model="reloadAmount"
		/>

		<payment-method-radio-button-card
			v-for="method in paymentMethods"
			:paymentMethod="method"
			:key="method.id"
			v-model="paymentMethod"
		/>

		<card :class="$style.card" @click.native="$emit('add-new-payment', selectedReloadAmount)">
			<div>Add a New Payment Method</div>
			<div :class="$style.icon">+</div>
		</card>

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
		selectedReloadAmount: Object,
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
			reloadAmount: this.selectedReloadAmount && this.selectedReloadAmount.value,
			reloadAmountRules: [{
				validator: isNotEmpty,
				message: 'Please select a monthly reload amount.',
			}],
		};
	},

	methods: {
		handleCardSelect(newPaymentMethod) {
			this.selectedPaymentMethod = newPaymentMethod;
	watch: {
		reloadAmount(amount) {
			const reloadAmountObject = this.reloadAmounts.find(obj => obj.value === amount);

			this.$emit('update-reload-amount', reloadAmountObject);
		},

		selectedReloadAmount() {
			this.reloadAmount = this.selectedReloadAmount && this.selectedReloadAmount.value;
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

	.card {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.icon {
		color: $gray-30;
		font-size: $spacing-07;
	}

</style>
