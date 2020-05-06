import ContentGutter from '../components/content-gutter';

export default {
	title: 'ContentGutter',
	component: ContentGutter,
};

export function Overview() {
	return {
		components: { ContentGutter },
		data() {
			return {
				backgroundColor: '',
			};
		},
		template: `
			<content-gutter :backgroundColor="backgroundColor">
				<div>
					<h1>This is a content-gutter</h1>
					<p>The contents are completely customizable.</p>
				</div>
			</content-gutter>
		`,
	};
}

export function GutterWithBackgroundColor() {
	return {
		components: { ContentGutter },
		data() {
			return {
				backgroundColor: 'blue',
			};
		},
		template: `
			<content-gutter :backgroundColor="backgroundColor">
				<div>
					<h1>This is a content-gutter</h1>
					<p>The contents are completely customizable.</p>
				</div>
			</content-gutter>
		`,
	};
}
