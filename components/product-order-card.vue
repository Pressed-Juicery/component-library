<template>

	<card class="product-order-card">
		<div class="product-order-card__wrapper">
			<img class="product-order-card__img" :src="product.img"/>
			<div class="product-order-card__title">{{ product.title }}</div>

			<div v-if="displaySamePrice" class="product-order-card__price">
				<span>{{  displaySamePrice }}</span>
			</div>

			<div v-else class="product-order-card__price">
				<span :class="['product-order-card__price', {'product-order-card__price--strike' : product.nonMemberDiscountPrice }]">{{ formatPrice(product.nonMemberPrice) }}</span> <!-- eslint-disable-line -->
				<span>{{ formatPrice(product.nonMemberDiscountPrice) }}</span>
				<span> | </span>
				<span :class="['product-order-card__price', {'product-order-card__price--strike' : product.memberDiscountPrice }]">{{ formatPrice(product.memberPrice) }}</span> <!-- eslint-disable-line -->
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
			return price ? price.toFixed(2) : null;
		},
		updateQuantity(mutation) {
			this.$emit('updateQuantity', mutation);
		},
	},
};
</script>

<style lang="scss">
@import '../styles/variables';

.product-order-card__wrapper {
	display: flex;
	flex-direction: column;
	align-items: center;
}

.product-order-card__title {
	font-size: $font-size-05;
	margin-bottom: $spacing-04;
	text-transform: capitalize;
}

.product-order-card__price {
	font-size: $font-size-05;
	margin-bottom: $spacing-05;
}

.product-order-card__price--strike {
	text-decoration: line-through;
}
</style>
