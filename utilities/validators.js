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
	return isEmpty(value) || !Number.isNaN(Number(value));
}

export function isTruthy(value) {
	return Boolean(value);
}

export function isEqual(value, { comparison }) {
	return isEmpty(value) || value === comparison;
}

export function isValidPhoneNumber(value) {
	return isEmpty(value) || /^\D*(\d\D*){10}$/.test(value);
}

export function isZipCode(value) {
	return isEmpty(value) || (/^\d{5}(-\d{4})?$/).test(value);
}
