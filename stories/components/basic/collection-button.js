import CollectionButton from '../../../components/collection-button.vue';

export default {
	title: 'Components / Basic / CollectionButton',
	component: CollectionButton,
};

export function Overview() {
	return {
		components: { CollectionButton },
		template: '<collection-button :collection="collection" @selected="handleSelected" />',
		data() {
			return {
				collection: {
					id: '1234567890',
					iconUrl: 'https://d3e4ixgvd0ibii.cloudfront.net/shopify/icons/categories/shots-bottom-aligned.svg',
					name: 'Shots',
				},
			};
		},
		methods: {
			handleSelected(selectedCollectionId) {
				console.log(selectedCollectionId);
			},
		},
	};
}
