<template>
	<card>
		<div :class="$style.wrapper">
			<img :class="$style.productImage" :src="product.imageUrl" :alt="`${product.name} product image`"/>
			<div :class="$style.name">{{ product.name }}</div>

			<div v-if="displaySamePrice" :class="$style.price">
				<span>{{ displaySamePrice }}</span>
			</div>

			<div v-else :class="$style.price">
				<span :class="[$style.price, {[$style.priceStrike] : product.nonMemberDiscountPrice }]">{{ formatPrice(product.nonMemberPrice) }}</span> <!-- eslint-disable-line -->
				<span>{{ formatPrice(product.nonMemberDiscountPrice) }}</span>
				<span> | </span>
				<span :class="[$style.price, {[$style.priceStrike] : product.memberDiscountPrice }]">{{ formatPrice(product.memberPrice) }}</span> <!-- eslint-disable-line -->
				<span>{{ formatPrice(product.memberDiscountPrice) }}</span>
			</div>

			<quantity-selector :quantity="quantity" @change="quantity => $emit('change', { product, quantity })"/>
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
		displaySamePrice() {
			const arePricesTheSame = this.getPriceByMemberShip('nonMember') === this.getPriceByMemberShip('member');

			return arePricesTheSame ? this.formatPrice(this.getPriceByMemberShip('member')) : null;
		},
	},

	methods: {
		getPriceByMemberShip(membership) {
			return this.hasDiscount(membership)
				? this.product[`${membership}DiscountPrice`]
				: this.product[`${membership}Price`];
		},

		hasDiscount(memberType) {
			const key = `${memberType}DiscountPrice`;

			return Object.prototype.hasOwnProperty.call(this.product, key) && this.product[key];
		},

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

.productImage {
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

.priceStrike {
	text-decoration: line-through;
}
</style>
