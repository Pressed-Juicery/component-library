import '../styles/index.scss';
import { addDecorator, addParameters } from '@storybook/vue';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withA11y } from '@storybook/addon-a11y';

addDecorator(withA11y);

addParameters({
	docs: {
		inlineStories: true,
	},
	viewport: {
		viewports: INITIAL_VIEWPORTS,
		defaultViewport: 'responsive',
	},
});
