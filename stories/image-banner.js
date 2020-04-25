import '../styles/buttons.scss';
import ImageBanner from '../components/image-banner';

export default {
	component: ImageBanner,
	title: 'ImageBanner',
};

export function Banner1() {
	return {
		components: { ImageBanner },
		template: `
			<ImageBanner :src-desktop="srcDesktop" :src-mobile="srcMobile" alt="alternative text">
				<div>
					<h1>Hello World</h1>
					<h2>This is some text</h2>
					<button>learn more</button>
				</div>
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
