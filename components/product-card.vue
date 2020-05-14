<template>
	<div class="product-card">
		<a :href="product.url" class="product-card__link-wrapper">
			<card class="product-card__card">
				<img class="product-card__image" :src="product.imageUrl"/>
				<div class="product-card__content">
					<div class="product-card__title" :style="{'color' : theme.color}">{{ product.name }}</div>
					<div class="product-card__description">{{ product.shortDescription }}</div>
				</div>
				<div class="product-card__bundle-items">{{ bundleItems }}</div>
			</card>
		</a>
		<div class="product-card__footer" :style="{'backgroundColor' : theme.color}">
			<span>{{ product.price }}</span>
			<button class="button--link" @click="$emit('cta-click')">Add To Cart</button>
		</div>
	</div>
</template>

<script>
import Card from './card';
import { getBundleItemSummary } from '../utilities/get-bundle-item-summary';

export default {
	components: { Card },

	props: {
		product: {
			type: Object,
			validator: object => {
				const requiredKeys = [
					'imageUrl',
					'name',
					'url',
					'shortDescription',
					'price',
				];

				return requiredKeys.every(key => Object.prototype.hasOwnProperty.call(object, key) && object[key]);
			},
		},

		theme: {
			type: Object,
			validator: object => {
				const requiredKeys = [
					'color'
				];

				return requiredKeys.every(key => Object.prototype.hasOwnProperty.call(object, key) && object[key]);
			}
		},
	},

	computed: {
		bundleItems() {
			return getBundleItemSummary(this.product.bundleItems);
		}
	}
};
</script>

<style scoped lang="scss">
@import '../styles/variables';
@import '../styles/mixins';

$gutter: $spacing-07;

.product-card,
.product-card__link-wrapper {
	display: flex;
	flex-direction: column;
}

.product-card__link-wrapper,
.product-card__card {
	flex: 1 0 auto;
}

.product-card__card {
	border-bottom-right-radius: 0;
	border-bottom-left-radius: 0;
	padding: 0 $gutter;
}

.product-card__image {
	width: 100%;
	margin: $spacing-09 0 $spacing-08;
}

.product-card__title {
	@include text-heading-5;
	margin-bottom: $spacing-03;
}

.product-card__description {
	@include line-clamp(3);
	height: 66px; // 3 * line-height
	margin-bottom: $spacing-06;
}

.product-card__bundle-items {
	@include line-clamp(2);
	border-top: 2px solid $beige-dark;
	padding-top: $spacing-04;
	margin-bottom: $spacing-06;
}

.product-card__footer {
	@include text-cta;
	display: flex;
	justify-content: space-between;
	color: $white;
	padding: $spacing-05 $gutter;
	border-bottom-right-radius: $border-radius;
	border-bottom-left-radius: $border-radius;
}
</style>
