<template>
	<validated-form :id="id" @submit="onSubmit">
		<validated-select label="Monthly Membership Reload" :options="reloadAmounts" v-model="selectedReloadAmount" />

		<payment-method-radio-button-card
			v-for="method in paymentMethods"
			:paymentMethod="method"
			:key="method.id"
			v-model="selectedPaymentMethod"
		/>

		<card :class="$style.card" @click.native="$emit('add-payment-method')">
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

export default {
	components: {
		Card,
		ValidatedForm,
		ValidatedSelect,
		PaymentMethodRadioButtonCard,
	},

	props: {
		id: String,
		paymentMethods: Array,
		reloadAmounts: {
			type: Array,
			required: true,
		},
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
		}
	},

	methods: {
		getDefaultReloadAmount() {
			return this.reloadAmounts && this.reloadAmounts[0].value;
		},
		getDefaultPaymentMethod() {
			const fallbackMethod = this.paymentMethods && this.paymentMethods[0];
			const primaryMethod = this.paymentMethods.find(paymentMethod => paymentMethod.isPrimary);

			return primaryMethod || fallbackMethod;
		},
		onSubmit() {
			this.$emit('submit', {
				reloadAmount: this.selectedReloadAmount,
				paymentMethod: this.selectedPaymentMethod,
			});
		}
	}
};
</script>

<style lang="scss" module>
	@import '../styles/mixins';
	@import '../styles/variables';

	.card {
		display: flex;
		justify-content: space-between;
		align-items: center;
		cursor: pointer;
	}

	.icon {
		color: $gray-30;
		font-size: $spacing-07;
	}
</style>
