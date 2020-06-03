<template>
  <div>
    <div :class="$style.balanceWrapper">
      <div>Pressed Points Balance</div>
      <div>{{ points }}</div>
    </div>
    <button @click="$emit('stateChange', 'points')" :class="$style.redeemPoints">Redeem Pressed Points</button>
  </div>
</template>

<script>
export default {
	props: {
		points: Number,
	},
};
</script>

<style module lang="scss">
  @import '../styles/variables';

	.balanceWrapper {
		display: flex;
		justify-content: space-between;
		margin-bottom: $spacing-05;
	}

	.redeemPoints {
		background-color: $gray-30;
		color: black;
		width: 100%;
	}
</style>
