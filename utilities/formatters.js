export function formatAssetName(name) {
	const words = name.trim().split(' ');

	return words.length > 1 ? words.join('-') : name;
}
