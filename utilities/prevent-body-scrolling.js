export function preventBodyScrolling(shouldPreventScrolling) {
	const action = shouldPreventScrolling ? 'add' : 'remove';

	window.document.body.classList[action]('prevent-scrolling');
}
