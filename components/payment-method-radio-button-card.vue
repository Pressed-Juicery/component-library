<template>
	<radio-button-card :item="paymentMethod" v-model="selectedPaymentMethod">
		<template v-slot:main-content>
			<div class="payment-method-radio-button-card__title-row">
				<payment-method-icon :type="paymentMethod.cardType" />
				<span>{{ paymentMethod.maskedNumber }}</span>
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
	props: {
		value: {
			type: Object,
			required: true,
		},
		paymentMethod: {
			type: Object,
			required: true,
		},
	},

	components: { PaymentMethodIcon, RadioButtonCard },

	computed: {
		selectedPaymentMethod: {
			get() { return this.value },
			set() { this.$emit('input', this.paymentMethod) },
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
	height: auto;
	width: 50px;
	margin-right: $spacing-03;
}

.payment-radio-button-card__content {
	font-size: $font-size-04;
}
</style>
