export function formatCurrency(amount) {
	const value = Number(amount);

	if (Number.isNaN(value)) return '';

	const prefix = value < 0 ? '-$' : '$';
	const fixedPointAmount = Math.abs(value).toFixed(2);

	return prefix + fixedPointAmount;
}

export function formatPhoneNumber(phone) {
	return (phone || '').replace(/^(\d{3})(\d{3})(\d{4})$/, '$1-$2-$3');
}
