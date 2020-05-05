<template>
	<radio-button-card :value="paymentMethod" v-model="model">
		<template>
			<div class="payment-method-radio-button-card__title-row">
				<payment-method-icon class="payment-method-radio-button-card__icon" :type="paymentMethod.cardType" />
				<span class="payment-method-radio-button-card__title">{{ paymentMethod.maskedNumber }}</span>
			</div>

			<div>{{ paymentMethod.expirationDate }}</div>
			<div>{{ paymentMethod.billingAddress.postalCode }}</div>
		</template>
	</radio-button-card>
</template>

<script>
import PaymentMethodIcon from './payment-method-icon';
import RadioButtonCard from './radio-button-card';

export default {
	components: { PaymentMethodIcon, RadioButtonCard },

	model: {
		prop: 'selectedPaymentMethod',
		event: 'change',
	},

	props: {
		selectedPaymentMethod: {
			required: true,
		},

		paymentMethod: {
			required: true,
		},
	},

	computed: {
		model: {
			get() { return this.selectedPaymentMethod },
			set(value) { this.$emit('change', value) },
		},
	},
};
</script>

<style scoped lang="scss">
@import '../styles/variables';
@import '../styles/mixins';

.payment-method-radio-button-card__title-row {
	display: flex;
	align-items: center;
	margin-bottom: $spacing-03;
	@include text-bold();
}

.payment-method-radio-button-card__icon {
	line-height: .7;
}

.payment-method-radio-button-card__title {
	margin-left: $spacing-03;
}
</style>
