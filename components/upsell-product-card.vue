<template>
	<card v-if="variant" :class="$style.card">
		<div :class="$style.imageWrapper">
			<img :class="$style.image" :src="variant.imageUrl" alt="" />
		</div>

		<div :class="$style.descriptionWrapper">
			<div :class="$style.description">
				<div v-if="hasUpsellPrice" :class="$style.price">{{ formatCurrency(upsellPrice) }}</div>
				<div :class="$style.title">{{ variant.name }}</div>
			</div>

			<div :class="$style.button" @click="$emit('add-product', variant)">Add</div>
		</div>
	</card>
</template>

<script>
import Card from './card.vue';
import { formatCurrency } from '../utilities/formatters';
import { isNotEmpty } from '../utilities/validators';

export default {
	components: { Card },

	props: {
		variant: {
			type: Object,
			required: true,
		},
		upsellPrice: {
			type: Number,
			required: false,
		},
	},

	computed: {
		hasUpsellPrice() {
			return isNotEmpty(this.upsellPrice);
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
