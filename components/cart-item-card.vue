<template>
	<card :class="$style.root">
		<div :class="$style.mainContent">
			<div :class="$style.imageWrapper">
				<img :class="$style.image" :src="item.variant.imageUrl" :alt="item.variant.name" />
			</div>

			<div :class="$style.descriptionWrapper">
				<div :class="$style.description">
					<div :class="$style.title">{{ item.variant.name }}</div>
					<div :class="$style.quantity">Qty {{ item.quantity }}</div>
				</div>

				<div>
					<span :class="$style.originalPrice">{{ originalPrice }}</span>
					<span :class="$style.price">{{ displayPrice }}</span>
				</div>
			</div>
		</div>

		<hr v-if="additionalContent" :class="$style.divider" />

		<div v-if="additionalContent" :class="$style.additionalContent">{{ additionalContent }}</div>
	</card>
</template>

<script>
import Card from './card.vue';
import { formatCurrency } from '../utilities/formatters';

export default {
	components: { Card },

	props: {
		item: Object,
	},

	computed: {
		additionalContent() {
			return this.item.additionalInformation
				|| this.item.bundleItems
				|| (this.item.modifiers && this.item.modifiers.toppings)
				|| '';
		},

		originalPrice() {
			return this.item.originalPrice && this.item.originalPrice !== this.item.price
				? formatCurrency(this.item.originalPrice)
				: null;
		},

		displayPrice() {
			return formatCurrency(this.item.price);
		},
	},
};
</script>

<style module lang="scss">
	@import '../styles/mixins';
	@import '../styles/variables';

	.root {
		margin-bottom: $spacing-03;
		padding: $spacing-03;
	}

	.mainContent {
		display: flex;
	}

	.bottomBorder {
		margin: 0 (-$spacing-03) $spacing-03;
		padding-bottom: $spacing-03;
		border-bottom: $border-light;
	}

	.divider {
		margin: 0 (-$spacing-03) $spacing-03;
		border: $border-light;
	}

	.imageWrapper {
		width: $spacing-10;
		margin-right: $spacing-04;
	}

	.image {
		width: 100%;
	}

	.descriptionWrapper {
		display: flex;
		flex: 1;
	}

	.description {
		flex: 1;
	}

	.title,
	.price {
		@include text-bold();
	}

	.originalPrice {
		@include text-subtle();
		@include text-strikethrough();

		margin: 0 $spacing-02;
	}

	.additionalContent,
	.quantity {
		@include text-body-small();
	}

	.additionalContent {
		@include text-subtle();

		margin-left: $spacing-05;
	}
</style>
