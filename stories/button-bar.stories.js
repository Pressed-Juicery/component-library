import ButtonBar from '../components/button-bar';

export default {
	title: 'ButtonBar',
	component: ButtonBar,
};

const firstTitle = { title: 'First Title', detail: 'Detail' };
const secondTitle = { title: 'Second Title', detail: 'Detail' };
const thirdTitle = { title: 'Third Title', detail: 'Detail' };

export function Overview() {
	return {
		components: { ButtonBar },
		template: `
			<div>
				<button-bar style="margin:40px" :contents="contents" @select="value => selectedButton = value">
					<template slot-scope="{ content }">
						<div style="padding:20px">
							<div>{{ content.title }}</div>
							<div>{{ content.detail }}</div>
						</div>
					</template>
				</button-bar>
				<p>Selected Button: {{ selectedButton }}</p>
			</div>
		`,

		data() {
			return {
				contents: [ firstTitle, secondTitle, thirdTitle ],
				selectedButton: null,
			};
		},
	};
}

export function PreSelected() {
	return {
		components: { ButtonBar },
		template: `
			<div>
				<button-bar style="margin:40px"
				            :selected="selectedButton"
				            :contents="contents"
				            @select="value => selectedButton = value">
					<template slot-scope="{ content }">
						<div style="padding:20px">
							<div>{{ content.title }}</div>
							<div>{{ content.detail }}</div>
						</div>
					</template>
				</button-bar>
				<p>Selected Button: {{ selectedButton }}</p>
			</div>
		`,

		data() {
			return {
				contents: [ firstTitle, secondTitle, thirdTitle ],
				selectedButton: firstTitle,
			};
		},
	};
}
