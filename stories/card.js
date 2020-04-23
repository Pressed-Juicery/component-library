import Card from '../components/card';

export default {
	title: 'Card',
	component: Card,
};

export function Overview() {
	return {
		components: { Card },
		template: `
			<card>
				<h1>This is a card</h1>
				<p>The contents are completely customizable.</p>
			</card>
		`,
	};
}
