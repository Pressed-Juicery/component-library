import { addDecorator, addParameters } from '@storybook/vue';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withA11y } from '@storybook/addon-a11y';

addDecorator(withA11y);

addParameters({
	viewport: {
		viewports: INITIAL_VIEWPORTS,
		defaultViewport: 'responsive',
	},
});
