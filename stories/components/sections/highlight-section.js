import HighlightSection from '../../../components/highlight-section';

export default {
	title: 'Sections / HighlightSection',
	component: HighlightSection,
};

// eslint-disable-next-line max-lines-per-function
export function Overview() {
	return {
		components: { HighlightSection },
		template: '<highlight-section :config="config" />',
		data() { // eslint-disable-line max-lines-per-function
			return {
				config: {
					separatorColor: '#dcd9d9',
					contentWrapper: {
						backgroundColor: '#8aa59f',
						color: '#fff',
					},
					mediaRow: {
						title: 'BlendJet x Pressed Juicery',
						img: 'https://pressed-product-images.s3-us-west-1.amazonaws.com/shopify/pages/blendjet-landing/blendjet-demo.png',
						alt: 'Berries, Smoothie, a bottle of Pressed Juicery Almond Milk, and a BlendJet blender',
						icon: 'https://pressed-product-images.s3-us-west-1.amazonaws.com/icons/new-icon.svg',
						description: `
							Inspired by a common goal of serving up daily nutrition with major convenience,
							we've partnered with BlendJet - makers of the original compact portable blender -
							to remix the way you make and take single-serve smoothies.
						`,
					},
					featureHighlight: {
						title: 'Meet the modern-day blender',
						features: [{
							icon: 'https://pressed-product-images.s3-us-west-1.amazonaws.com/icons/blendjet.svg',
							title: 'Easy Clean-Up',
							description: `
								Designed for convenience, the BlendJet comes with a self-cleaning feature!
								Just add soap & water and blend!
							`,
						}, {
							icon: 'https://pressed-product-images.s3-us-west-1.amazonaws.com/icons/usb.svg',
							title: 'Cordless & Rechargeable',
							description: 'With a built-in USB charging this is no strings attached for modern life.',
						}, {
							icon: 'https://pressed-product-images.s3-us-west-1.amazonaws.com/icons/smoothie.svg',
							title: 'Easy Recipes',
							description: `
								Each recipe guide calls for a juice & simple ingredients you may already have on hand!
							`,
						}],
					},
				},
			};
		},
	};
}
