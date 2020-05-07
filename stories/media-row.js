import MediaRow from '../components/media-row';

export default {
	component: MediaRow,
	title: 'MediaRow',
};

export function Overview() {
	return {
		components: { MediaRow },
		template: `
			<MediaRow
				:img="img"
				:alt="alt"
				:title="title"
				:backgroundColor="backgroundColor"
				:color="color"
				:icon="icon">
				<span>
					Inspired by a common goal of serving up daily nutrition with major convenience,
					we've partnered with BlendJet - makers of the original compact portable blender -
					to remix the way you make and take sing-serve smoothies
				</span>
			</MediaRow>
		`,
		data() {
			return {
				title: 'BlendJet x Pressed Juicery',
				img: 'https://pressed-product-images.s3-us-west-1.amazonaws.com/shopify/pages/blendjet-landing/blendjet-demo.png',
				alt: 'Berries, Smoothie, and BlendJet blender',
				backgroundColor: '#7f9a94',
				color: '#fff',
				icon: 'https://pressed-product-images.s3-us-west-1.amazonaws.com/icons/new-icon.svg',
			};
		},
	};
}
