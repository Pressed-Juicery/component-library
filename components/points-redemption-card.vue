<template>
	<card :class="$style.card">
		<img :class="$style.icon" :src="icon"/>
		<div :class="$style.title">{{ title }}</div>
		<div :class="$style.points">{{ points }}<span :class="$style.pointsIndicator">Pts</span></div>
	</card>
</template>

<script>
import Card from './card';

export default {
	components: { Card },

	props: {
		icon: String,
		title: String,
		points: String,
	},

	methods: {
		handleChange() {
			const { title, points, quantity } = this;

			this.$emit('change', { title, points, quantity });
		},
	},
};
</script>

<style module lang="scss" >
	@import '../styles/mixins';

	.card {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: $spacing-07 $spacing-06;
	}

	.icon {
		height: $spacing-09;
		margin-bottom: $spacing-03;
	}

	.title {
		margin-bottom: $spacing-02;
		text-align: center;
	}

	.points {
		@include text-heading-6;
	}

	.pointsIndicator {
		margin-left: $spacing-02;
	}

</style>
