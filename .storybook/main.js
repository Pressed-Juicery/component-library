const path = require('path');

module.exports = {
	webpackFinal: config => {

		config.resolve.alias = {
			...config.resolve.alias,
			'~': path.resolve(__dirname, '../'),
		};

		config.module.rules
			.filter(moduleRules => moduleRules.test.toString().includes('svg'))
			.forEach((rule) => { rule.test = /\.(png|jpe?g|gif)$/ })

    config.module.rules = [
			...config.module.rules,
			{
				test: /\.svg$/,
				loader: 'svg-inline-loader',
				exclude: /node_modules/,
			},
		];

		return config;
	},
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
