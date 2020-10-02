<template>
	<validated-form :id="id" @submit="onSubmit">

    <p>Select the amount you’d like to add each month to your Member balance.</p>

	</validated-form>
</template>

<script>
import ArrowDownIcon from './icons/arrow-down-icon';
import Card from './card';
import PaymentMethodRadioButtonCard from './payment-method-radio-button-card';
import ValidatedCheckbox from './validated-checkbox';
import ValidatedForm from './validated-form';

export default {
  components: {
    ArrowDownIcon,
    Card,
    PaymentMethodRadioButtonCard,
    ValidatedCheckbox,
    ValidatedForm,
  },

}
</script>

<style module lang="scss">

</style>
