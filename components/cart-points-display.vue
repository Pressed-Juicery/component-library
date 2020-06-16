<template>
  <div v-if="user && user.points >= 0">
    <div :class="$style.balanceWrapper">
      <div>Pressed Points Balance</div>
      <div>{{ user.points }}</div>
    </div>
    <button @click="$emit('stateChange', 'points')" :class="[$style.redeemPoints, 'button--tertiary']">
		Redeem Pressed Points
	</button>
	<hr :class="$style.partition" />
  </div>
</template>

<script>
export default {
	props: {
		user: Object,
	},
};
</script>

<style module lang="scss">
  @import '../styles/variables';

	.partition {
		border: 1px solid $gray-30;
		margin-top: $spacing-05;
		margin-bottom: $spacing-06;
	}

	.balanceWrapper {
		display: flex;
		justify-content: space-between;
		margin-bottom: $spacing-05;
	}

	.redeemPoints {
		width: 100%;
	}
</style>
