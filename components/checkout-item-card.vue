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

		<div v-if="hasModifiers" :class="$style.additionalContent">
			<div v-for="modifier in item.modifiers" :key="modifier.groupName">
				{{ modifier.groupName }}: {{ modifier.name }}
			</div>
		</div>
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

		hasModifiers() {
			return this.item.modifiers && this.item.modifiers.length;
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

		&:last-of-type {
			margin-bottom: 0;
		}
	}

	.mainContent {
		display: flex;
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

		margin: 0 (-$spacing-03);
		padding: $spacing-03 $spacing-05 0;
		border-top: $border-light;
	}
</style>
