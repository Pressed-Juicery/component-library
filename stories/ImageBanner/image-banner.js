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
			<ImageBanner :srcDesktop="srcDesktop" :srcMobile="srcMobile" alt="hello">
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
