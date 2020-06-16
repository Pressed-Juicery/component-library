<template>
  <validated-form>
    <validated-input label="Monthly Membership Reload"/>
    <validated-input label="Payment Method"/>
    <validated-input label="Expiration Date"/>
    <div :class="$style.row">
      <validated-input label="CVV"/>
      <validated-input label="ZIP Code"/>
    </div>
  </validated-form>
</template>

<script>
import ValidatedForm from './validated-form';
import ValidatedInput from './validated-input';

export default {
	components: {
		ValidatedForm,
		ValidatedInput,
	},
};
</script>

<style module lang="scss">

.row {
  display: flex;
}

</style>
