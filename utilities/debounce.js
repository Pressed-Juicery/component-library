export function debounce(callback, timeoutInMs) {
	let timeoutId = null;

	return function (...args) {
		clearTimeout(timeoutId);
		timeoutId = setTimeout(() => callback(...args), timeoutInMs);
	};
}
