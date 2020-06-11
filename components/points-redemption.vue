<template>
	<div :class="isMobileDevice ? $style.cardLine : $style.cardGrid">
		<div :class="$style.wrapper">
			<points-redemption-card
				:class="$style.card"
				v-for="card in displayCards"
				:key="card.id"
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
import { pointsRewardCards } from '../constants/points-reward-cards';

export default {
	components: { PointsRedemptionCard },

	props: {
		points: {
			type: Number,
			required: true,
		},
	},

	data() {
		return {
			isMobileDevice: isMobileDevice(),
			cards: pointsRewardCards,
		};
	},

	methods: {
		handleChange(obj) {
			const { title, points, quantity } = obj;
			const index = this.cards.findIndex(card => card.title === title);

			this.cards[index].selected = quantity;

			this.$emit('change', { title, points, quantity });
		},
	},

	computed: {
		displayCards() {
			return this.cards
				.filter(card => card.selected || card.points <= this.points)
				.map(card => {
					const quantityAvailable = Math.floor(this.points / card.points) + card.selected;

					return { ...card, quantityAvailable };
				});
		},

		redeemedPoints() {
			return this.cards.reduce((accum, card) => accum + (card.selected * card.points), 0);
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
