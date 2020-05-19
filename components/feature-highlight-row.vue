<template>
	<div>
		<div v-if="title" :class="$style.title">{{ title }}</div>

		<div :class="$style.features">
			<feature-highlight
				v-for="(feature, index) in features"
				:key="index"
				:icon="feature.icon"
				:title="feature.title"
				:description="feature.description"
			/>
		</div>
	</div>
</template>

<script>
import FeatureHighlight from './feature-highlight';

export default {
	components: { FeatureHighlight },
	props: {
		features: Array,
		title: String,
	},
};
</script>

<style module lang="scss">
	@import '../styles/mixins';
	@import '../styles/variables';

	.title {
		@include text-cta-small();
		margin-bottom: $spacing-07;
	}

	.features {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-gap: $spacing-10;

		@media (max-width: $max-width-tablet) {
			grid-template-columns: 1fr;
			grid-gap: $spacing-07;
		}
	}
</style>
