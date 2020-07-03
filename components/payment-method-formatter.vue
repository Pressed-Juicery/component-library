<template>
	<div :class="$style.root">
		<payment-method-icon :class="$style.icon" :type="paymentMethod.vendor" />
		{{ paymentMethod.identifier }}
	</div>
</template>

<script>
import PaymentMethodIcon from './payment-method-icon';

export default {
	components: { PaymentMethodIcon },

	props: {
		paymentMethod: {
			type: Object,
			required: true,
		},
	},
};
</script>

<style module lang="scss">
	@import '../styles/mixins';
	@import '../styles/variables';

	.root {
		display: flex;
		align-items: center;
	}

	.icon {
		line-height: 0;
		width: $spacing-08;
		margin-right: $spacing-04;
	}
</style>
