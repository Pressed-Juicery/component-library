import ButtonBarButton from '../components/button-bar-button';

export default {
	title: 'ButtonBarButton',
	component: ButtonBarButton,
};

export function Overview() {
	return {
		components: { ButtonBarButton },
		template: `
			<button-bar-button style="margin:20px; padding:20px" value="Button Bar Button">
				<div>Button Bar Button</div>
				<div>Customizable Content</div>
			</button-bar-button>
		`,
	};
}

export function Selected() {
	return {
		components: { ButtonBarButton },
		template: `
			<button-bar-button style="margin:20px; padding:20px"
			                   value="Button Bar Button"
			                   selectedButton="Button Bar Button">
				<div>Button Bar Button</div>
				<div>Customizable Content</div>
			</button-bar-button>
		`,
	};
}

export function ButtonBar() {
	return {
		components: { ButtonBarButton },
		template: `
			<div style="margin:20px; padding:20px; display:flex">
				<button-bar-button style="padding:20px"
				                   v-for="(content, index) in contents"
				                   :key="index"
				                   :value="content"
				                   :selectedButton="selectedItem"
				                   @select-button="value => selectedItem = value">
					<div>{{ content.title }}</div>
					<div>{{ content.detail }}</div>
				</button-bar-button>
			</div>
		`,

		data() {
			return {
				contents: [
					{ title: 'This Button', detail: 'Bar Is' },
					{ title: 'Fully', detail: 'Customizable' },
					{ title: 'Its Contents', detail: 'Are Dynamic' },
				],
				selectedItem: null,
			};
		},
	};
}

export function VariedButtonBar() {
	return {
		components: { ButtonBarButton },
		template: `
			<div style="margin:20px; padding:20px; display:flex">
				<button-bar-button style="padding:20px"
				                   value="A"
				                   :selectedButton="selectedButton"
				                   @select-button="value => selectedButton = value">
					<div>Basic Content</div>
				</button-bar-button>
				<button-bar-button style="padding:20px"
				                   value="C"
				                   :selectedButton="selectedButton"
				                   @select-button="value => selectedButton = value">
					<div>Line <span style="font-weight:bold">One</span></div>
					<div>Line Two</div>
					<div>Line Three</div>
				</button-bar-button>
			</div>
		`,

		data() { return { selectedButton: 'A' } },
	};
}
