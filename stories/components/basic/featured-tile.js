import FeaturedTile from '../../../components/featured-tile.vue';

export default {
	title: 'Components / Basic / FeaturedTile',
	component: FeaturedTile,
};

export function Overview() {
	return {
		components: { FeaturedTile },
		template: '<featured-tile :tile="tile" @selected="handleSelected" />',
		data() {
			return {
				tile: {
					imageUrl: 'https://d3e4ixgvd0ibii.cloudfront.net/shopify/pages/home/home__cleanse-tile.jpg',
					title: 'Test Tile',
					description: 'This is a description of the test tile.',
					categoryId: 'something/somethingelse',
				},
			};
		},
		methods: {
			handleSelected(selectedCategoryId) {
				console.log(selectedCategoryId);
			},
		},
	};
}
