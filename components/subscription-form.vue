<template>
	<validated-form :id="id" @submit="onSubmit">
		<div :class="$style.label">Monthly Membership Reload</div>
		<div :class="$style.selectWrapper">
			<validated-select
				v-model="selectedReloadAmount"
				:class="$style.amountInput"
				:options="reloadAmounts"
				:rules="validationRules"
				type="number"
				inputmode="decimal"
			/>
			<arrow-down-icon :class="$style.arrow"/>
		</div>

		<div :class="$style.label">Payment Method</div>
		<payment-method-radio-button-card
			v-for="method in paymentMethods"
			v-model="selectedPaymentMethod"
			:paymentMethod="method"
			:key="method.id"
		/>

	</validated-form>
</template>

<script>
import ArrowDownIcon from './icons/arrow-down-icon';
import Card from './card';
import PaymentMethodRadioButtonCard from './payment-method-radio-button-card';
import ValidatedForm from './validated-form';
import ValidatedSelect from './validated-select';

export default {
	components: {
		ArrowDownIcon,
		Card,
		PaymentMethodRadioButtonCard,
		ValidatedForm,
		ValidatedSelect
	},

	props: {
		id: String,
		paymentMethods: Array,
		reloadAmounts: {
			type: Array,
			required: true,
		}
	},

	data() {
		return {
			selectedReloadAmount: this.getDefaultReloadAmount(),
			selectedPaymentMethod: this.getDefaultPaymentMethod(),
		};
	},

	watch: {
		reloadAmounts() {
			this.selectedReloadAmount = this.getDefaultReloadAmount();
		},

		paymentMethods() {
			this.selectedPaymentMethod = this.getDefaultPaymentMethod();
		},
	},

	methods: {
		getDefaultReloadAmount() {
			return this.reloadAmounts && this.reloadAmounts[0].value;
		},

		getDefaultPaymentMethod() {
			const fallbackMethod = this.paymentMethods && this.paymentMethods[0];
			const primaryMethod = this.paymentMethods && this.paymentMethods.find(paymentMethod => paymentMethod.isPrimary);

			return primaryMethod || fallbackMethod;
		},

	},
</script>

<style module lang="scss">
	.selectWrapper {
		position: relative;
	}

	.arrow {
		position: absolute;
		bottom: 50%;
		transform: translate(0, 50%);
		right: $spacing-05;
		width: $spacing-04;
	}

</style>
