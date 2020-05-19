<template>
	<content-wrapper :is-small="true">
		<div :class="$style.title">{{ config.title }}</div>
		<div :class="$style.description">{{ config.description }}</div>
		<bundle-card-grid :cards="config.cards" @cta-click="product => $emit('cta-click', product)"/>
	</content-wrapper>
</template>

<script>
import BundleCardGrid from './bundle-card-grid';
import ContentWrapper from './content-wrapper';

export default {
	components: { BundleCardGrid, ContentWrapper },
	props: {
		config: {
			type: Object,
			required: true,
		},
	},
};
</script>

<style module lang="scss">
	@import '../styles/mixins';
	@import '../styles/variables';

	.title,
	.description {
		max-width: 504px;
		text-align: center;
		margin: 0 auto;
	}

	.title {
		@include text-heading-4();
		margin-bottom: $spacing-02;
	}

	.description {
		margin-bottom: $spacing-09;
	}
</style>
