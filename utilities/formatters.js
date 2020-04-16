export function formatPhoneNumber(phone) {
	return (phone || '').replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
}
