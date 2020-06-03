<template>
	<div>
		<div :class="$style.header">
			<div :class="$style.row">
				<div :class="$style.title">Pressed Points</div>
				<div :class="$style.points">{{ points }}</div>
			</div>
			<div :class="$style.subtitle">Rewards you're eligible for:</div>
		</div>
		<points-redemption :cards="cards"/>
	</div>
</template>

<script>
import PointsRedemption from './points-redemption';

export default {
	components: {
		PointsRedemption,
	},
	props: {
		cards: Object,
		points: Number,
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
