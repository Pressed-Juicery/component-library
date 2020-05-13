import ContentWrapper from '../components/content-wrapper';

export default {
	title: 'ContentWrapper',
	component: ContentWrapper,
};

export function Overview() {
	return {
		components: { ContentWrapper },
		template: `
			<content-wrapper>
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
		template: `
			<content-wrapper style="background-color:#3d636bbf;color:#fff;">
				<div>
					<h1>This is a content-wrapper</h1>
					<p>The contents are completely customizable.</p>
				</div>
			</content-wrapper>
		`,
	};
}
