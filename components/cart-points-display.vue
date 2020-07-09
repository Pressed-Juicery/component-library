<template>
  <div v-if="wallet && wallet.points >= 0">
    <div :class="$style.balanceWrapper">
      <div>Pressed Points Balance</div>
      <div>{{ wallet.points }}</div>
    </div>
    <button @click="$emit('click')" :class="$style.redeemPoints">
		Redeem Pressed Points
	</button>
	<hr :class="$style.partition" />
  </div>
</template>

<script>
export default {
	props: {
		wallet: Object,
	},
};
</script>

<style module lang="scss">
  @import '../styles/mixins';
  @import '../styles/variables';

	.balanceWrapper {
		display: flex;
		justify-content: space-between;
		margin-bottom: $spacing-05;
	}

	.redeemPoints {
		@include button-tertiary();
		width: 100%;
	}

	.partition {
		border: 1px solid $gray-30;
		margin-top: $spacing-05;
		margin-bottom: $spacing-06;
	}
</style>
