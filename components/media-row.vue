<template>
	<div class="media-row">
		<div class="media-row__content-wrapper">
			<div class="media-row__content">
				<img v-if="icon" class="media-row__icon" :src="icon" />
				<p class="media-row__title">{{ title }}</p>
				<p class="media-row__text">
					<slot />
				</p>
			</div>
		</div>
		<div class="media-row__image" :style="{'background-image': 'url(' + img + ')'}">
			<span role="img" :aria-label="alt"></span>
		</div>
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
		icon: String,
	},
};
</script>

<style lang="scss">
@import '../styles/variables';
@import '../styles/mixins';

.media-row {
	display: flex;
	flex-wrap: wrap;
	padding: $spacing-06;
}

.media-row__content-wrapper {
	flex: 1 1 350px;
	display: flex;
	align-items: center;
}

.media-row__content {
	margin-right: $spacing-09;
}

.media-row__icon {
	margin-bottom: $spacing-04;
}

.media-row__title {
	@include text-heading-4;
	margin-bottom: $spacing-02;
}

.media-row__image {
	height: 400px;
	flex: 1 1 350px;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
}

@media (max-width: $max-width-tablet) {
	.media-row__content {
		margin-top: 0;
		margin-right: 0;
	}

	.media-row__image {
		height: 350px;
	}
}
</style>
