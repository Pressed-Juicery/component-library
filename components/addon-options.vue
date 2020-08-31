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
				@change="onChange(addon)"
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
			pendingAddons: [],
		};
	},
	computed: {
		title() {
			return `${this.addonGroup.name} (${this.selectedAddons.length}/${this.addonGroup.addons.length})`;
		},
	},
	methods: {
		onChange(addon) {
			const index = this.pendingAddons.indexOf(addon);

			if (index === -1) {
				this.pendingAddons.push(addon);
			} else {
				this.pendingAddons.splice(index, 1);
			}
		},
		cancelDrawer() {
			this.pendingAddons = [...this.selectedAddons];
			this.isOpen = false;
		},
		submit() {
			this.$emit('change', this.pendingAddons);
			this.isOpen = false;
		},
		isSelected(addon) {
			return Boolean(this.pendingAddons.filter(selection => selection === addon).length);
		},
		checkboxLabel(addon) {
			return `${addon.name} (${addon.displayPrice})`;
		},
	},
	watch: {
		selectedAddons(value) {
			this.pendingAddons = [...value];
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
