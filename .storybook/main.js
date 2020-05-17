module.exports = {
	stories: ['../stories/**/*.js'],
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
	webpackFinal(config) {
		const rules = config.module.rules.filter(rule => !isScssRule(rule));
		const scssRule = {
			test: /\.scss$/,
			oneOf: [{
				resourceQuery: /module/,
				use: [{
					loader: 'style-loader',
				}, {
					loader: 'css-loader',
					options: { modules: { localIdentName: '[name]_[local]_[hash:base64:5]' }},
				}, {
					loader: 'sass-loader',
				}],
			}, {
				use: [
					'style-loader',
					'css-loader',
					'sass-loader',
				],
			}],
		};

		rules.push(scssRule);
		config.module.rules = rules; // eslint-disable-line no-param-reassign

		return config;
	},
};

function isScssRule(rule) {
	return rule.test && rule.test instanceof RegExp && rule.test.test('.scss');
}
