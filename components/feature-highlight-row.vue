<template>
	<div class="feature-highlight-row">
		<feature-highlight
			v-for="(feature, index) in features"
			:key="index"
			:icon="feature.icon"
			:title="feature.title"
			:description="feature.description"
		/>
	</div>
</template>

<script>
import FeatureHighlight from './feature-highlight';

export default {
	components: { FeatureHighlight },
	props: {
		features: Array,
	},
};
</script>

<style scoped lang="scss">
	@import '../styles/variables';

	.feature-highlight-row {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-gap: $spacing-10;

		@media (max-width: $max-width-tablet) {
			grid-template-columns: 1fr;
			grid-gap: $spacing-07;
		}
	}
</style>
