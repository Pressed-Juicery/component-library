export function hasExactLength(value, { length }) {
	return isEmpty(value) || value.length === length;
}

export function isEmpty(value) {
	return !value && value !== 0;
}

export function isNotEmpty(value) {
	return !isEmpty(value);
}

export function isNumber(value) {
	return isEmpty(value) || !window.isNaN(value);
}

export function isValidPhoneNumber(value) {
	return isEmpty(value) || /^\D*(\d\D*){10}$/.test(value);
}
