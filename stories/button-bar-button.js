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
			<button-bar-button :isSelected="true">
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
			<div>
				<button-bar-button v-for="content in contents"
				                   style="padding:20px"
				                   :isSelected="selectedButton === content"
				                   @select-button="selectedButton = content">
					{{ content }}
				</button-bar-button>
			</div>
		`,

		data() {
			return { contents: ['First', 'Second', 'Last'], selectedButton: null };
		},
	};
}
