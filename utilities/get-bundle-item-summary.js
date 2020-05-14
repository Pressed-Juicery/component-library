export function getBundleItemSummary(bundleItems = []) {
	if (!bundleItems.length) return '';

	const productCountByName = bundleItems.reduce((dictionary, item) => {
		// eslint-disable-next-line no-param-reassign
		dictionary[item.name] = dictionary[item.name] ? dictionary[item.name] + 1 : 1;

		return dictionary;
	}, {});

	const items = Object.entries(productCountByName)
		.sort((a, b) => (a[0] < b[0] ? -1 : 1))
		.map(([name, count]) => {
			if (count === 1) return name;

			return `${count} x ${name}`;
		});

	const lastItem = items.pop();
	const summary = items.length ? [items.join(', '), lastItem].join(' & ') : lastItem;

	return `Includes | ${summary}`;
}
