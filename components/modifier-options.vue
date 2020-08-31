<template>
	<div v-if="modifiers">
		<div :class="$style.trigger" @click="isOpen = true">
			<div>{{ triggerTitle }}</div>
			<arrow-down-icon :class="$style.arrow" />
		</div>
		<collapsable-drawer :isOpen="isOpen" :title="drawerTitle" @close="isOpen = false">
			<div :class="$style.group" v-for="(group, index) in modifiers.modifierGroups" :key="index">
				<div :class="$style.groupName">{{ group.name }}</div>
				<div :class="$style.modifier" v-for="(modifier, index) in group.modifiers" :key="index">
					<validated-checkbox
						:label="modifier.name"
						:value="isSelected(modifier)"
						@change="select(modifier)"
					/>
					<div :class="$style.description">{{ modifier.description }}</div>
				</div>
			</div>
		</collapsable-drawer>
	</div>
</template>

<script>
import ArrowDownIcon from './icons/arrow-down-icon';
import CollapsableDrawer from './collapsible-drawer';
import ValidatedCheckbox from './validated-checkbox';

export default {
	components: { ArrowDownIcon, CollapsableDrawer, ValidatedCheckbox },
	props: {
		modifiers: {
			type: Object,
		},
		selectedModifiers: {
			type: Array,
			required: true,
		},
	},
	data() {
		return {
			isOpen: false,
			selected: [],
		};
	},
	computed: {
		triggerTitle() {
			const groupName = this.modifiers.groupName;
			const selectedCount = this.selectedModifiers.length;
			const maximumCount = this.modifiers.maximumCount;

			return `Select ${groupName} (${selectedCount}/${maximumCount})`;
		},
		drawerTitle() {
			const groupName = this.modifiers.groupName;
			const selectedCount = this.selectedModifiers.length;
			const maximumCount = this.modifiers.maximumCount;

			return `Select up to ${maximumCount} ${groupName} (${selectedCount}/${maximumCount})`;
		},
	},
	methods: {
		select(modifier) {
			const index = this.selected.indexOf(modifier);

			if (index === -1) {
				if (this.selectedModifiers.length < this.modifiers.maximumCount) {
					this.selected.push(modifier);
				}
			} else {
				this.selected.splice(index, 1);
			}

			this.$emit('change', this.selected);
		},
		isSelected(modifier) {
			return this.selected.some(selection => selection === modifier);
		},
	},
	watch: {
		selectedModifiers(value) {
			this.selected = [...value];
		},
	},
};
</script>

<style lang="scss" module>
	@import "../styles/mixins";
	@import "../styles/variables";

	.trigger {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: $spacing-03 $spacing-07 $spacing-03 $spacing-06;
		border: $border-width solid $border-color-light;
		border-radius: $border-radius;
	}

	.arrow {
		height: $spacing-04;
		width: $spacing-04;
	}

	.group:not(:first-child) {
		margin-top: $spacing-06;
	}

	.groupName {
		@include text-heading-5();
		margin-bottom: $spacing-05;
	}

	.description {
		margin-top: -$spacing-06;
		margin-left: $spacing-07;
		@include text-body-small();
		@include text-subtle();
	}

	.modifier {
		position: relative;
		margin: $spacing-05 0;
	}
</style>