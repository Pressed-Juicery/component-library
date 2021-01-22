<template>
	<div v-if="currentOffers && currentOffers.length" :class="$style.root">
		<div :class="$style.caratWrapper" @click="decrement()">
			<left-carat v-show="shouldShowLeftCarat" />
		</div>

		<div :class="$style.promotionContentWrapper" @click="$emit('selected', selectedOffer)">
			<div :class="$style.name">{{ selectedOffer.name }}</div>
			<div :class="$style.helpText">{{ selectedOffer.helpText }}</div>
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

	data() {
		return {
			currentIndex: 0,
		};
	},

	computed: {
		shouldShowLeftCarat() {
			return this.currentIndex > 0;
		},

		shouldShowRightCarat() {
			return this.currentIndex < this.currentOffers.length - 1;
		},

		selectedOffer() {
			return this.currentOffers[this.currentIndex];
		},
	},

	methods: {
		increment() {
			if (this.currentIndex < this.currentOffers.length - 1) this.currentIndex++;
		},

		decrement() {
			if (this.currentIndex > 0) this.currentIndex--;
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
