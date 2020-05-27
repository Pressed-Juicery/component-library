<template>
	<div :class="$style.row">
		<points-redemption-card :class="$style.card" v-for="(card, i) in cards"
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

	data() {
		return {
			quantity: '',
		};
	},

	methods: {
		handleChange() {
			const { title, points, quantity } = this;

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
		grid-template-columns: repeat(12, 200px);
		grid-template-rows: minmax(250px, 1fr);
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
