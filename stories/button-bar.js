import ButtonBar from '../components/button-bar';
import ButtonBarButton from '../components/button-bar-button';

export default {
	title: 'ButtonBar',
	component: ButtonBar,
};

export function Overview() {
	return {
		components: { ButtonBar, ButtonBarButton },
		template: `
			<button-bar style="margin:20px">
				<button-bar-button style="padding:20px"
				                   value="Hello World"
				                   :selectedButton="selectedItem"
				                   @select-button="value => selectedItem = value">
					<div>Hello World</div>
				</button-bar-button>
				<button-bar-button style="padding:20px"
				                   value="Guten Tag"
				                   :selectedButton="selectedItem"
				                   @select-button="value => selectedItem = value">
					<div>Guten Tag</div>
				</button-bar-button>
				<button-bar-button style="padding:20px"
				                   value="Bonjour Tout le Monde"
				                   :selectedButton="selectedItem"
				                   @select-button="value => selectedItem = value">
					<div>Bonjour Tout le Monde</div>
				</button-bar-button>
			</button-bar>
		`,

		data() { return { selectedItem: null } },
	};
}

export function LoopedContent() {
	return {
		components: { ButtonBar, ButtonBarButton },
		template: `
			<button-bar style="margin:20px">
				<button-bar-button style="padding:20px"
				                   v-for="(content, index) in contents"
				                   :key="index"
				                   :value="content"
				                   :selectedButton="selectedItem"
				                   @select-button="value => selectedItem = value">
					<div>{{ content.title }}</div>
					<div>{{ content.detail }}</div>
				</button-bar-button>
			</button-bar>
		`,

		data() {
			return {
				contents: [
					{ title: 'Hello', detail: 'World' },
					{ title: 'Guten', detail: 'Tag' },
					{ title: 'Bonjour', detail: 'Tout le Monde' },
					{ title: '¡Hola', detail: 'Mundo!' },
				],
				selectedItem: null,
			};
		},
	};
}

export function VariedContent() {
	return {
		components: { ButtonBar, ButtonBarButton },
		template: `
			<button-bar style="margin:20px">
				<button-bar-button style="padding:20px"
				                   v-for="(content, index) in contents"
				                   :key="index"
				                   :value="content"
				                   :selectedButton="selectedItem"
				                   @select-button="value => selectedItem = value">
					<div v-if="content.primary" style="font-weight:bold">{{ content.primary }}</div>
					<div v-if="content.secondary">{{ content.secondary }}</div>
					<div v-if="content.tertiary">{{ content.tertiary }}</div>
				</button-bar-button>
			</button-bar>
		`,

		data() {
			return {
				contents: [
					{ primary: 'Primary' },
					{ primary: 'Primary', secondary: 'Secondary', tertiary: 'Tertiary' },
					{ secondary: 'Secondary', tertiary: 'Tertiary' },
				],
				selectedItem: null,
			};
		},
	};
}

export function LongerContent() {
	return {
		components: { ButtonBar, ButtonBarButton },
		template: `
			<button-bar style="margin:20px">
				<button-bar-button style="padding:20px"
				                   v-for="(content, index) in contents"
				                   :key="index"
				                   :value="content"
				                   :selectedButton="selectedItem"
				                   @select-button="value => selectedItem = value">
					<div v-if="content.primary" style="font-weight:bold">{{ content.primary }}</div>
					<div v-if="content.secondary">{{ content.secondary }}</div>
					<div v-if="content.tertiary">{{ content.tertiary }}</div>
				</button-bar-button>
			</button-bar>
		`,

		data() {
			return {
				contents: [
					{ primary: 'Primary', secondary: 'Secondary' },
					{ secondary: 'This is excessively longer button content.' },
					{ primary: 'Primary', secondary: 'Secondary' },
				],
				selectedItem: null,
			};
		},
	};
}

export function PreSelected() {
	return {
		components: { ButtonBar, ButtonBarButton },
		template: `
			<button-bar style="margin:20px">
				<button-bar-button style="padding:20px"
				                   value="Hello World"
				                   :selectedButton="selectedItem"
				                   @select-button="value => selectedItem = value">
					<div>Hello World</div>
				</button-bar-button>
				<button-bar-button style="padding:20px"
				                   value="Bonjour Tout le Monde"
				                   :selectedButton="selectedItem"
				                   @select-button="value => selectedItem = value">
					<div>Bonjour Tout le Monde</div>
				</button-bar-button>
			</button-bar>
		`,

		data() { return { selectedItem: 'Hello World' } },
	};
}
