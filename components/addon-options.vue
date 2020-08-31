<template>
	<div>
		<div :class="$style.trigger" @click="isOpen = true">
			{{ title }}
			<up-carat-icon :class="$style.upArrow" />
		</div>

		<collapsable-drawer :isOpen="isOpen" :title="addonGroup.name" @close="cancelDrawer">
			<validated-checkbox
				v-for="(addon, index) in addonGroup.addons"
				:key="index"
				:label="checkboxLabel(addon)"
				:value="isSelected(addon)"
				@change="select(addon)"
			/>

			<button :class="$style.submit" @click="submit">Submit</button>
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
		addonGroup: {
			type: Object,
			required: true,
		},
		selectedAddons: {
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
			return `${this.addonGroup.name} (${this.selectedAddons.length}/${this.addonGroup.addons.length})`;
		},
	},
	methods: {
		select(value) {
			const index = this.selected.indexOf(value);

			if (index === -1) {
				this.selected.push(value);
			} else {
				this.selected.splice(index, 1);
			}
		},
		cancelDrawer() {
			this.selected = [...this.selectedAddons];
			this.isOpen = false;
		},
		submit() {
			this.$emit('change', this.selected);
			this.isOpen = false;
		},
		isSelected(addon) {
			return Boolean(this.selected.filter(selection => selection === addon).length);
		},
		checkboxLabel(addon) {
			return `${addon.name} (${addon.displayPrice})`;
		},
	},
	watch: {
		selectedAddons(value) {
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

	.upArrow {
		height: $spacing-04;
		width: $spacing-04;
	}

	.submit {
		@include button-large();
	}
</style>
