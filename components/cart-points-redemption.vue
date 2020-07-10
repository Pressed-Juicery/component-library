<template>
	<div>
		<div :class="$style.header">
			<div :class="$style.row">
				<div :class="$style.title">Pressed Points</div>
				<div :class="$style.points">{{ wallet.points }}</div>
			</div>
			<div :class="$style.subtitle">Rewards you're eligible for:</div>
		</div>
		<points-redemption
			@change="handlePointsChange"
			:points="wallet.points"
			:redemption-summary="redemptionSummary"
		/>
	</div>
</template>

<script>
import PointsRedemption from './points-redemption';

export default {
	components: {
		PointsRedemption,
	},

	props: {
		wallet: Object,
		redemptionSummary: {
			type: Array,
			required: true,
		},
	},

	methods: {
		handlePointsChange(redemptionSummaryItem) {
			this.$emit('update-points-redemption', redemptionSummaryItem);
		},
	},

};
</script>

<style module lang="scss">
	@import '../styles/mixins';

	.header {
		margin-top: $spacing-06;
		margin-bottom: $spacing-05;
	}

	.row {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.title {
		@include text-heading-4();
	}

	.points {
		@include text-heading-5;
		@include text-bold();
	}

	.subtitle {
		@include text-subtle;
	}
</style>
