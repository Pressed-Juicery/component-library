<template>
	<div :class="$style.root">
		<div v-if="showHeader" :class="$style.row">
			<div :class="$style.name">Categories</div>
			<div :class="$style.closeIcon" @click="$emit('close')">
				<circle-close-icon />
			</div>
		</div>

		<div :class="$style.collectionGroup" v-for="collection in collections" :key="collection.id">
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

			<div
				v-for="childCollection in collection.children"
				:key="childCollection.id"
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

	$border-left-value: 3px;
	$collection-margin-offset-value: $spacing-03 + $border-left-value;

	.row {
		display: flex;
		justify-content: space-between;
		margin-bottom: $spacing-07;
	}

	.name {
		@include text-heading-5();
		@include text-bolder();
	}

	.closeIcon {
		cursor: pointer;
	}

	.collectionGroup:not(:last-child) {
		margin-bottom: $spacing-07;
	}

	.collectionItem {
		margin-bottom: $spacing-03;
		margin-left:  -$collection-margin-offset-value;
		padding-left: $spacing-03;
		border-left: $border-left-value solid transparent;
		cursor: pointer;
	}

	.parentCollectionName {
		@include text-bolder();
	}

	.childCollectionName {
		margin-left: $spacing-06 - $collection-margin-offset-value;
	}

	.isActive {
		border-color: $color-primary;
	}

</style>
