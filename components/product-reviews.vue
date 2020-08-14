<template>
	<div :class="$style.root">
		<div :class="$style.productInfo">
			<div :class="$style.rating">
				<star-rating :rating="customerRating" :readOnly="true" />
				<div :class="$style.productRatings"> {{ customerRating }}   |   {{ reviewCount }} reviews</div>
			</div>
			<button :class="$style.addReview" v-if="verifiedPurchase" @click="$emit('input')">Add a Review</button>
		</div>
		<div :class="$style.review" v-for="(review, index) in reviews" :key="index">
			<star-rating :class="$style.stars" :rating="review.rating" />
			<div :class="$style.title">{{ review.title }}</div>
			<div :class="$style.body">{{ review.body }}</div>
			<div :class="$style.author">{{ review.name }} on {{ review.createdAt | date }}</div>
		</div>
	</div>
</template>

<script>
import StarRating from './star-rating.vue';
import { formatMediumDate } from '../utilities/formatters';

export default {
	components: { StarRating },
	props: {
		reviews: {
			type: Array,
			required: true,
		},
		verifiedPurchase: {
			type: Boolean,
			required: true,
		},
		customerRating: {
			type: Number,
			required: true,
		},
		reviewCount: {
			type: Number,
			required: true,
		},
	},
	filters: {
		date(value) {
			return formatMediumDate(value);
		},
	},
};
</script>

<style lang="scss" module>
	@import '../styles/variables.scss';
	@import '../styles/mixins.scss';

	.review,
	.productInfo {
		border-bottom: $border-light;
	}

	.rating,
	.addReview {
		margin-bottom: $spacing-06;
	}

	.review {
		padding: $spacing-06 0;
	}

	.rating {
		display: inline-flex;
		align-items: center;
		@include text-cta-small();
	}

	.productRatings {
		margin-left: $spacing-04;
	}

	.addReview {
		width: 100%;
		@include button-secondary();
	}

	.stars,
	.title {
		margin-bottom: $spacing-03;
	}

	.title {
		@include text-bolder();
	}

	.body {
		margin-bottom: $spacing-07;
	}

	.author {
		@include text-body-small();
	}
</style>
