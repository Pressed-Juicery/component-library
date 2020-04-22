<template>
	<radio-button-card :item="paymentMethod" v-model="selectedPaymentMethod">
		<template v-slot:main-content>
			<div class="payment-method-radio-button-card__title-row">
				<img class="payment-method-radio-button-card__icon" :src="getPaymentMethodIcon()" alt="credit card" />
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
import RadioButtonCard from './radio-button-card';

import { formatAssetName } from '../utilities/formatters';

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

	components: { RadioButtonCard },

	computed: {
		selectedPaymentMethod: {
			get() {
				return this.value;
			},

			set() { this.$emit('input', this.paymentMethod) },
		},
	},

	methods: {
		getPaymentMethodIcon() {
			const paymentMethodTypes = ['mastercard', 'visa', 'discover', 'american express'];
			const isKnownPaymentMethodType = this.paymentMethod.cardType
				&& paymentMethodTypes.includes(this.paymentMethod.cardType.toLowerCase());

			const paymentMethodType = isKnownPaymentMethodType
				? formatAssetName(this.paymentMethod.cardType.toLowerCase())
				: 'unknown';

			return `https://pressed-product-images.s3-us-west-1.amazonaws.com/icons/credit-card_icons/${paymentMethodType}.png`;
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
