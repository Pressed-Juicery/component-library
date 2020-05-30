import PointsRedemption from '../../../components/points-redemption';
import PointsRedemptionCard from '../../../components/points-redemption-card';

export default {
	title: 'Components / Cart / PointsRedemption',
	component: PointsRedemption,
};

const cards = [{
	icon: 'https://d3e4ixgvd0ibii.cloudfront.net/shopify/icons/pressed-points/water-and-shot.svg',
	title: 'Shot or Water',
	points: '70',
	quantityAvailable: 7,
}, {
	icon: 'https://d3e4ixgvd0ibii.cloudfront.net/shopify/icons/pressed-points/freeze-size-1.svg',
	title: 'Size 1 Freeze',
	points: '140',
	quantityAvailable: 3,
}, {
	icon: 'https://d3e4ixgvd0ibii.cloudfront.net/shopify/icons/pressed-points/juice.svg',
	title: 'Any Juice',
	points: '150',
	quantityAvailable: 3,
}, {
	icon: 'https://d3e4ixgvd0ibii.cloudfront.net/shopify/icons/pressed-points/signature-blend.svg',
	title: 'Signature Blend',
	points: '180',
	quantityAvailable: 2,
}, {
	icon: 'https://d3e4ixgvd0ibii.cloudfront.net/shopify/icons/pressed-points/freeze-size-2.svg',
	title: 'Size 2 Freeze',
	points: '180',
	quantityAvailable: 2,
}, {
	icon: 'https://d3e4ixgvd0ibii.cloudfront.net/shopify/icons/pressed-points/water-and-shot.svg',
	title: 'Shot or Water',
	points: '70',
	quantityAvailable: 7,
}, {
	icon: 'https://d3e4ixgvd0ibii.cloudfront.net/shopify/icons/pressed-points/freeze-size-1.svg',
	title: 'Size 1 Freeze',
	points: '140',
	quantityAvailable: 3,
}, {
	icon: 'https://d3e4ixgvd0ibii.cloudfront.net/shopify/icons/pressed-points/juice.svg',
	title: 'Any Juice',
	points: '150',
	quantityAvailable: 3,
}, {
	icon: 'https://d3e4ixgvd0ibii.cloudfront.net/shopify/icons/pressed-points/signature-blend.svg',
	title: 'Signature Blend',
	points: '180',
	quantityAvailable: 2,
}, {
	icon: 'https://d3e4ixgvd0ibii.cloudfront.net/shopify/icons/pressed-points/freeze-size-2.svg',
	title: 'Size 2 Freeze',
	points: '180',
	quantityAvailable: 2,
}];

export function Overview() {
	return {
		components: { PointsRedemptionCard },
		template: `
			<div>
				<points-redemption-card
					:icon="icon"
					:title="title"
					:points="points"
					:quantity-available="quantityAvailable"
					@change="onChange"
				/>
				<div>Quantity selected: {{ quantitySelected }}</div>
			</div>
		`,

		data() {
			return {
				...cards[0],
				quantitySelected: null,
			};
		},

		methods: {
			onChange(redemptionItem) {
				this.quantitySelected = redemptionItem.quantity;
			}
		}
	};
}

export function CardRow() {
	return {
		components: { PointsRedemption },
		template: '<points-redemption :cards="cards" />',

		data() {
			return {
				cards: cards,
			};
		},
	};
}
