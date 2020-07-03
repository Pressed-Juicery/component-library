<template>
	<div>
		<card :class="$style.paymentMethod" v-for="(paymentMethod, index) in paymentMethods" :key="index">
			<div :class="$style.content">
				<payment-method-formatter :payment-method="paymentMethod" />
				<div :class="$style.editLink" @click.stop="$emit('edit', paymentMethod)">Edit</div>
			</div>
		</card>
	</div>
</template>

<script>
import Card from './card';
import PaymentMethodFormatter from './payment-method-formatter';

export default {
	components: { Card, PaymentMethodFormatter },

	props: {
		paymentMethods: {
			type: Array,
			required: true,
		},
	},
};
</script>

<style module lang="scss">
	@import '../styles/mixins';
	@import '../styles/variables';

	.paymentMethod {
		margin-bottom: $spacing-03;
	}

	.content {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 $spacing-06 0 $spacing-04;
	}

	.editLink {
		@include text-body-small();
		text-decoration: underline;
		cursor: pointer;
	}
</style>
