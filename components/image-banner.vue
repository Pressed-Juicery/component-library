<template>
	<div class="image-background" :style="cssVars">
		<span role="img" :aria-label="alt"></span>
		<div><slot /></div>
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
		cssVars() {
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
	}
</style>
