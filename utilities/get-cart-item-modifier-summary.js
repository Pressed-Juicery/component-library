export function getCartItemModifierSummary(cartItemModifiers = []) {
	const modifierSummary = {};

	cartItemModifiers.forEach(modifier => {
		modifierSummary[modifier.groupName] = modifierSummary[modifier.groupName] || [];
		modifierSummary[modifier.groupName].push(modifier.name);
	});

	Object.keys(modifierSummary)
		.forEach(key => {
			const modifiers = modifierSummary[key];
			let lastItem = modifiers.pop();

			if (modifiers.length === 1) lastItem = ` and ${lastItem}`;
			if (modifiers.length > 1) lastItem = `, and ${lastItem}`;

			modifierSummary[key] = modifiers.join(', ') + lastItem;
		});

	return modifierSummary;
}
