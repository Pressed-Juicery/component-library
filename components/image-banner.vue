<template>
	<div :class="$style.root" :style="cssVariables">
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
		cssVariables() {
			return {
				'--desktopImage': `url(${this.srcDesktop})`,
				'--mobileImage': `url(${this.srcMobile})`,
			};
		},
	},
};
</script>

<style module lang="scss">
	@import '../styles/variables';

	.root {
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
		.root {
			background-image: var(--mobileImage);
		}
	}
</style>
