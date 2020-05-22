<template>
	<div>
		<image-banner v-bind="config.imageBannerSection" />
		<highlight-section :config="config.highlightSection"/>
		<bundle-card-section :class="$style.bundleCardSection" :config="config.bundleCardSection"/>
	</div>
</template>

<script>
import BundleCardSection from './bundle-card-section';
import HighlightSection from './highlight-section';
import ImageBanner from './image-banner';

export default {
	components: { ImageBanner, BundleCardSection, HighlightSection },
	props: {
		config: {
			type: Object,
			required: true,
		},
	},
};
</script>

<style module lang="scss">
	@import '../styles/variables';

	.bundleCardSection {
		margin: $spacing-12 0;
	}

	@media (max-width: $max-width-small) {
		.bundleCardSection {
			margin: $spacing-10 0;
		}
	}
</style>
