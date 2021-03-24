import CollectionsMenu from '../../../components/collections-menu';

export default {
	title: 'Components / Basic / CollectionsMenu',
	component: CollectionsMenu,
};

const collections = [{
	id: '04b430d2-7183-4142-8622-dd6948604b22',
	name: 'Cleanses & Bundles',
	handle: 'cleanses-and-bundles',
	children: [{
		id: 'ae24b4df-2d4e-4d95-8b4a-a93a88993fe2',
		name: 'Half Day Fasts',
		handle: 'half-day-fasts',
	}, {
		id: '5e579779-338f-476b-9bb9-288d26d1930c',
		name: 'Full Day Fasts',
		handle: 'full-day-fasts',
	}],
}, {
	id: '57e6ca4a-59dd-43dc-a313-2b394bf958c7',
	name: 'Cold Pressed Juices',
	handle: 'cold-pressed-juices',
	children: [{
		id: 'd293d33c-bcaf-4107-9b68-e5c0c2b7ee94',
		name: 'Greens',
		handle: 'greens',
	}, {
		id: '736881b5-fdb0-4ed4-a279-a1e850e2cde5',
		name: 'Roots',
		handle: 'roots',
	}, {
		id: '9780737d-bcf6-4e84-b431-0bc7d888d08e',
		name: 'Lemonades',
		handle: 'lemonades',
	}],
}];

export function OverviewWithoutSelectedCollectionHandle() {
	return {
		components: { CollectionsMenu },
		template: `
				<collections-menu
					style="padding: 24px;"
					:collections="collections"
					:selectedCollectionHandle="selectedCollectionHandle"
					@change="onChange"
					@close="onClose"
				/>
			`,
		data() {
			return {
				collections,
				selectedCollectionHandle: null,
			};
		},
		methods: {
			onChange(collectionHandle) {
				this.selectedCollectionHandle = collectionHandle;
			},
			onClose() {
				// eslint-disable-next-line no-console
				console.log('Closed');
			},
		},
	};
}

export function HiddenHeaderWithSelectedCollectionHandle() {
	return {
		components: { CollectionsMenu },
		template: `
				<collections-menu
					style="padding: 24px;"
					:collections="collections"
					:selectedCollectionHandle="selectedCollectionHandle"
					:showHeader="false"
					@change="onChange"
				/>
			`,
		data() {
			return {
				collections,
				selectedCollectionHandle: 'roots',
			};
		},
		methods: {
			onChange(collectionHandle) {
				this.selectedCollectionHandle = collectionHandle;
			},
		},
	};
}
