export function formatCurrency(amount) {
	const value = Number(amount);

	if (Number.isNaN(value)) throw Error('amount is not a number');

	const prefix = value < 0 ? '-$' : '$';
	const fixedPointAmount = Math.abs(value).toFixed(2);

	return prefix + fixedPointAmount;
}

export function formatPhoneNumber(phone) {
	const numbersOnly = phone.replace(/\D/g,'');
	const sections = numbersOnly.match(/^(\d{3})(\d{3})(\d{4})$/);

	return `(${sections[1]}) ${sections[2]}-${sections[3]}`;
}
