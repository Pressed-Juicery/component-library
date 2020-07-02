<template>
	<div>
		<card :class="$style.paymentMethod" v-for="(paymentMethod, index) in paymentMethods" :key="index">
			<div :class="$style.content" @click="$emit('select', paymentMethod)">
				<div :class="$style.paymentInfo">
					<payment-method-icon :class="$style.icon" :type="paymentMethod.vendor" />
					{{ paymentMethod.identifier }}
				</div>
				<div :class="$style.editLink" @click.stop="$emit('edit', paymentMethod)">Edit</div>
			</div>
		</card>
	</div>
</template>

<script>
import Card from './card';
import PaymentMethodIcon from './payment-method-icon';

export default {
	components: { PaymentMethodIcon, Card },

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

	.content,
	.paymentInfo {
		display: flex;
		align-items: center;
	}

	.content {
		justify-content: space-between;
		padding: 0 $spacing-06 0 $spacing-04;
	}

	.icon {
		line-height: 0;
		width: $spacing-08;
		margin-right: $spacing-04;
	}

	.editLink {
		@include text-body-small();
		text-decoration: underline;
		cursor: pointer;
	}
</style>
