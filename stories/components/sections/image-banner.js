import ImageBanner from '../../../components/image-banner';
import { imageBannerData } from '../../../demo-data/image-banner.data';

export default {
	component: ImageBanner,
	title: 'Sections / ImageBanner',
};

export function Overview() {
	return {
		components: { ImageBanner },
		template: `
			<ImageBanner
				:heading="heading"
				:link-text="linkText"
				:link-path="linkPath"
				:alt-text="altText"
				:large="large"
				:small="small"
			/>
		`,
		data() {
			return imageBannerData;
		},
	};
}

// eslint-disable-next-line max-lines-per-function
export function ConfigurationDemonstration() {
	return {
		components: { ImageBanner },
		template: `
			<ImageBanner
				:heading="heading"
				:link-text="linkText"
				:link-path="linkPath"
				:link-style="linkStyle"
				:alt-text="altText"
				:large="large"
				:medium="medium"
				:small="small"
			/>
		`,
		data() {
			return {
				heading: '<i>Headings can have</i> <span style="font-weight: 700">custom styling</span>',
				linkText: 'Button or Link CTA Styling',
				linkPath: '#',
				linkStyle: 'button',
				altText: '',
				large: {
					image: 'large.png',
				},
				medium: {
					image: 'medium.png',
					textTop: '65%',
				},
				small: {
					image: 'small.png',
					textTop: '10%',
				},
			};
		},
	};
}
