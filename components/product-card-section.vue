<template>
	<content-wrapper :is-small="true">
		<div :class="$style.title">{{ config.title }}</div>
		<div :class="$style.description">{{ config.description }}</div>
		<product-card-grid :cards="config.cards" />
	</content-wrapper>
</template>

<script>
import ContentWrapper from './content-wrapper';
import ProductCardGrid from './product-card-grid';

export default {
	components: { ProductCardGrid, ContentWrapper },
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
