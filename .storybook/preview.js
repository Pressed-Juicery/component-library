import '../styles/index.scss';
import './preview.scss';
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
	options: {
		storySort,
	},
});

function storySort(a, b) {
	const sortOrder = [
		'Style Guide / Typography',
		'Style Guide / Spacing',
		'Icons',
		'Components / Basic',
		'Sections',
	].reverse();

	const aIndex = sortOrder.length - sortOrder.findIndex(element => a[1].kind.startsWith(element));
	const bIndex = sortOrder.length - sortOrder.findIndex(element => b[1].kind.startsWith(element));

	return aIndex - bIndex;
}
