export function validate(value, rules = []) {
	const promises = [];

	for (let i = 0; i < rules.length; i++) {
		const { validator, message, options } = rules[i];

		if (!message) throw new Error('No validation message provided.');

		// `result` is a `Boolean` for synchronous tests and `Promise<Boolean>` for asynchronous tests
		const result = validator(value, options);

		// Fail as soon as we can to prevent asynchronous tests from running unnecessarily
		if (!result) return Promise.resolve(message);

		if (result instanceof Promise) {
			const promise = result.then(isValid => !isValid && message);

			promises.push(promise);
		}
	}

	return Promise.all(promises)
		.then(results => results.filter(Boolean)[0]);
}
