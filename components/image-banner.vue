<template>
	<div :class="$style.root">
		<img :class="$style.smallImage" :src="small.image" :alt="altText" />
		<img :class="$style.mediumImage" :src="(medium && medium.image) || large.image" :alt="altText" />
		<img :class="$style.largeImage" :src="large.image" :alt="altText" />

		<div :class="$style.outerWrapper" :style="outerWrapperVars">
			<div :class="$style.innerWrapper" :style="innerWrapperVars">
				<div :class="$style.heading" v-html="heading"></div>
				<a :class="[$style.link, 'button', linkClass]" :href="linkPath">{{ linkText }}</a>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		heading: { type: String, required: true },
		linkText: { type: String, required: true },
		linkPath: { type: String, required: true },
		linkStyle: { type: String, required: false },
		altText: { type: String, required: true },
		small: { type: Object, required: true },
		medium: { type: Object, required: false },
		large: { type: Object, required: true },
	},
	computed: {

		// eslint-disable-next-line complexity
		outerWrapperVars() {
			const defaultTop = '50%';
			const defaultTransform = 'translateY(-50%)';

			const mediumTextTop = (this.medium && this.medium.textTop) || this.large.textTop;

			return {
				'--small-text-top': this.small.textTop || defaultTop,
				'--medium-text-top': mediumTextTop || defaultTop,
				'--large-text-top': this.large.textTop || defaultTop,
				'--small-text-transform': this.small.textTop ? 'none' : defaultTransform,
				'--medium-text-transform': mediumTextTop ? 'none' : defaultTransform,
				'--large-text-transform': this.large.textTop ? 'none' : defaultTransform,
			};
		},

		// eslint-disable-next-line complexity
		innerWrapperVars() {
			const defaultWidth = '80%';
			const mediumTextMaxWidth = (this.medium && this.medium.textMaxWidth) || this.large.textMaxWidth;

			return {
				'--small-text-max-width': this.small.textMaxWidth || defaultWidth,
				'--medium-text-max-width': mediumTextMaxWidth || defaultWidth,
				'--large-text-max-width': this.large.textMaxWidth || defaultWidth,
			};
		},

		linkClass() {
			if (this.linkStyle !== 'button') return 'button--link';

			return '';
		},
	},
};
</script>

<style module lang="scss">
	@import '../styles/variables';
	@import '../styles/mixins';

	.root {
		position: relative;
	}

	.outerWrapper {
		position: absolute;
		width: 100%;
		top: var(--large-text-top);
		transform: var(--large-text-transform);
	}

	.innerWrapper {
		text-align: center;
		max-width: var(--large-text-max-width);
		margin: 0 auto;
	}

	.smallImage,
	.mediumImage,
	.largeImage {
		display: block;
		width: 100%;
		height: 680px;
		object-fit: cover;
	}

	.smallImage,
	.mediumImage {
		display: none
	}

	.smallImage {
		height: 512px;
	}

	.heading {
		@include text-heading-2;
	}

	.link {
		margin-top: $spacing-06;
	}

	// Medium Image
	@media (max-width: $max-width-medium) {
		.mediumImage {
			display: block;
		}

		.largeImage {
			display: none;
		}

		.outerWrapper {
			top: var(--medium-text-top);
			transform: var(--medium-text-transform);
		}

		.innerWrapper {
			max-width: var(--medium-text-max-width);
		}
	}

	// Small Image
	@media (max-width: $max-width-small) {
		.smallImage {
			display: block;
		}

		.mediumImage,
		.largeImage {
			display: none;
		}

		.outerWrapper {
			top: var(--small-text-top);
			transform: var(--small-text-transform);
		}

		.innerWrapper {
			max-width: var(--small-text-max-width);
		}

		.heading {
			@include text-heading-3;
		}
	}
</style>
