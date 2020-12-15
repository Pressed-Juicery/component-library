<template>
	<validated-form :id="id" @submit="onSubmit">
		<validated-select label="Monthly Membership Reload" :options="reloadAmounts" v-model="selectedReloadAmount" />

		<payment-method-radio-button-card
			v-for="method in paymentMethods"
			:paymentMethod="method"
			:key="method.id"
			v-model="selectedPaymentMethod"
		/>

		<card :class="$style.card" @click.native="$emit('add-payment-method')">
			<div>Add a New Payment Method</div>
			<div :class="$style.icon">+</div>
		</card>

		<validated-checkbox :class="$style.legalText" v-model="acceptsSmsMarketing">
			Text messaging is a great way to get order notifications and learn about our special deals and promotions.
			By submitting this form, you agree to receive recurring automated marketing text messages from
			Pressed Juicery at the cell number used when signing up. Consent is not a condition of any purchase.
			Message &amp; data rates may apply. Message frequency is recurring. Messages may be auto-dialed from
			Pressed Juicery. A maximum of ten (10) promotional messages will be sent per month. Reply STOP to quit.
		</validated-checkbox>

		<validated-checkbox
			:class="$style.legalText"
			:label="legalText"
			:rules="rules"
			v-model="hasAgreed"
		/>
	</validated-form>
</template>

<script>
import Card from './card';
import PaymentMethodRadioButtonCard from './payment-method-radio-button-card';
import ValidatedCheckbox from './validated-checkbox';
import ValidatedForm from './validated-form';
import ValidatedSelect from './validated-select';
import { isTruthy } from '../utilities/validators';

export default {
	components: {
		Card,
		ValidatedCheckbox,
		ValidatedForm,
		ValidatedSelect,
		PaymentMethodRadioButtonCard,
	},

	props: {
		id: String,
		paymentMethods: Array,
		reloadAmounts: {
			type: Array,
			required: true,
		},
	},

	data() {
		return {
			selectedReloadAmount: this.getDefaultReloadAmount(),
			selectedPaymentMethod: this.getDefaultPaymentMethod(),
			acceptsSmsMarketing: false,
			hasAgreed: false,
			rules: [{
				validator: isTruthy,
				message: 'You must agree to the terms to continue.',
			}],
			legalText: `
				You acknowledge and agree that your membership will renew automatically
				each month beginning on the date you register. You will be charged automatically
				every month for your membership. The monthly charge of ten dollars (US $10.00) or greater
				if chosen will be automatically charged to the debit or credit card provided
				on the same date every month until you cancel your membership.
				To cancel your membership, go to the MY ACCOUNT section of our website
				or you can also email us at info@pressedjuicery.com or call us toll-free
				at 888.44.JUICE (888.445.8423).
			`,
		};
	},

	watch: {
		reloadAmounts() {
			this.selectedReloadAmount = this.getDefaultReloadAmount();
		},
		paymentMethods() {
			this.selectedPaymentMethod = this.getDefaultPaymentMethod();
		},
	},

	methods: {
		getDefaultReloadAmount() {
			return this.reloadAmounts && this.reloadAmounts[0].value;
		},
		getDefaultPaymentMethod() {
			const fallbackMethod = this.paymentMethods && this.paymentMethods[0];
			const primaryMethod = this.paymentMethods.find(paymentMethod => paymentMethod.isPrimary);

			return primaryMethod || fallbackMethod;
		},
		onSubmit() {
			this.$emit('submit', {
				reloadAmount: this.selectedReloadAmount,
				paymentMethod: this.selectedPaymentMethod,
			});
		},
	},
};
</script>

<style lang="scss" module>
	@import '../styles/mixins';
	@import '../styles/variables';

	.card {
		display: flex;
		justify-content: space-between;
		align-items: center;
		cursor: pointer;
	}

	.icon {
		color: $gray-30;
		font-size: $spacing-07;
	}

	.legalText {
		margin-top: $spacing-07;
		color: $color-text-legal;
	}
</style>
