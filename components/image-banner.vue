<template>
	<div class="image-background" :style="cssVariables">
		<span role="img" :aria-label="alt"></span>
		<div class="image-background__content">
			<slot />
		</div>
	</div>
</template>

<script>
export default {
	props: {
		srcDesktop: String,
		srcMobile: String,
		alt: String,
	},
	computed: {
		cssVariables() {
			return {
				'--desktopImage': `url(${this.srcDesktop})`,
				'--mobileImage': `url(${this.srcMobile})`,
			};
		},
	},
};
</script>

<style scoped lang="scss">
	@import '../styles/variables';

	.image-background {
		position: relative;
		height: 100vh;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
		background-image: var(--desktopImage);
	}

	@media (max-width: $max-width-tablet) {
		.image-background {
			background-image: var(--mobileImage);
		}

		.image-background__content {
			position: absolute;
			top: 15%;
			left: 50%;
			transform: translate(-50%)
		}
	}
</style>
