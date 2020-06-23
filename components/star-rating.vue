<template>
	<div :class="$style.root">
		<div
			:class="$style.stars" v-for="(star, index) in maxStars"
			:key="index"
			@mouseover="setCurrentStar($event, index)"
			@click="handleRatingSelection"
		>
			<star-filled v-if="index < currentIndex || index <= currentIndex && starPosition >= (18 * .75)"/>
			<star-25 v-else-if="index == currentIndex && starPosition <= (18 * .25) && starPosition != 0"/>
			<star-50 v-else-if="index == currentIndex && starPosition <= (18 * .50) && starPosition != 0"/>
			<star-75 v-else-if="index == currentIndex && starPosition <= (18 * .75) && starPosition != 0"/>
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
	props: {
		rating: {
			type: Number,
			required: true,
		},
		disabled: { type: Boolean },
	},
	components: {
		StarEmpty,
		StarFilled,
		Star75,
		Star50,
		Star25,
	},
	data() {
		return {
			maxStars: 5,
			currentIndex: Math.floor(this.rating),
			starPosition: Math.floor((this.rating % 1) * 18),
		};
	},
	methods: {
		setCurrentStar(event, index) {
			if (!this.disabled) {
				this.currentIndex = index;
				if (event.offsetX >= 0) {
					this.starPosition = event.offsetX;
				}
			}
		},
		handleRatingSelection() {
			const rating = this.currentIndex + (Math.round((this.starPosition / 18) * 4) / 4);

			this.$emit('starRating', rating > 5 ? 5 : rating);
		},
	},
};
</script>

<style module lang="scss">
.root {
	display: flex;
}

.stars {
	padding: 0 2px;
}
</style>
