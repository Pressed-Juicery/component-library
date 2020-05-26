<template>
	<content-wrapper :class="$style.root" :is-small="true" v-bind="config.contentWrapper">
		<media-row :class="$style.mediaRow" :style="{ borderColor: config.separatorColor }" v-bind="config.mediaRow" />
		<feature-highlight-row :class="$style.featureHighlightRow" v-bind="config.featureHighlight" />
	</content-wrapper>
</template>

<script>
import ContentWrapper from './content-wrapper';
import FeatureHighlightRow from './feature-highlight-row';
import MediaRow from './media-row';

export default {
	components: { ContentWrapper, FeatureHighlightRow, MediaRow },
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

	$separator-margin: $spacing-09;

	.root {
		padding: $spacing-11 0;
	}

	.mediaRow {
		padding-bottom: $separator-margin;
		border-bottom: 1px solid transparent;
	}

	.featureHighlightRow {
		margin-top: $separator-margin;
	}
</style>
