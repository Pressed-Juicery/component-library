<template>
	<validated-form :id="id" @submit="onSubmit">
		<div :class="$style.label">Monthly Membership Reload</div>
			<validated-select
				v-model="selectedReloadAmount"
				:class="$style.amountInput"
				:options="reloadAmounts"
				:rules="validationRules"
				type="number"
				inputmode="decimal"
			/>

    <p>Select the amount you’d like to add each month to your Member balance.</p>

	</validated-form>
</template>

<script>
import ArrowDownIcon from './icons/arrow-down-icon';
import Card from './card';
import PaymentMethodRadioButtonCard from './payment-method-radio-button-card';
import ValidatedForm from './validated-form';
import ValidatedSelect from './validated-select';

export default {
	components: {
		ArrowDownIcon,
		Card,
		PaymentMethodRadioButtonCard,
		ValidatedForm,
		ValidatedSelect
	},

</script>

<style module lang="scss">

</style>