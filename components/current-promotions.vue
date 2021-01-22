<template>
	<div :class="$style.root">
		<div
			:class="$style.buttonWrapper"
			@click="decrement()"
			@keyup.enter="decrement()"
			tabindex="0"
		>
			<left-carat v-show="showLeftCarat" />
		</div>

		<div
			:class="$style.clickArea"
			@click="$emit('selected', currentlyShowingPromotion)"
			@keyup.enter="$emit('selected', currentlyShowingPromotion)"
			tabindex="0"
		>
			<div :class="$style.name">{{ currentlyShowingPromotion.name }}</div>
			<div :class="$style.helpText">{{ currentlyShowingPromotion.helpText }}</div>
		</div>

		<div
			:class="$style.buttonWrapper"
			@click="increment()"
			@keyup.enter="increment()"
			tabindex="0"
		>
			<right-carat v-show="showRightCarat" />
		</div>
	</div>
</template>

<script>
import LeftCarat from './icons/left-caret-white';
import RightCarat from './icons/right-caret-white';

export default {
	props: {
		currentPromotions: {
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
			return this.currentPromotions.indexOf(this.currentlyShowingPromotion);
		},
	},

	methods: {
		increment() {
			if (this.currentIndex < this.currentPromotions.length - 1) {
				this.currentlyShowingPromotion = this.currentPromotions[this.currentIndex + 1];
			}

			this.shouldShowCarats();
		},

		decrement() {
			if (this.currentIndex > 0) {
				this.currentlyShowingPromotion = this.currentPromotions[this.currentIndex - 1];
			}

			this.shouldShowCarats();
		},

		shouldShowCarats() {
			this.showLeftCarat = this.currentIndex !== 0;
			this.showRightCarat = this.currentIndex < this.currentPromotions.length - 1;
		},
	},
	created() {
		this.currentlyShowingPromotion = this.currentPromotions[0];
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

	.clickArea {
		padding: $content-padding;
	}

	.name,
	.helpText {
		text-align: center;
	}

	.buttonWrapper {
		padding: $content-padding;
	}
</style>
