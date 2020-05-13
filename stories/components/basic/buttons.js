import './buttons.scss';

export default {
	title: 'Components / Basic / Buttons',
};

export function Overview() {
	return {
		template: `
			<div class="buttons">
				<button>Primary Button</button><br />
				<button disabled>Disabled Primary Button</button><br />

				<button class="button--secondary">Secondary Button</button><br />
				<button class="button--secondary" disabled>Disabled Secondary Button</button><br />

				<button class="button button--pill">Primary Pill</button><br />
				<button class="button button--pill" disabled>Disabled Primary Pill</button><br />

				<button class="button--pill button--secondary">Secondary Pill</button><br />
				<button class="button--pill button--secondary" disabled>Disabled Secondary Pill</button><br />
			</div>
		`,
	};
}
