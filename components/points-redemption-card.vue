<template>
	<card :class="$style.card">
		<img :class="$style.icon" :src="icon"/>
		<div :class="$style.title">{{ title }}</div>
		<div :class="$style.points">{{ points }} Pts</div>
		<quantity-selector
			:options="options"
			:quantity="quantity"
			@change="handleChange"
			:can-use-input="false"
		/>
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
		icon: String,
		title: String,
		points: String,
		quantityAvailable: {
			type: Number,
			required: true,
		},
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

	computed: {
		options() {
			return [...Array(this.quantityAvailable + 1).keys()];
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
</style>
