export function getRandom() {
	const radix = 36;
	const indexStart = 2;

	return Math.random()
		.toString(radix)
		.substring(indexStart);
}
