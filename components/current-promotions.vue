<template>
	<div :class="$style.root">
		<div
			tabindex="0"
		>
			<left-carat />
		</div>

		<div
			tabindex="0"
		>
		</div>

		<div
			tabindex="0"
		>
			<right-carat />
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

	.name,
	.buttonWrapperLeft,
	.buttonWrapperRight {
		cursor: pointer;
	}

	.root {
		position: relative;
		background-color: $brownish-purple;
		color: $white;
		padding: $spacing-05;
		display: grid;
		place-items: center;
		border-radius: $border-radius;
	}

	.name {
		text-align: center;
	}

	@media screen and (max-width: $max-width-extra-small) {
		.name {
			max-width: 25ch;
		}
	}

	.helpText {
		@include text-body-small();
	}

	.buttonWrapperLeft,
	.buttonWrapperRight {
		position: absolute;
		top: 0;
		padding: $spacing-06 $spacing-05;
	}

	.buttonWrapperLeft {
		left: 0;
	}

	.buttonWrapperRight {
		right: 0;
	}
</style>
