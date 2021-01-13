export function formatCurrency(amount) {
	const value = Number(amount);

	if (Number.isNaN(value)) return null;

	const prefix = value < 0 ? '-$' : '$';
	const fixedPointAmount = Math.abs(value).toFixed(2);

	return prefix + fixedPointAmount;
}

export function formatMediumDate(date) {
	const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

	const _date = new Date(date);
	const month = months[_date.getMonth()];
	const day = _date.getDate();
	const year = _date.getFullYear();

	return `${month} ${day}, ${year}`;
}

export function formatPhoneNumber(phone) {
	const numbersOnly = phone.replace(/\D/g, '');
	const sections = numbersOnly.match(/^(\d{3})(\d{3})(\d{4})$/);

	// eslint-disable-next-line no-magic-numbers
	return sections ? `(${sections[1]}) ${sections[2]}-${sections[3]}` : numbersOnly;
}

export function formatGoogleAddress(addressComponents) {
	const getPropertyByType = type => {
		const addressProperty = (addressComponents || []).find(property => property.types.includes(type));

		return addressProperty && addressProperty.short_name || null;
	}

	const number = getPropertyByType('street_number');
	const street = getPropertyByType('route');
	const locality = getPropertyByType('locality');
	const region = getPropertyByType('administrative_area_level_1');;
	const country = getPropertyByType('country');
	const postal = getPropertyByType('postal_code');
	const postalSuffix = getPropertyByType('postal_code_suffix');

	const streetAddress = number && street
		? `${number} ${street}`
		: street || null;

	return {
		streetAddress,
		locality,
		region,
		postal: postalSuffix ? `${postal}-${postalSuffix}` : postal,
		country,
	};
}
