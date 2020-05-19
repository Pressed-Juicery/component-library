import './typography.scss';
import Card from '../../components/card';

export default {
	title: 'Style Guide / Typography',
};

export function HeadingTags() {
	return {
		template: `
			<div>
				<h1>&lt;h1&gt; - Heading 1</h1>
				<h2>&lt;h2&gt; - Heading 2</h2>
				<h3>&lt;h3&gt; - Heading 3</h3>
				<h4>&lt;h4&gt; - Heading 4</h4>
				<h5>&lt;h5&gt; - Heading 5</h5>
				<h6>&lt;h6&gt; - Heading 6</h6>
				<p>&lt;p&gt; - Paragraph</p>
			</div>
		`,
	};
}

// eslint-disable-next-line max-lines-per-function
export function ParagraphText() {
	return {
		template: `
			<div>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
					et dolore magna aliqua. Pharetra et ultrices neque ornare aenean euismod elementum. Egestas erat
					imperdiet sed euismod. Platea dictumst quisque sagittis purus sit amet volutpat consequat.
				</p>
				<p>
					Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. Venenatis tellus in
					metus vulputate eu. Quis viverra nibh cras pulvinar mattis nunc sed. Sit amet porttitor eget dolor
					morbi non arcu risus quis. Tristique senectus et netus et malesuada fames. Massa tincidunt nunc
					pulvinar sapien. Aenean sed adipiscing diam donec adipiscing.
				</p>
				<p>
					Suspendisse faucibus interdum posuere lorem ipsum dolor sit amet consectetur. Ut placerat orci nulla
					pellentesque. Sed vulputate mi sit amet. Placerat duis ultricies lacus sed turpis tincidunt id
					aliquet risus. Metus aliquam eleifend mi in. Nisl rhoncus mattis rhoncus urna neque viverra.
				</p>
				<p>
					Lacinia quis vel eros donec ac odio tempor orci. At elementum eu facilisis sed odio morbi quis.
					Libero id faucibus nisl tincidunt eget nullam non. Augue neque gravida in fermentum et. Arcu odio ut
					sem nulla pharetra. Vel pharetra vel turpis nunc eget lorem dolor sed. Ante in nibh mauris cursus
					mattis molestie a iaculis. Sit amet aliquam id diam maecenas ultricies mi eget mauris. Vel pharetra
					vel turpis nunc eget lorem dolor sed.
				</p>
			</div>
		`,
	};
}

export function Classes() {
	return {
		template: `
			<div>
				<div class="heading-1">.heading-1</div>
				<div class="heading-2">.heading-2</div>
				<div class="heading-3">.heading-3</div>
				<div class="heading-4">.heading-4</div>
				<div class="heading-5">.heading-5</div>
				<div class="heading-6">.heading-6</div>
				<div class="body">.body</div>
				<div class="body-small">.body-small</div>
			</div>
		`,
	};
}

// eslint-disable-next-line max-lines-per-function
export function Mixins() {
	return {
		components: { Card },
		template: `
			<div>
				<div class="heading-4">Font Weights</div>
				<card class="typography-card">
					<div class="mixin-text-light">text-light</div>
					<div class="mixin-text-normal">text-normal</div>
					<div class="mixin-text-bold">text-bold</div>
					<div class="mixin-text-bolder">text-bolder</div>
				</card>

				<div class="heading-4">Headings</div>
				<card class="typography-card">
					<div class="mixin-text-heading-1">text-heading-1</div>
					<div class="mixin-text-heading-2">text-heading-2</div>
					<div class="mixin-text-heading-3">text-heading-3</div>
					<div class="mixin-text-heading-4">text-heading-4</div>
					<div class="mixin-text-heading-5">text-heading-5</div>
					<div class="mixin-text-heading-6">text-heading-6</div>
				</card>

				<div class="heading-4">Body Text</div>
				<card class="typography-card">
					<div class="mixin-text-body">text-body</div>
					<div class="mixin-text-body-small">text-body-small</div>
				</card>

				<div class="heading-4">CTA Text</div>
				<card class="typography-card">
					<div class="mixin-text-cta">text-cta</div>
					<div class="mixin-text-cta-small">text-cta-small</div>
				</card>

				<div class="heading-4">Modifiers</div>
				<card class="typography-card">
					<div class="mixin-text-subtle">text-subtle</div>
					<div class="mixin-text-uppercase">text-uppercase</div>
				</card>
			</div>
		`,
	};
}
