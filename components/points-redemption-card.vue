<template>
	<card :class="[$style.card, { [$style.disabled]: !redemptionSummaryItem.eligibleCartItemQuantity }]">
		<img :class="$style.icon" :src="redemptionSummaryItem.icon"/>
		<div :class="$style.title">{{ redemptionSummaryItem.title }}</div>
		<div :class="$style.points">{{ redemptionSummaryItem.points }} Pts</div>
		<quantity-selector
			:options="options"
			:quantity="redemptionSummaryItem.requestedRedemptionQuantity"
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
		redemptionSummaryItem: {
			type: Object,
			required: true,
		},
	},

	methods: {
		handleChange(requestedRedemptionQuantity) {
			this.$emit('change', {
				...this.redemptionSummaryItem,
				requestedRedemptionQuantity,
			});
		},
	},

	computed: {
		options() {
			const quantity = (this.redemptionSummaryItem && this.redemptionSummaryItem.eligibleCartItemQuantity) || 0;

			return [...Array(quantity + 1).keys()];
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
