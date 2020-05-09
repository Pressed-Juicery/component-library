import './media-row.scss';
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
				class="media-row-overview"
				:img="img"
				:alt="alt"
				:title="title"
				:icon="icon"
				:description="description"
			/>
		`,
		data() {
			return {
				title: 'BlendJet x Pressed Juicery',
				img: 'https://pressed-product-images.s3-us-west-1.amazonaws.com/shopify/pages/blendjet-landing/blendjet-demo.png',
				alt: 'Berries, Smoothie, a bottle of Pressed Juicery Almond Milk, and a BlendJet blender',
				icon: 'https://pressed-product-images.s3-us-west-1.amazonaws.com/icons/new-icon.svg',
				description: `
					Inspired by a common goal of serving up daily nutrition with major convenience,
					we've partnered with BlendJet - makers of the original compact portable blender -
					to remix the way you make and take single-serve smoothies
				`,
			};
		},
	};
}
