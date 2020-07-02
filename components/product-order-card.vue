<template>
	<card>
		<div :class="$style.wrapper">
			<img :src="product.imageUrl" :alt="`${product.name} product image`"/>
			<div :class="$style.title">{{ product.name }}</div>

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

			<quantity-selector :quantity="quantity" @updateQuantity="updateQuantity"/>
		</div>
	</card>
</template>

<script>
import Card from './card';
import QuantitySelector from './quantity-selector';

export default {
	components: { Card, QuantitySelector },

	props: {
		product: Object,
		quantity: Number,
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
			return price ? `$${price.toFixed(2)}` : null;
		},

		updateQuantity(mutation) {
			this.$emit('updateQuantity', mutation);
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

.title {
	@include text-body-small;
	margin-bottom: $spacing-04;
	text-transform: capitalize;
}

.price {
	@include text-body-small;
	margin-bottom: $spacing-05;
}

.priceStrike {
	text-decoration: line-through;
}
</style>
