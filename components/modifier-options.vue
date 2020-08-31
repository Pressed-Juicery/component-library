<template>
	<div v-if="modifiers">
		<div :class="$style.trigger" @click="toggleDrawer">
			<div>{{ title }}</div>
			<up-carat-icon :class="$style.arrow" />
		</div>
		<collapsable-drawer
			:isOpen="isOpen"
			:title="drawerTitle"
			@close="toggleDrawer"
		>
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
import CollapsableDrawer from './collapsible-drawer';
import UpCaratIcon from './icons/up-caret-icon';
import ValidatedCheckbox from './validated-checkbox';

export default {
	components: { CollapsableDrawer, UpCaratIcon, ValidatedCheckbox },
	props: {
		modifiers: {
			type: Object,
		},
		selection: {
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
		title() {
			return `Select
			${this.modifiers.groupName}
			(${this.selection.length}/
				${this.modifiers.maximumCount})`;
		},
		drawerTitle() {
			return `Select up to 3
			${this.modifiers.groupName}
			(${this.selection.length}/
				${this.modifiers.maximumCount})`;
		},
	},
	methods: {
		select(value) {
			const index = this.selected.indexOf(value);

			if (index === -1) {
				if (this.selection.length < this.modifiers.maximumCount) {
					this.selected.push(value);
				}
			} else {
				this.selected.splice(index, 1);
			}

			this.$emit('change', this.selected);
		},
		toggleDrawer() {
			this.isOpen = !this.isOpen;
		},
		isSelected(modifier) {
			return Boolean(this.selected.filter(selection => selection === modifier).length);
		},
	},
	watch: {
		selection(value) {
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
