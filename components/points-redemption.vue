<template>
	<div :class="isMobileDevice ? $style.cardLine : $style.cardGrid">
		<div :class="$style.wrapper">
			<points-redemption-card
				:class="$style.card"
				v-for="(card, i) in cards"
				:key="i"
				:icon="card.icon"
				:title="card.title"
				:points="card.points"
				:quantity-available="card.quantityAvailable"
				@change="handleChange"
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
		cards: {
			type: Array,
			required: true,
		},
	},

	data() {
		return { isMobileDevice: isMobileDevice() };
	},

	methods: {
		handleChange(obj) {
			const { title, points, quantity } = obj;

			this.$emit('change', { title, points, quantity });
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
	}
</style>
