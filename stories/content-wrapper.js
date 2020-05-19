import ContentWrapper from '../components/content-wrapper';

export default {
	title: 'Components / Basic / ContentWrapper',
	component: ContentWrapper,
};

export function Overview() {
	return {
		components: { ContentWrapper },
		template: `
			<content-wrapper>
				<div>
					<div class="heading-3">This is a content-wrapper</div>
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
					<div class="heading-3">This is a content-wrapper</div>
					<p>The contents are completely customizable.</p>
				</div>
			</content-wrapper>
		`,
	};
}

export function SmallContentWrapper() {
	return {
		components: { ContentWrapper },
		template: `
			<content-wrapper style="background-color:#3d636bbf;color:#fff;" :is-small="true">
				<div>
					<div class="heading-3">This is a small content-wrapper.</div>
					<p>It has a smaller maximum-width.</p>
				</div>
			</content-wrapper>
		`,
	};
}
