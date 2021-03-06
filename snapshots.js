const PercyScript = require('@percy/script');

const groups = [{
	groupName: 'Style Guide',
	stories: [
		'Typography',
		'Spacing',
	],
}, {
	groupName: 'Components / Basic',
	stories: [
		'Accordion',
		'AccountSummary',
		'AddressFormatter',
		'Breadcrumbs',
		'ButtonBar',
		'Buttons',
		'Card',
		'CollapsibleDrawer',
		'CollectionButton',
		'CollectionsMenu',
		'ConfirmationDialogTemplate',
		'ConfirmDrawer',
		'CurrentOffers',
		'Drawer',
		'FeaturedItem',
		'IncrementalQuantitySelector',
		'MenuDialogTemplate',
		'MenuDrawer',
		'Overlay',
		'PaymentMethodFormatter',
		'PaymentMethods',
		'QrCode',
		'StarRating',
		'StoreAddress',
		'StepProgressBar',
		'Sidebar',
		'ToggleSwitch',
		'VipPerksCard',
		'WalletDrawer',
	],
}, {
	groupName: 'Components / Cart',
	stories: [
		'CartItemCard',
		'CartSidebar',
		'CartSummary',
		'CartTotals',
		'CheckoutItemCard',
		'PointsRedemption',
		'TipInput',
	],
}, {
	groupName: 'Components / Forms',
	stories: [
		'AddressForm',
		'GuestInformationForm',
		'ProductReviewForm',
		'RadioButton',
		'Signin',
		'SignUpForm',
		'UpgradeForm',
		'ValidatedBirthday',
		'ValidatedCheckbox',
		'ValidatedForm',
		'ValidatedInput',
		'ValidatedPassword',
		'ValidatedPaymentMethod',
		'ValidatedSelect',
		'ValidatedStarRating',
		'ValidatedTextarea',
		'QuantitySelector',
	],
}, {
	groupName: 'Components / Radio Button Cards',
	stories: [
		'AddressRadioButtonCard',
		'PaymentMethodRadioButtonCard',
		'RadioButtonCard',
		'StoreRadioButtonCard',
	],
}, {
	groupName: 'Components / Products',
	stories: [
		'AddonOptions',
		'BundleCardGrid',
		'BundleItems',
		'CleanseGuide',
		'Ingredients',
		'ModifierOptions',
		'NutritionFacts',
		'ProductDetails',
		'ProductCard',
		'ProductOrderingSection',
		'ProductReview',
	],
}, {
	groupName: 'Sections',
	stories: [
		'BundleCardSection',
		'FeatureHighlightRow',
		'HighlightSection',
		'ImageBanner',
	],
}, {
	groupName: 'Templates',
	stories: [
		'LandingPageTemplate',
	],
}];

PercyScript.run(async (page, percySnapshot) => {
	const urlsByStoryName = getUrlsByStoryName();

	await Object.entries(urlsByStoryName)
		.reduce((promiseChain, [storyName, url]) => { // eslint-disable-line arrow-body-style
			return promiseChain.then(() => takeSnapshot(page, percySnapshot, storyName, url));
		}, Promise.resolve());
});

function getUrlsByStoryName() {
	const baseUrl = 'http://localhost:6006/?path=/docs';

	return groups.reduce((urlsByStoryName, group) => {
		const groupPath = group.groupName.toLowerCase().replace(/(\s+\/*\s*)/g, '-');

		group.stories.forEach(storyName => {
			// eslint-disable-next-line no-param-reassign
			urlsByStoryName[storyName] = `${baseUrl}/${groupPath}-${storyName.toLowerCase()}`;
		});

		return urlsByStoryName;
	}, {});
}

async function takeSnapshot(page, percySnapshot, storyName, url) {
	const defaultWidth = 1480;

	await page.goto(url);
	await waitUntilReady(page);
	await manipulateDom(page);

	await percySnapshot(storyName, { widths: [defaultWidth] });
}

async function waitUntilReady(page) {
	const intervalInMs = 100;
	const maxWaitInSeconds = 10;

	let isReady = false;
	let remainingAttempts = Math.floor((maxWaitInSeconds * 1000) / intervalInMs);

	/* eslint-disable no-await-in-loop */
	while (!isReady && remainingAttempts) {
		remainingAttempts--;
		await page.waitFor(intervalInMs);

		isReady = await page.evaluate(() => {
			const iframe = document.getElementById('storybook-preview-iframe');

			return iframe && Boolean(iframe.contentWindow.document.querySelector('.sbdocs'));
		});
	}
	/* eslint-enable no-await-in-loop */
}

async function manipulateDom(page) {
	await page.evaluate(() => {
		const iframe = document.getElementById('storybook-preview-iframe');

		document.documentElement.innerHTML = iframe.contentWindow.document.documentElement.innerHTML;
	});
}
