export function isEmpty(value) {
	return !value && value !== 0;
}

export function isNotEmpty(value) {
	return !isEmpty(value);
}

export function hasExactLength(value, { length }) {
	return isEmpty(value) || value.length === length;
}

export function hasMinimumLength(value, { length }) {
	return isEmpty(value) || value.length >= length;
}

export function isEmail(value) {
	return isEmpty(value) || /^\S+@\S+\.\S+$/.test(value);
}

export function isNumber(value) {
	return isEmpty(value) || !window.isNaN(value);
}

export function isValidPhoneNumber(value) {
	return isEmpty(value) || /^\D*(\d\D*){10}$/.test(value);
}
