<template>
	<card class="cart-item-card">
		<span class="cart-item-card__image-container">
			<img class="cart-item-card__image" :src="item.imageUrl" :alt="item.name" />
		</span>

		<div class="cart-item-card__description"
		     :class="{ 'cart-item-card__description--reduced-height': !item.additionalInformation }">
			<div class="cart-item-card__main-content">
				<div class="cart-item-card__title">{{ item.name }}</div>
				<div v-if="item.additionalInformation" class="cart-item-card__additional-info">
					{{ item.additionalInformation }}
				</div>
				<div class="cart-item-card__quantity">Qty {{ item.quantity }}</div>
			</div>

			<span class="cart-item-card__price">{{ displayPrice }}</span>
		</div>
	</card>
</template>

<script>
import Card from './card.vue';
import { currency } from '../utilities/formatters';

export default {
	components: { Card },

	props: {
		item: Object,
	},

	computed: {
		displayPrice() {
			return currency(this.item.discountedTotalPrice);
		},
	},
};
</script>

<style scoped lang="scss">
	@import '../styles/mixins';
	@import '../styles/variables';

	$image-vertical-offset: -1.8rem;
	$image-horizontal-offset: -1.8rem;

	.cart-item-card {
		display: flex;
	}

	.cart-item-card__image-container {
		width: 9rem;
	}

	.cart-item-card__image {
		width: 100%;
		margin: 0 auto $image-vertical-offset $image-horizontal-offset;
	}

	.cart-item-card__description {
		display: flex;
		flex: 1;
	}

	.cart-item-card__description--reduced-height {
		margin: $spacing-04 0;
	}

	.cart-item-card__main-content {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin: 0 $spacing-06 0 (-$spacing-06);
		word-break: break-word;
	}

	.cart-item-card__title {
		@include text-bold();

		margin-bottom: $spacing-02;
		line-height: 1;
	}

	.cart-item-card__additional-info {
		@include text-body-small();

		margin-bottom: $spacing-02;
		line-height: 1;
		color: $gray-60;
	}

	.cart-item-card__price {
		@include text-bold();

		line-height: 1;
	}

	.cart-item-card__quantity {
		@include text-body-small();

		line-height: 1;
	}
</style>
