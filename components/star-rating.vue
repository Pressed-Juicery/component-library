<template>
	<div :class="$style.root">
		<div
			:class="$style.star"
			v-for="index in wholeStars"
			@mouseover="setSolidStars(index)"
			@mouseleave="setSolidStars(0)"
			@click="handleSelection"
			:key="`${index}-wholeStar`"
		>
			<star-filled />
		</div>
		<div
			v-if="!hoverValue && fractionalStar"
			:class="$style.star"
			@mouseover="setFractionalStars"
		>
			<star-25 v-if="fractionalStar === 0.25"/>
			<star-50 v-else-if="fractionalStar === 0.50"/>
			<star-75 v-else-if="fractionalStar === 0.75"/>
		</div>
		<div
			:class="$style.star"
			v-for="index in emptyStars"
			@mouseover="setEmptyStars(index)"
			:key="`${index}-emptyStar`"
		>
			<star-empty/>
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
		setEmptyStars(index) {
			if (this.isDisabled) return;
			this.hoverValue = this.wholeStars + Math.ceil(this.fractionalStar) + index;
		},
		setFractionalStars() {
			if (this.isDisabled) return;
			this.hoverValue = this.wholeStars + 1;
		},
		handleSelection() {
			if (this.isDisabled) return;
			this.$emit('change', this.hoverValue);
		},
	},
	computed: {
		wholeStars() {
			if (this.isDisabled) return Math.floor(this.rating);

			return Math.floor(this.hoverValue || this.rating);
		},
		fractionalStar() {
			if (this.hoverValue) return 0;

			return (
				Math.floor((this.rating % 1) / this.fractionalStarPrecision)
				* this.fractionalStarPrecision
			);
		},
		emptyStars() {
			return (
				this.maxStars - this.wholeStars - Math.ceil(this.fractionalStar)
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
