export function preventBodyScrolling(shouldPreventScrolling) {
	const action = shouldPreventScrolling ? 'add' : 'remove';

	window.document.body.classList[action]('prevent-scrolling');
}

export function preventAncestorScrolling(startingElement) {
	const body = document.body;
	let currentElement = startingElement && startingElement.parentElement;

	while (currentElement) {
		const isPositioned = getComputedStyle(currentElement).position !== 'static';

		if (isPositioned || currentElement === body) {
			currentElement.classList.add('prevent-scrolling');
			break;
		}

		currentElement = currentElement.parentElement;
	}

	return function allowScrolling() {
		currentElement.classList.remove('prevent-scrolling');
	};
}
