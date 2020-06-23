<template>
	<div :class="$style.root">
		<div :class="$style.stars" v-for="(star, index) in maxStars" :key="index" @mouseover="setCurrentStar($event, index)">
			<star-filled v-if="index < currentIndex || index <= currentIndex && starPosition >= (18 * .75)"/>
			<star-25 v-else-if="index == currentIndex && starPosition <= (18 * .25) && starPosition != 0"/>
			<star-50 v-else-if="index == currentIndex && starPosition <= (18 * .50) && starPosition != 0"/>
			<star-75 v-else-if="index == currentIndex && starPosition <= (18 * .75) && starPosition != 0"/>
			<star-empty v-else/>
		</div>
	</div>
</template>

<script>
	import StarEmpty from './icons/star-empty.vue';
	import StarFilled from './icons/star-filled.vue';
	import Star75 from './icons/star-75.vue';
	import Star50 from './icons/star-50.vue';
	import Star25 from './icons/star-25.vue';

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
				currentIndex: this.rating,
				starPosition: 0,
			}
		},
		methods: {
			setCurrentStar(event, index) {
				this.currentIndex = index
				this.starPosition = event.offsetX
			},
		}
	}
</script>

<style module lang="scss">
.root {
	display: flex;
}

.stars {
	padding: 0px 3px;
}
</style>