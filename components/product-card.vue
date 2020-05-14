<template>
	<div class="product-card">
		<a :href="product.url" class="product-card__link-wrapper">
			<card class="product-card__card">
				<img class="product-card__image" :src="product.imageUrl"/>
				<div class="product-card__content">
					<div class="product-card__title" :style="{'color' : theme.color}">{{ product.name }}</div>
					<p class="product-card__description" v-html="product.shortDescription"></p>
				</div>
				<p class="product-card__secondary-content">{{ bundleItems }}</p>
			</card>
		</a>
		<div class="product-card__footer" :style="{'backgroundColor' : theme.color}">
			<span class="product-card__price" v-html="product.price"></span>
			<span class="product-card__cta">
				<a v-if="product.ctaText" :href="product.ctaLink">{{ product.ctaText }}</a>
				<span v-else @click="$emit('cta-click')">Add To Cart</span>
			</span>
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

<style lang="scss">
@import '../styles/variables';
@import '../styles/mixins';

.product-card {
	max-width: calc(25% - 1em);
	margin: 0 $spacing-03 $spacing-04;
}

.product-card a {
	color: inherit;
	text-decoration: none;
}

.product-card .product-card__card {
	border-bottom-right-radius: 0;
	border-bottom-left-radius: 0;
	padding: $spacing-07 $spacing-06;
	min-height: 365px;
}

.product-card__image {
	width: 100%;
	margin-bottom: $spacing-03;
}

.product-card__content {
	border-bottom: 2px solid #dad5cf;
	margin-bottom: $spacing-05;
}

.product-card__title {
	@include text-heading-5;
	margin-bottom: $spacing-03;
}

.product-card__description {
	@include text-body;
	display: -webkit-box;
	-webkit-line-clamp: 3;
	-webkit-box-orient: vertical;
	overflow: hidden;
}

.product-card__price {
	@include text-body;
}

.product-card__cta {
	@include text-cta;
	text-decoration: underline;
	cursor: pointer;
}

.product-card__footer {
	display: flex;
	align-items: center;
	justify-content: space-between;
	color: $white;
	padding: $spacing-05 $spacing-06;
	border-bottom-right-radius: $border-radius;
	border-bottom-left-radius: $border-radius;
}

@media (max-width: $max-width-laptop-large){
	.product-card {
		max-width: calc(33.3% - 1em);
	}
}

@media (max-width: $max-width-laptop){
	.product-card {
		max-width: calc(50% - 1em);
	}
}

@media (max-width: $max-width-tablet){
	.product-card {
		max-width: calc(100% - 1em);
	}
}
</style>
