<template>
	<div :class="$style.root">
		<div v-if="showHeader" :class="$style.row">
			<div :class="$style.name">Categories</div>
			<div @click="$emit('close')">
				<circle-close-icon />
			</div>
		</div>

		<div v-for="collection in collections" :key="collection.id">
			<div
				:class="[
					$style.parentCollectionName,
					$style.collectionItem,
					{ [$style.isActive]: isActive(collection.handle) }
				]"
				@click="$emit('change', collection.handle)"
			>
				{{ collection.name }}
			</div>

			<div v-for="childCollection in collection.children" :key="childCollection.id">
				<div
					:class="[
						$style.childCollectionName,
						$style.collectionItem,
						{ [$style.isActive]: isActive(childCollection.handle) }
					]"
					@click="$emit('change', childCollection.handle)"
				>
					{{ childCollection.name }}
				</div>
			</div>
		</div>

	</div>
</template>

<script>
import CircleCloseIcon from './icons/circle-close-icon';

export default {
	components: { CircleCloseIcon },

	props: {
		collections: {
			type: Array,
			required: true,
		},

		selectedCollectionHandle: {
			type: String,
		},

		showHeader: {
			type: Boolean,
			default: true,
		},
	},

	methods: {
		isActive(handle) {
			return this.selectedCollectionHandle === handle;
		},
	},

};
</script>

<style lang='scss' module>
	@import '../styles/variables';
	@import '../styles/mixins';

	.row {
		display: flex;
		justify-content: space-between;
		margin-bottom: $spacing-07;
	}

	.name {
		@include text-heading-5();
	}

	.collectionItem {
		margin-left: -$spacing-03;
		margin-bottom: $spacing-03;
		padding-left: $spacing-03;
		border-left: 3px solid transparent;
		cursor: pointer;
	}

	.parentCollectionName {
		@include text-bolder();
	}

	.childCollectionName {
		margin-left: $spacing-06;
	}

	.isActive {
		border-color: $color-primary;
	}

</style>
