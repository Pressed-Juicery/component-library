<template>
	<card :class="$style.card">
		<img :class="$style.icon" :src="icon"/>
		<div :class="$style.title">{{ title }}</div>
		<div :class="$style.points">{{ points }}<span :class="$style.pointsIndicator">Pts</span></div>
		<quantity-selector :id="id" :quantity="quantity" @change="handleChange" :can-use-input="false" />
	</card>
</template>

<script>
import Card from './card';
import QuantitySelector from './quantity-selector';

export default {
	components: {
		Card,
		QuantitySelector,
	},

	props: {
		id: Number,
		icon: String,
		title: String,
		points: String,
	},

	data() {
		return {
			quantity: 0,
		};
	},

	methods: {
		handleChange(quantity) {
			this.quantity = quantity;
			this.$emit('change', { title: this.title, points: this.points, quantity });
		},
	},
};
</script>

<style module lang="scss" >
	@import '../styles/mixins';

	.card {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: $spacing-07 $spacing-06;
	}

	.icon {
		height: $spacing-09;
		margin-bottom: $spacing-03;
	}

	.title {
		margin-bottom: $spacing-02;
		text-align: center;
		white-space: nowrap;
	}

	.points {
		@include text-heading-6;
		margin-bottom: $spacing-03;
	}

	.pointsIndicator {
		margin-left: $spacing-02;
	}

</style>
