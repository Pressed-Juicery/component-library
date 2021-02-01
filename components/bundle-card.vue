<template>
	<div :class="$style.root">
		<a :href="product.url" :class="$style.linkWrapper">
			<card :class="$style.card">
				<img :class="$style.image" :src="product.imageUrl"/>
				<div :class="$style.content">
					<div :class="$style.title" :style="{'color' : theme.color}">{{ product.name }}</div>
					<div :class="$style.description">{{ product.shortDescription }}</div>
				</div>
				<div :class="$style.bundleItems">{{ bundleItems }}</div>
			</card>
		</a>
		<div :class="$style.footer" :style="{'backgroundColor' : theme.color}">
			<span>{{ product.price }}</span>
			<button :class="$style.button" @click="$emit('cta-click', product)">Add To Cart</button>
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

				return object
					&& requiredKeys.every(key => Object.prototype.hasOwnProperty.call(object, key) && object[key]);
			},
		},

		theme: {
			type: Object,
			validator: object => {
				const requiredKeys = [
					'color',
				];

				return object
					&& requiredKeys.every(key => Object.prototype.hasOwnProperty.call(object, key) && object[key]);
			},
		},
	},

	computed: {
		bundleItems() {
			return getBundleItemSummary(this.product.bundleItems);
		},
	},
};
</script>

<style module lang="scss">
@import '../styles/variables';
@import '../styles/mixins';

$gutter: $spacing-07;

.root,
.linkWrapper {
	display: flex;
	flex-direction: column;
}

.linkWrapper,
.card {
	flex: 1 0 auto;
}

.card {
	border-bottom-right-radius: 0;
	border-bottom-left-radius: 0;
	padding: 0 $gutter;
}

.image {
	width: 100%;
	margin: $spacing-09 0 $spacing-08;
}

.title {
	@include text-heading-5;
	margin-bottom: $spacing-03;
}

.description {
	@include line-clamp(3);
	height: 66px; // 3 * line-height
	margin-bottom: $spacing-06;
}

.bundleItems {
	@include line-clamp(2);
	border-top: 2px solid $beige-dark;
	padding-top: $spacing-04;
	margin-bottom: $spacing-06;
}

.footer {
	@include text-cta;
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: $white;
	padding: $spacing-05 $gutter;
	border-bottom-right-radius: $border-radius;
	border-bottom-left-radius: $border-radius;
}

.button {
	@include button-link();
}
</style>
