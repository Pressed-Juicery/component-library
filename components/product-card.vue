<template>
	<card :class="$style.root" @click.native="$emit('click', product)">
		<img :class="$style.image" :src="product.imageUrl" />

		<div :class="$style.name">{{ product.name }}</div>

		<div :class="$style.prices">
			<div :class="$style.priceWrapper">
				<div :class="$style.price">{{ formatPrice(product.regularPrice || product.nonMemberPrice) }}</div>
				<div :class="$style.priceLabel">Regular</div>
			</div>
			<div v-if="!areSamePrice" :class="$style.priceWrapper">
				<div :class="$style.price">{{ formatPrice(product.exclusivePrice || product.memberPrice) }}</div>
				<div :class="$style.priceLabel">VIP</div>
			</div>
		</div>

		<button v-if="showLearnMoreButton" :class="$style.learnMoreButton" @click="$emit('learn-more')">
			Learn More
		</button>

		<incremental-quantity-selector
			v-else
			:class="$style.incrementalQuantitySelector"
			v-model="incrementalQuantitySelectorValue"
			@click.native.stop
		/>
	</card>
</template>

<script>
import Card from './card';
import IncrementalQuantitySelector from './incremental-quantity-selector';
import { formatCurrency } from '../utilities/formatters';

export default {
	components: { Card, IncrementalQuantitySelector },

	props: {
		product: {
			type: Object,
			required: true,
		},
		quantity: {
			type: Number,
			required: false,
		},
		showLearnMoreButton: {
			type: Boolean,
			default: false,
		},
	},

	computed: {
		areSamePrice() {
			return (this.product.regularPrice || this.product.nonMemberPrice)
				=== (this.product.exclusivePrice || this.product.memberPrice);
		},

		incrementalQuantitySelectorValue: {
			get() {
				return this.quantity;
			},

			set(newQuantity) {
				const changeEventObject = {
					product: this.product,
					quantity: newQuantity,
				};

				this.$emit('change', changeEventObject);
			},
		},
	},

	methods: {
		formatPrice(price) {
			return price ? formatCurrency(price) : null;
		},
	},
};
</script>

<style module lang="scss">
	@import '../styles/mixins';
	@import '../styles/variables';

	.root {
		display: flex;
		align-items: center;
		flex-direction: column;
		padding: $spacing-05 $spacing-03 $spacing-06;
		cursor: pointer;
	}

	.image {
		width: $spacing-12;
		height: $spacing-12;
		margin-bottom: $spacing-03;
	}

	.name,
	.prices {
		margin-bottom: $spacing-05;
	}

	.name,
	.priceWrapper {
		text-align: center;
	}

	.name {
		@include line-clamp(2);
		@include text-bold();
		text-transform: capitalize;
	}

	// Using last-child doesn't work here because if only one element exists it is simultaneously the first and last
	// child and applies the margin-left incorrectly. nth-of-type works because it'll only be applied if there is a
	// second item that matches.
	.priceWrapper:nth-of-type(2) {
		margin-left: $spacing-06;
	}

	.prices {
		display: flex;
	}

	.priceLabel {
		@include text-body-small();
		@include text-subtle();
	}

	.learnMoreButton {
		@include button-pill-secondary();
		background-color: $white;
		border-color: $goldenrod-light;
	}
</style>
