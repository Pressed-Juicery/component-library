<template>
	<div>
		<div :class="$style.guide" v-for="(cleanseItem, index) in cleanseGuide" :key="index">
			<div :class="$style.title">{{ cleanseItem.timeOfDay }} | {{ cleanseItem.product.name }}</div>
			<div :class="$style.content">{{ cleanseItem.product.description }}</div>
			<a :class="$style.learnMore" :href="cleanseItem.product.url">Learn More</a>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		cleanseGuide: {
			type: Array,
			required: true,
		},
	},
};
</script>

<style module lang="scss">
	@import "../styles/mixins.scss";
	@import "../styles/variables.scss";

	.guide {
		margin-bottom: $spacing-06;
	}

	.title {
		@include text-cta-small();
		margin-bottom: $spacing-03;
	}

	.content {
		margin-bottom: $spacing-02;
	}

	.learnMore {
		border-bottom: 1px solid black;
		@include text-body-small();
	}
</style>
