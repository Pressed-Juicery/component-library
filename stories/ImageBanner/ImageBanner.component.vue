<template>
	<div class="image-banner">
		<a class="image-banner__link" :href="ctaLink">
			<img class="image-banner__image" :src="imageDesktop" alt="page banner image" />
			<img class="image-banner__image--mobile" :src="imageMobile" alt="page banner image" />
			<div class="image-banner__text-container" >
				<slot name="title"></slot>
				<slot name="subtitle"></slot>
				<div class="image-banner__button-container">
					<slot name="button"></slot>
				</div>
			</div>
		</a>
	</div>
</template>

<script>
	export default {
		name:'HeroImage',
		props: {
			imageDesktop: {
				type: String
			},
			imageMobile: {
				type: String
			},
		},
	}
</script>

<style lang="scss">
	@import '../../styles/variables';

	.image-banner {
		position: relative;
		margin: 0 auto;
		display: block;
	}

	.image-banner__image {
		display: block;
	}

	.image-banner__image--mobile {
		display: none;
	}

	.image-banner__text-container {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 100%;
		text-align: center;
		color: #000;
	}

	.image-banner__button-container {
		width: 264px;
		margin: 0 auto;
	}

	@media screen and (max-width: $tablet--max) {
		.image-banner__image {
			display: none;
		}

		.image-banner__image--mobile {
			display: block;
		}

		.image-banner__text-container {
			top: initial;
			bottom: 5%;
		}
	}
</style>
