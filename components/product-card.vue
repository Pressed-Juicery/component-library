<template>
	<card @click.native="$emit('click', product)">
		<div :class="$style.wrapper">
			<img :class="$style.image" :src="product.imageUrl" />
			<div :class="$style.name">{{ product.name }}</div>

			<div v-if="hasSamePrice" :class="$style.price">{{ formatPrice(product.nonMemberPrice) }}</div>

			<div v-else :class="$style.price">
				<span :class="nonMemberPriceClass">{{ formatPrice(product.nonMemberPrice) }}</span>
				{{ formatPrice(product.nonMemberSalePrice) }}
				|
				<span :class="memberPriceClass">{{ formatPrice(product.memberPrice) }}</span>
				{{ formatPrice(product.memberSalePrice) }}
			</div>

			<quantity-selector
				:quantity="quantity"
				@change="quantity => $emit('change', { product, quantity })"
				@click.native.stop
			/>

			<div :class="$style.learnMore" @click="$emit('learn-more')">Learn More</div>
		</div>
	</card>
</template>

<script>
import Card from './card';
import QuantitySelector from './quantity-selector';
import { formatCurrency } from '../utilities/formatters';

export default {
	components: { Card, QuantitySelector },

	props: {
		product: {
			type: Object,
			required: true,
		},
		quantity: {
			type: Number,
			required: false,
		},
	},

	computed: {
		nonMemberPriceClass() { return this.product.nonMemberSalePrice && this.$style.strikethrough },
		memberPriceClass() { return this.product.memberSalePrice && this.$style.strikethrough },
		hasSamePrice() {
			const hasSameRegularPrice = this.product.nonMemberPrice === this.product.memberPrice;
			const hasNoSalePrice = !this.product.nonMemberSalePrice && !this.product.memberSalePrice;

			return hasSameRegularPrice && hasNoSalePrice;
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

	.wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.image {
		max-width: 100%;
	}

	.name,
	.price {
		@include text-body-small();
		@include text-bold();
	}

	.name {
		@include line-clamp(1);
		text-transform: capitalize;
	}

	.price {
		margin-bottom: $spacing-03;
	}

	.strikethrough {
		text-decoration: line-through;
	}

	.learnMore {
		@include _button--pill;

		display: flex;
		align-items: center;
		justify-content: center;
		width: 140px;
		height: 40px;
		border: 1px solid $gray-30;;
		cursor: pointer;
	}
</style>
