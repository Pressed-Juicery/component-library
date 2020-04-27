import './buttons.scss';

export default {
	title: 'Buttons',
};

export function Overview() {
	return {
		template: `
			<div class="buttons">
				<button>Primary Button</button>
				<button disabled>Disabled Primary Button</button>

				<button class="button--secondary">Secondary Button</button>
				<button class="button--secondary" disabled>Disabled Secondary Button</button>

				<button class="button button--pill">Primary Pill</button>
				<button class="button button--pill" disabled>Disabled Primary Pill</button>

				<button class="button--pill button--secondary">Secondary Pill</button>
				<button class="button--pill button--secondary" disabled>Disabled Secondary Pill</button>
			</div>
		`,
	};
}
