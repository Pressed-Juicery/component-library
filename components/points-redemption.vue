<template>
	<div :class="isMobileDevice ? $style.cardLine : $style.cardGrid">
		<div :class="$style.wrapper">
			<points-redemption-card
				:class="$style.card"
				v-for="card in displayCards"
				:key="card.title"
				:icon="card.icon"
				:title="card.title"
				:points="card.points"
				:quantity="card.selected"
				:quantity-available="card.quantityAvailable"
				:item-quantity="card.itemQuantity"
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
		points: {
			type: Number,
			required: true,
		},
		redemptionRates: {
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
		handleChange(obj) {
			const { title, quantity } = obj;

			this.$emit('change', { title, quantity });
		},
	},

	computed: {
		displayCards() {
			return this.redemptionRates
				.filter(card => card.selected || card.points <= this.points)
				.sort((first, second) => Boolean(second.selected) - Boolean(first.selected)
					|| Boolean(second.quantityAvailable) - Boolean(first.quantityAvailable)
				);
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
