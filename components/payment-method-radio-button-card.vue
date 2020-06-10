<template>
	<radio-button-card :value="paymentMethod" v-model="model">
		<div :class="$style.content">
			<payment-method-icon :class="$style.icon" :type="paymentMethod.vendor" />
			{{ paymentMethod.identifier }}
		</div>
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

.content {
	display: flex;
	align-items: center;
}

.icon {
	line-height: 0;
	width: $spacing-08;
	margin-right: $spacing-03;
}
</style>
