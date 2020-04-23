import ButtonBarButton from '../components/button-bar-button';

export default {
	title: 'ButtonBarButton',
	component: ButtonBarButton,
};

export function Overview() {
	return {
		components: { ButtonBarButton },
		template: `
			<button-bar-button>
				<p>Button Bar Button</p>
				<p>Customizable Content</p>
			</button-bar-button>
		`,
	};
}

export function Selected() {
	return {
		components: { ButtonBarButton },
		template: `
			<button-bar-button :isSelected="true">
				<p>Button Bar Button</p>
				<p>Customizable Content</p>
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
				                   @select="selectedButton = content">
					{{ content }}
				</button-bar-button>
			</div>
		`,

		data() {
			return { contents: ['First', 'Second', 'Last'], selectedButton: null };
		},
	};
}
