<template>
	<div :class="$style.root">
		<div :class="$style.caratWrapper" @click="decrement()">
			<left-carat v-show="showLeftCarat" />
		</div>

		<div :class="$style.promotionContentWrapper" @click="$emit('selected', currentlyShowingPromotion)">
			<div :class="$style.name">{{ currentlyShowingPromotion.name }}</div>
			<div :class="$style.helpText">{{ currentlyShowingPromotion.helpText }}</div>
		</div>

		<div :class="$style.caratWrapper" @click="increment()">
			<right-carat v-show="showRightCarat" />
		</div>
	</div>
</template>

<script>
import LeftCarat from './icons/left-caret-white';
import RightCarat from './icons/right-caret-white';

export default {
	props: {
		currentOffers: {
			type: Array,
			required: true,
		},
	},
	components: { LeftCarat, RightCarat },
	data() {
		return {
			currentlyShowingPromotion: null,
			showLeftCarat: false,
			showRightCarat: true,
		};
	},

	computed: {
		currentIndex() {
			return this.currentOffers.indexOf(this.currentlyShowingPromotion);
		},
	},

	methods: {
		increment() {
			if (this.currentIndex < this.currentOffers.length - 1) {
				this.currentlyShowingPromotion = this.currentOffers[this.currentIndex + 1];
			}

			this.shouldShowCarats();
		},

		decrement() {
			if (this.currentIndex > 0) {
				this.currentlyShowingPromotion = this.currentOffers[this.currentIndex - 1];
			}

			this.shouldShowCarats();
		},

		shouldShowCarats() {
			this.showLeftCarat = this.currentIndex !== 0;
			this.showRightCarat = this.currentIndex < this.currentOffers.length - 1;
		},
	},

	created() {
		this.currentlyShowingPromotion = this.currentOffers[0];
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
