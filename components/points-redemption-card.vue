<template>
	<card :class="[$style.card, { [$style.disabled]: !itemQuantity || !quantity && !quantityAvailable }]">
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
		points: Number,
		quantity: {
			type: Number,
			default: 0,
		},
		quantityAvailable: {
			type: Number,
			required: true,
		},
		itemQuantity: {
			type: Number,
			required: true,
		},
	},

	methods: {
		handleChange(quantity) {
			this.$emit('change', { title: this.title, points: this.points, quantity });
		},
	},

	computed: {
		options() {
			const options = Math.min(this.itemQuantity, this.quantityAvailable + this.quantity);

			return [...Array(options + 1).keys()];
		},
	},
};
</script>

<style module lang="scss" >
	@import '../styles/mixins';

	.card {
		@include text-body-small();
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: $spacing-06 $spacing-05;
	}

	.disabled {
		opacity: .5;
		pointer-events: none;
	}

	.icon {
		height: $spacing-08;
		margin-bottom: $spacing-03;
	}

	.title {
		margin-bottom: $spacing-02;
		text-align: center;
		white-space: nowrap;
	}

	.points {
		@include text-body();
		@include text-bold();
		margin-bottom: $spacing-03;
	}
</style>
