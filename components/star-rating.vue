<template>
	<div :class="$style.root">
		<div
			:class="$style.star"
			v-for="index in maxStars"
			@mouseover="setSolidStars(index)"
			@mouseleave="setSolidStars(0)"
			@click="handleSelection"
			:key="index"
		>
			<star-filled v-if="getStarValue(index) === 1" />
			<star-25 v-else-if="getStarValue(index) === 0.25" />
			<star-50 v-else-if="getStarValue(index) === 0.50" />
			<star-75 v-else-if="getStarValue(index) === 0.75" />
			<star-empty v-else/>
		</div>
	</div>
</template>

<script>
import Star25 from './icons/star-25.vue';
import Star50 from './icons/star-50.vue';
import Star75 from './icons/star-75.vue';
import StarEmpty from './icons/star-empty.vue';
import StarFilled from './icons/star-filled.vue';

export default {
	components: {
		StarEmpty,
		StarFilled,
		Star75,
		Star50,
		Star25,
	},
	props: {
		rating: {
			type: Number,
			default: 0,
		},
		isDisabled: { type: Boolean },
	},
	data() {
		return {
			maxStars: 5,
			fractionalStarPrecision: 0.25,
			hoverValue: 0,
		};
	},
	created() {
		if (this.rating > this.maxStars) throw new Error(`Rating must be less than ${this.maxStars}`);
	},
	methods: {
		setSolidStars(index) {
			if (this.isDisabled) return;
			this.hoverValue = index;
		},
		handleSelection() {
			if (this.isDisabled) return;
			this.$emit('change', this.hoverValue);
		},
		getStarValue(index) {
			// `v-for` over a range has a starting index of 1
			const difference = (this.hoverValue || this.rating) - index + 1;

			if (difference >= 1) return 1;
			if (difference > 0) return this.fractionalStar;

			return 0;
		},
	},
	computed: {
		fractionalStar() {
			return (
				Math.floor((this.rating % 1) / this.fractionalStarPrecision)
				* this.fractionalStarPrecision
			);
		},
	},
};
</script>

<style module lang="scss">
@import "../styles/variables.scss";

.root {
	display: flex;
}
.star {
	margin: 0 $spacing-01;
}
</style>
