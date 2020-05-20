import LandingPageTemplate from '../../components/landing-page-template';
import { landingPageTemplateData } from '../../demo-data/landing-page-template.data';

export default {
	title: 'Templates / LandingPageTemplate',
	component: LandingPageTemplate,
};

export function Overview() {
	return {
		components: { LandingPageTemplate },
		template: '<landing-page-template :config="config" />',
		data() {
			return { config: landingPageTemplateData };
		},
	};
}
