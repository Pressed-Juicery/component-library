<template>
	<div>
		<star-rating :class="$style.stars" :rating="review.rating"></star-rating>
		<div :class="$style.title">{{ review.title }}</div>
		<div :class="$style.body">{{ review.body }}</div>
		<div :class="$style.info">{{ review.name }} on {{ review.createdAt }}</div>
	</div>
</template>

<script>
import StarRating from './star-rating.vue';

export default {
	components: { StarRating },
	props: {
		review: {
			type: Object,
			required: true,
		},
	}
}
</script>

<style lang="scss" module>
@import '../styles/variables.scss';
@import '../styles/mixins.scss';

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

.info {
	@include text-body-small();
}
</style>
