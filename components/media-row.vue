<template>
	<div class="media-row">
		<div class="media-row__content-wrapper">
			<div>
				<img v-if="icon" class="media-row__icon" :src="icon" />
				<div class="media-row__title">{{ title }}</div>
				<div class="media-row__text" v-html="description" />
			</div>
		</div>
		<img class="media-row__image" :src="img" :alt="alt" />
	</div>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			required: true,
		},
		img: {
			type: String,
			required: true,
		},
		alt: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		icon: String,
	},
};
</script>

<style lang="scss">
@import '../styles/variables';
@import '../styles/mixins';

.media-row {
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: $spacing-10;
	padding: $spacing-09;
}

.media-row__content-wrapper {
	display: flex;
	align-items: center;
}

.media-row__icon {
	margin-bottom: $spacing-07;
}

.media-row__title {
	@include text-heading-4;
	margin-bottom: $spacing-03;
}

.media-row__image {
	width: 100%;
}

@media (max-width: $max-width-tablet) {
	.media-row {
		grid-template-columns: 1fr;
		grid-gap: $spacing-07;
	}
}
</style>
