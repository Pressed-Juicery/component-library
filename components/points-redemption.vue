<template>
	<div :class="$style.row">
		<points-redemption-card :class="$style.card" v-for="(card, i) in cards"
			:id="i"
			:key="i"
			:icon="card.icon"
			:title="card.title"
			:points="card.points"
			@change="handleChange"/>
	</div>
</template>

<script>
import PointsRedemptionCard from './points-redemption-card';

export default {
	components: { PointsRedemptionCard },

	props: {
		cards: {
			type: Array,
			required: true,
		},
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

	.row {
		display: grid;
		grid-gap: $spacing-01;
		grid-template-columns: repeat(12, 150px);
		grid-template-rows: minmax(200px, 1fr);
	}

	.card {
		margin: 0 $spacing-02;
	}

	.card:first-of-type {
		margin-left: 0;
	}

	.card:last-of-type {
		margin-right: 0;
	}

</style>
