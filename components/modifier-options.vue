<template>
	<div v-if="modifiers">
		<div :class="$style.trigger" @click="isOpen = true">
			<div>{{ triggerTitle }}</div>
			<arrow-down-icon :class="$style.arrow" />
		</div>
		<collapsible-drawer :isOpen="isOpen" :title="drawerTitle" @close="isOpen = false">
			<div :class="$style.group" v-for="(group, index) in modifiers.modifierGroups" :key="index">
				<div :class="$style.groupName">{{ group.name }}</div>
				<div :class="$style.modifier" v-for="(modifier, index) in group.modifiers" :key="index">
					<validated-checkbox
						:label="modifier.name"
						:value="isSelected(modifier)"
						@change="isChecked => select(modifier, isChecked)"
						:disabled="isDisabled(modifier)"
					/>
					<div :class="$style.description">{{ modifier.description }}</div>
				</div>
			</div>
		</collapsible-drawer>
	</div>
</template>

<script>
import ArrowDownIcon from './icons/arrow-down-icon';
import CollapsibleDrawer from './collapsible-drawer';
import ValidatedCheckbox from './validated-checkbox';

export default {
	components: { ArrowDownIcon, CollapsibleDrawer, ValidatedCheckbox },
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
		select(modifier, isChecked) {
			let pendingModifiers = [...(this.selectedModifiers || [])];

			if (isChecked) {
				pendingModifiers.push(modifier);
			} else {
				pendingModifiers = pendingModifiers.filter(pendingModifier => pendingModifier !== modifier);
			}

			this.$emit('change', pendingModifiers);
		},
		isSelected(modifier) {
			return this.selectedModifiers.some(selection => selection === modifier);
		},
		isDisabled(modifier) {
			const isLimitReached = this.selectedModifiers.length >= this.modifiers.maximumCount;

			return !this.isSelected(modifier) && isLimitReached;
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

	.group:not(:last-child) {
		margin-bottom: $spacing-06;
	}

	.groupName {
		@include text-heading-5();
		margin-bottom: $spacing-05;
	}

	.description {
		@include text-body-small();
		@include text-subtle();
		margin-top: -$spacing-06;
		margin-left: $spacing-07;
	}

	.modifier {
		margin: $spacing-05 0;
	}
</style>
