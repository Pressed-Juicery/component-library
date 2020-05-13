import ContentWrapper from '../components/content-wrapper';

export default {
	title: 'ContentWrapper',
	component: ContentWrapper,
};

export function Overview() {
	return {
		components: { ContentWrapper },
		data() {
			return {
				backgroundColor: '',
			};
		},
		template: `
			<content-wrapper :backgroundColor="backgroundColor">
				<div>
					<h1>This is a content-wrapper</h1>
					<p>The contents are completely customizable.</p>
				</div>
			</content-wrapper>
		`,
	};
}

export function WrapperWithBackgroundColor() {
	return {
		components: { ContentWrapper },
		data() {
			return {
				backgroundColor: 'blue',
			};
		},
		template: `
			<content-wrapper :backgroundColor="backgroundColor">
				<div>
					<h1>This is a content-wrapper</h1>
					<p>The contents are completely customizable.</p>
				</div>
			</content-wrapper>
		`,
	};
}
