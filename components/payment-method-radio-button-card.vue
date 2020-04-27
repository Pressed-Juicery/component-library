<template>
	<radio-button-card :value="paymentMethod" v-model="model">
		<template>
			<div class="payment-method-radio-button-card__title-row">
				<payment-method-icon class="payment-method-radio-button-card__icon" :type="paymentMethod.cardType" />
				<span class="payment-method-radio-button-card__title">{{ paymentMethod.maskedNumber }}</span>
			</div>

			<div class="payment-method-radio-button-card__content">
				<div>{{ paymentMethod.expirationDate }}</div>
				<div>{{ paymentMethod.billingAddress.postalCode }}</div>
			</div>
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

.payment-method-radio-button-card__title-row {
	display: flex;
	align-items: center;
	margin-bottom: $spacing-03;
	font-size: $font-size-04;
	font-weight: $font-weight-bold;
}

.payment-method-radio-button-card__icon {
	line-height: .7;
}

.payment-method-radio-button-card__title {
	margin-left: $spacing-03;
}

.payment-radio-button-card__content {
	font-size: $font-size-04;
}
</style>
