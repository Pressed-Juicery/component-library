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

// eslint-disable-next-line complexity, max-statements
export function isDayOfMonth(value) {
	if (isEmpty(value)) return true;

	try {
		const date = value.split('/');
		const month = parseInt(date[0], 10);
		const day = parseInt(date[1], 10);

		if (!month && !day) return true;
		if (month && !day) return false;
		if (day && !month) return false;

		const thirtyOneDayMonths = [1, 3, 5, 7, 8, 10, 12]; // eslint-disable-line no-magic-numbers
		const thirtyDayMonths = [4, 6, 9, 11]; // eslint-disable-line no-magic-numbers

		if (thirtyOneDayMonths.includes(month)) return day <= 31; // eslint-disable-line no-magic-numbers
		if (thirtyDayMonths.includes(month)) return day <= 30; // eslint-disable-line no-magic-numbers
		if (month === 2) return day <= 29; // eslint-disable-line no-magic-numbers
	} catch (error) {
		// continue regardless of error
	}

	return false;
}

export function isZipCode(value) {
	return isEmpty(value) || (/^\d{5}(-\d{4})?$/).test(value);
}

export function isLessThanOrEqualTo(value, { maximum }) {
	return isEmpty(value) || value <= maximum;
}

export function isGreaterThanOrEqualTo(value, { minimum }) {
	return isEmpty(value) || value >= minimum;
}

export function isInteger(value) {
	return isEmpty(value) || (isNumber(value) && Number(value) % 1 === 0);
}

export function hasNumber(value) {
	return /[0-9]/.test(value);
}

export function hasUppercase(value) {
	return /[A-Z]/.test(value);
}

export function hasLowercase(value) {
	return /[a-z]/.test(value);
}

export function hasSpecialCharacter(value) {
	return /[~!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g.test(value);
}
