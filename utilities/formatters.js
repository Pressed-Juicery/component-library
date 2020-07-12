export function formatCurrency(amount) {
	const value = Number(amount);

	if (Number.isNaN(value)) return null;

	const prefix = value < 0 ? '-$' : '$';
	const fixedPointAmount = Math.abs(value).toFixed(2);

	return prefix + fixedPointAmount;
}

export function formatPhoneNumber(phone) {
	const numbersOnly = phone.replace(/\D/g, '');
	const sections = numbersOnly.match(/^(\d{3})(\d{3})(\d{4})$/);

	// eslint-disable-next-line no-magic-numbers
	return sections ? `(${sections[1]}) ${sections[2]}-${sections[3]}` : numbersOnly;
}
