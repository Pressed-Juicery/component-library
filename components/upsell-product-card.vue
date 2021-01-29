<template>
	<card v-if="variant" :class="$style.card">
		<div :class="$style.imageWrapper">
			<img :class="$style.image" :src="variant.imageUrl" alt="" />
		</div>

		<div :class="$style.descriptionWrapper">
			<div :class="$style.description">
				<div :class="$style.title">{{ variant.name }}</div>
				<div v-if="upsellPrice" :class="$style.price">{{ formatCurrency(upsellPrice) }}</div>
			</div>

			<div :class="$style.button" @click="$emit('add-product', variant)">Add</div>
		</div>
	</card>
</template>

<script>
import Card from './card.vue';
import { formatCurrency } from '../utilities/formatters';

export default {
	components: { Card },

	props: {
		variant: {
			type: Object,
			required: true,
		},
		tier: {
			type: String,
			required: true,
		},
	},

	computed: {
		upsellPrice() {
			return this.tier && this.tier.toLowerCase() === 'vip'
				? this.variant.memberSalePrice
				: this.variant.nonMemberSalePrice;
		},
	},

	methods: {
		formatCurrency(number) {
			return formatCurrency(number);
		},
	},
};
</script>

<style module lang="scss">
	@import '../styles/mixins';
	@import '../styles/variables';

	.card {
		display: flex;
		padding: $spacing-04;
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
		align-items: center;
		flex: 1;
	}

	.description {
		flex: 1;
	}

	.title,
	.price {
		@include text-bold;
	}

	.button {
		@include button-pill-secondary;
	}

</style>
