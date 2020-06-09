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
		display: flex;
		padding: $spacing-04;
		margin-bottom: $spacing-03;
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

	.additionalInfo,
	.quantity {
		@include text-body-small();
	}

	.additionalInfo {
		color: $color-text-gray;
		margin-bottom: $spacing-03;
	}
</style>
