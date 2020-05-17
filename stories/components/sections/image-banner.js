import ImageBanner from '../../../components/image-banner';

export default {
	component: ImageBanner,
	title: 'Sections / ImageBanner',
};

export function Overview() {
	return {
		components: { ImageBanner },
		template: `
			<ImageBanner :src-desktop="srcDesktop" :src-mobile="srcMobile" alt="alternative text">
				<h1>Hello World</h1>
				<h2>This is some text</h2>
				<button>learn more</button>
			</ImageBanner>
		`,
		data() {
			return {
				srcDesktop: 'https://pressed-product-images.s3-us-west-1.amazonaws.com/shopify/pages/bragg-landing/hero-image.jpg',
				srcMobile: 'https://pressed-product-images.s3-us-west-1.amazonaws.com/shopify/pages/bragg-landing/hero-image-mobile.jpg',
			};
		},
	};
}
