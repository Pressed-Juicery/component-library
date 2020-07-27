<template>
	<div :class="isMobileDevice ? $style.cardLine : $style.cardGrid">
		<div :class="$style.wrapper">
			<points-redemption-card
				:class="$style.card"
				v-for="redemptionSummaryItem in sortedRedemptionSummary"
				:redemption-summary-item="redemptionSummaryItem"
				@change="handleChange"
				:key="redemptionSummaryItem.id"
			/>
		</div>
	</div>
</template>

<script>
import PointsRedemptionCard from './points-redemption-card';
import { isMobileDevice } from '../utilities/is-mobile-device';

export default {
	components: { PointsRedemptionCard },

	props: {
		points: {
			type: Number,
			required: true,
		},
		redemptionSummary: {
			type: Array,
			required: true,
		},
	},

	data() {
		return {
			isMobileDevice: isMobileDevice(),
		};
	},

	methods: {
		handleChange(redemptionSummaryItem) {
			this.$emit('change', redemptionSummaryItem);
		},
	},

	computed: {
		sortedRedemptionSummary() {
			return [...this.redemptionSummary]
				.sort((first, second) => first.points - second.points)
				.sort((first, second) => { // eslint-disable-line arrow-body-style
					return Boolean(second.eligibleCartItemQuantity) - Boolean(first.eligibleCartItemQuantity);
				});
		},
	},
};
</script>

<style module lang="scss">
	@import '../styles/variables';

	$card-width: $spacing-12;
	$card-spacing: $spacing-02;

	.cardLine {
		overflow-x: auto;
		overflow-y: hidden;
		margin-bottom: $spacing-05;

		.wrapper {
			display: flex;
		}

		.card {
			flex: 0 0 $card-width;
			margin-right: $card-spacing;
		}
	}

	.cardGrid .wrapper {
		display: grid;
		grid-gap: $card-spacing;
		grid-template-columns: repeat(auto-fill, minmax($card-width, 1fr));
		margin-bottom: $spacing-05;
	}
</style>
