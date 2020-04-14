module.exports = {
	stories: ['../stories/**/*.stories.js'],
	addons: [
		'@storybook/addon-actions',
		'@storybook/addon-links',
		'@storybook/addon-storysource',
		'@storybook/addon-knobs',
		'@storybook/addon-a11y',
		'@storybook/addon-viewport/register',
		'@storybook/addon-docs',
		'@storybook/preset-scss',
	],
};
