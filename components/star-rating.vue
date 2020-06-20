<template>
	<div :class="$style.starOuter" @mousemove="starPercentage" @click="setStarRating">
		<div :class="$style.starInner" :style="{width: dynamicWidth + '%'}"></div>
	</div>
</template>

<script>
	export default {
		props: {
			rating: {
				type: Number,
				required: true,
			},
			disabled: { type: Boolean },
		},
		data() {
			return {
				dynamicWidth: 0,
				fractionalStarPrecision: 10,
			};
		},
		methods: {
			starPercentage(e){
				if (!this.disabled) {
					this.dynamicWidth = Math.ceil(e.offsetX / this.fractionalStarPrecision) * this.fractionalStarPrecision
				}
			},
			setStarRating(){
				if (!this.disabled) {
					const starRating = () => (this.dynamicWidth / this.fractionalStarPrecision) / 2
					const value = starRating() > 5 ? 5 : starRating()
					this.$emit('rating', value)
					console.log(value)
				}
			}
		},
		mounted() {
			if (this.rating <= 5) {
				this.dynamicWidth = this.rating * this.fractionalStarPrecision * 2;
			} else {
				throw new Error(`Rating must be less than 5`)
			}
		}
	}
</script>

<style module lang="scss">
.starOuter {
	display: inline-block;
	position: relative;
}

.starOuter::before {
	content: "\2606  \2606  \2606  \2606  \2606";
}

.starInner {
	position: absolute;
	top: 0;
	left: 0;
	white-space: nowrap;
	overflow: hidden;
	max-width: 100%;
}

.starInner::before {
	content: "\2605  \2605  \2605  \2605  \2605";
}
</style>