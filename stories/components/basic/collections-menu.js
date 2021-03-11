import CollectionsMenu from '../../../components/collections-menu';

export default {
	title: 'Components / Basic / CollectionsMenu',
	component: CollectionsMenu,
};

const collectionsMenuData = {
	collections: [{
		name: 'Cleanses & Bundles',
		handle: 'cleanses-and-bundles',
		children: [{
			name: 'Half Day Fasts',
			handle: 'half-day-fasts',
		}, {
			name: 'Full Day Fasts',
			handle: 'full-day-fasts',
		}],
	}, {
		name: 'Cold Pressed Juices',
		handle: 'cold-pressed-juices',
		children: [{
			name: 'Greens',
			handle: 'greens',
		}, {
			name: 'Roots',
			handle: 'roots',
		}, {
			name: 'Lemonades',
			handle: 'lemonades',
		}],
	}],
	selectedCollectionHandle: 'roots',
};

export function Overview() {
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
			return collectionsMenuData;
		},
		methods: {
			onChange(collectionHandle) {
				this.selectedCollectionHandle = collectionHandle;
			},
			onClose() {
				console.log('Closed');
			},
		},
	};
}

export function HiddenHeader() {
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
			return collectionsMenuData;
		},
		methods: {
			onChange(collectionHandle) {
				this.selectedCollectionHandle = collectionHandle;
			},
		},
	};
}
