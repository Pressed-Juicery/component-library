<template>
	<div :class="$style.root">
		<div :class="$style.caratWrapper" @click="decrement()">
			<left-carat v-show="shouldShowLeftCarat" />
		</div>

		<div :class="$style.promotionContentWrapper" @click="$emit('selected', currentlyShowingPromotion)">
			<div :class="$style.name">{{ currentlyShowingPromotion.name }}</div>
			<div :class="$style.helpText">{{ currentlyShowingPromotion.helpText }}</div>
		</div>

		<div :class="$style.caratWrapper" @click="increment()">
			<right-carat v-show="shouldShowRightCarat" />
		</div>
	</div>
</template>

<script>
import LeftCarat from './icons/left-caret-white';
import RightCarat from './icons/right-caret-white';

export default {
	components: { LeftCarat, RightCarat },
	props: {
		currentOffers: {
			type: Array,
			required: true,
		},
	},
	created() {
		this.currentlyShowingPromotion = this.currentOffers[0];
	},
	data() {
		return {
			currentlyShowingPromotion: null,
		};
	},

	computed: {
		currentIndex() {
			return this.currentOffers.indexOf(this.currentlyShowingPromotion);
		},

		shouldShowLeftCarat() {
			return this.currentIndex < 0;
		},

		shouldShowRightCarat() {
			return this.currentIndex < this.currentOffers.length - 1;
		},
	},

	methods: {
		increment() {
			if (this.currentIndex < this.currentOffers.length - 1) {
				this.currentlyShowingPromotion = this.currentOffers[this.currentIndex + 1];
			}
		},

		decrement() {
			if (this.currentIndex > 0) {
				this.currentlyShowingPromotion = this.currentOffers[this.currentIndex - 1];
			}
		},
	},
};
</script>

<style lang='scss' module>
	@import '../styles/variables.scss';
	@import '../styles/mixins.scss';

	$content-padding: $spacing-05;

	.root {
		background-color: $brownish-purple;
		color: $white;
		display: grid;
		grid-template-columns: auto 1fr auto;
		align-items: center;
		border-radius: $border-radius;
	}

	.caratWrapper,
	.promotionContentWrapper {
		padding: $content-padding;
	}

	.name,
	.helpText {
		text-align: center;
		user-select: none;
	}

	.name {
		@include line-clamp(1);
	}
</style>
