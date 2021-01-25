import FeaturedItem from '../../../components/featured-item.vue';

export default {
	title: 'Components / Basic / FeaturedItem',
	component: FeaturedItem,
};

export function Overview() {
	return {
		components: { FeaturedItem },
		template: '<featured-item :item="item" @selected="handleSelected" />',
		data() {
			return {
				item: {
					id: '1234567890',
					type: 'category',
					imageUrl: 'https://d3e4ixgvd0ibii.cloudfront.net/shopify/pages/home/home__cleanse-tile.jpg',
					title: 'Item Title',
					description: 'Item description',
				},
			};
		},
		methods: {
			handleSelected(selectedItem) {
				console.log(selectedItem); // eslint-disable-line no-console
			},
		},
	};
}
