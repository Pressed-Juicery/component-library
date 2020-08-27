<template>
	<div>
		<div :class="$style.trigger" @click="toggleDrawer">
			{{ title }}
			<arrow-down-icon :class="$style.arrow" />
		</div>
		<collapsable-drawer
			:isOpen="isOpen"
			:title="addonGroup.name"
			@close="cancelDrawer"
		>
			<validated-checkbox
				v-for="(addon, index) in addonGroup.addons"
				:key="index"
				:label="checkboxLabel(addon)"
				:value="isSelected(addon)"
				@change="select(addon)"
			/>
			<button
				:class="$style.submit"
				@click="submit"
			>
				Submit
			</button>
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
		addonGroup: {
			type: Object,
			required: true,
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
			return `${this.addonGroup.name} (${this.selection.length}/${this.addonGroup.addons.length})`;
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
		toggleDrawer() {
			this.isOpen = !this.isOpen;
		},
		cancelDrawer() {
			this.selected = [...this.selection];
			this.toggleDrawer();
		},
		submit() {
			this.$emit('change', this.selected);
			this.toggleDrawer();
		},
		isSelected(addon) {
			return Boolean(this.selected.filter(selection => selection === addon).length);
		},
		checkboxLabel(addon) {
			return `${addon.name} (${addon.displayPrice})`;
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

	.submit {
		@include button-large();
	}
</style>
