import '../../styles/buttons.scss';
import ImageBanner from './ImageBanner.component';

export default {
	component: ImageBanner,
	title: 'ImageBanner',
};

export function Banner1() {
	return {
		components: { ImageBanner },
		template: `
			<ImageBanner :imageDesktop="imageDesktop" :imageMobile="imageMobile">
				<template v-slot:title>
					<h1>This is the title</h1>
				</template>
				<template v-slot:subtitle>
					<h3>This is the subtitle</h3>
				</template>
				<template v-slot:button>
					<button>Shop Now</button>
				</template>
			</ImageBanner>
		`,
		data() {
			return {
				imageDesktop: 'https://pressed-product-images.s3-us-west-1.amazonaws.com/shopify/pages/bragg-landing/hero-image.jpg',
				imageMobile: 'https://pressed-product-images.s3-us-west-1.amazonaws.com/shopify/pages/bragg-landing/hero-image-mobile.jpg',
			};
		},
	};
}
