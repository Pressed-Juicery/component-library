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
					<div>Hello</div>
					<div>World</div>
				</button-bar-button>

				<button-bar-button style="padding:20px"
				                   value="Guten Tag"
				                   :selectedButton="selectedItem"
				                   @select-button="value => selectedItem = value">
					<div>Guten</div>
					<div>Tag</div>
				</button-bar-button>

				<button-bar-button style="padding:20px"
				                   value="Bonjour Tout le Monde"
				                   :selectedButton="selectedItem"
				                   @select-button="value => selectedItem = value">
					<div>Bonjour</div>
					<div>Tout le Monde</div>
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
					{ title: 'This Button', detail: 'Bar Is' },
					{ title: 'Fully', detail: 'Customizable' },
					{ title: 'Its Contents', detail: 'Are Dynamic' },
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
					{ primary: 'Primary', secondary: 'Secondary' },
					{ primary: 'Primary', secondary: 'Secondary', tertiary: 'Tertiary' },
					{ primary: 'Primary', tertiary: 'Tertiary' },
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
				<button-bar-button v-for="(content, index) in contents"
				                   :key="index"
				                   :value="content"
				                   :selectedButton="selectedItem"
				                   @select-button="value => selectedItem = value">
					<div style="padding:20px">
						<div v-if="content.primary" style="font-weight:bold">{{ content.primary }}</div>
						<div v-if="content.secondary">{{ content.secondary }}</div>
						<div v-if="content.tertiary">{{ content.tertiary }}</div>
					</div>
				</button-bar-button>
			</button-bar>
		`,

		data() {
			return {
				contents: [
					{ primary: 'Primary', secondary: 'Secondary' },
					{ primary: 'This is a longer button title.' },
					{ primary: 'Primary', secondary: 'Secondary' },
					{ secondary: 'This is excessively longer button content.' },
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
					<div>Hello</div>
					<div>World</div>
				</button-bar-button>

				<button-bar-button style="padding:20px"
				                   value="Guten Tag"
				                   :selectedButton="selectedItem"
				                   @select-button="value => selectedItem = value">
					<div>Guten</div>
					<div>Tag</div>
				</button-bar-button>

				<button-bar-button style="padding:20px"
				                   value="Bonjour Tout le Monde"
				                   :selectedButton="selectedItem"
				                   @select-button="value => selectedItem = value">
					<div>Bonjour</div>
					<div>Tout le Monde</div>
				</button-bar-button>
			</button-bar>
		`,

		data() { return { selectedItem: 'Hello World' } },
	};
}
