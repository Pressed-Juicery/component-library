export function currency(amount) {
	if (Number.isNaN(Number(amount))) return '';

	const prefix = amount < 0 ? '-$' : '$';
	const fixedPointAmount = Math.abs(amount).toFixed(2);

	return prefix + fixedPointAmount;
}

export function formatPhoneNumber(phone) {
	return (phone || '').replace(/^(\d{3})(\d{3})(\d{4})$/, '$1-$2-$3');
}
