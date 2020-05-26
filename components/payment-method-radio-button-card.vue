<template>
	<radio-button-card :value="paymentMethod" v-model="model">
		<template>
			<div :class="$style.titleRow">
				<payment-method-icon :class="$style.icon" :type="paymentMethod.cardType" />
				<span :class="$style.title">{{ paymentMethod.maskedNumber }}</span>
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

<style module lang="scss">
@import '../styles/variables';
@import '../styles/mixins';

.titleRow {
	display: flex;
	align-items: center;
	margin-bottom: $spacing-03;
	@include text-bold();
}

.icon {
	line-height: .7;
}

.title {
	margin-left: $spacing-03;
}
</style>
