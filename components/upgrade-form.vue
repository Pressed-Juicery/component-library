<template>
	<validated-form :id="id" @submit="$emit('submit', { selectedReloadAmount, selectedPaymentMethod })">
		<validated-select
			label="Monthly Membership Reload"
			:options="reloadAmounts"
			:rules="reloadAmountRules"
			v-model="selectedReloadAmount"
		/>

		<div v-if="paymentMethods">
			<card v-for="(paymentMethod, index) in paymentMethods"
				@click.native="handleCardSelect(paymentMethod)"
				:class="[$style.paymentMethod, {[$style.selectedMethod]: paymentMethod.id === selectedPaymentMethod.id}]"
				:key="index"
			>
				<div :class="$style.content">
					<payment-method-formatter :payment-method="paymentMethod" @click="handlePaymentMethodSelect(paymentMethod)" />
				</div>
			</card>
		</div>

	</validated-form>
</template>

<script>
import { isNotEmpty } from '../utilities/validators';
import ValidatedForm from './validated-form';
import ValidatedSelect from './validated-select';
import Card from './card';
import PaymentMethodFormatter from './payment-method-formatter';

export default {
	components: {
		Card,
		PaymentMethodFormatter,
		ValidatedForm,
		ValidatedSelect,
	},

	props: {
		id: String,
		braintreeTokenizationKey: {
			type: String,
			required: true,
		},
		initialPaymentMethod: Object,
		paymentMethods: Array,
		reloadAmounts: {
			type: Array,
			required: true,
		},
	},

	created() {
		const defaultPaymentMethod = this.paymentMethods && this.paymentMethods.find(method => method.isPrimary);
		if(!this.initialPaymentMethod) {
			this.selectedPaymentMethod = defaultPaymentMethod || this.paymentMethods[0];
		}
	},

	data() {
		return {
			selectedReloadAmount: this.reloadAmounts[0].value,
			selectedPaymentMethod: null,
			reloadAmountRules: [{
				validator: isNotEmpty,
				message: 'Please select a monthly reload amount.',
			}],
		};
	},

	methods: {
		handleCardSelect(newPaymentMethod) {
			this.selectedPaymentMethod = newPaymentMethod;
		},
	},
};
</script>

<style lang="scss" module>
	@import '../styles/mixins';
	@import '../styles/variables';

	.paymentMethod {
		margin-bottom: $spacing-03;
	}

	.selectedMethod {
		background-color: #e4d8a6;
		border: 1px solid black;
	}

	.content {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

</style>
