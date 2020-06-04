<template>
	<div>
		<div :class="$style.header">
			<div :class="$style.row">
				<div :class="$style.title">Pressed Points</div>
				<div :class="$style.points">{{ displayPoints }}</div>
			</div>
			<div :class="$style.subtitle">Rewards you're eligible for:</div>
		</div>
		<points-redemption @change="handlePointsChange" :points="displayPoints"/>
	</div>
</template>

<script>
import PointsRedemption from './points-redemption';

export default {
	components: {
		PointsRedemption,
	},

	props: {
		points: Number,
	},

	data() {
		return {
			productRedemptions: [],
		};
	},

	computed: {
		displayPoints() {
			return this.points - this.redeemedPoints;
		},
		redeemedPoints() {
			return this.productRedemptions.reduce((accum, obj) => accum + (obj.points * obj.quantity), 0);
		},
	},

	methods: {
		handlePointsChange({ points, quantity, title }) {
			const product = this.productRedemptions.find(obj => obj.title === title);

			if (product) {
				product.quantity = quantity;
			} else {
				this.productRedemptions.push({ title, points, quantity });
			}
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
