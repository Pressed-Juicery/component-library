<template>
	<div v-if="addonGroup">
		<div :class="$style.trigger" @click="openDrawer">
			{{ title }}
			<up-carat-icon :class="$style.upArrow" />
		</div>

		<collapsable-drawer :isOpen="isOpen" :title="addonGroup.name" @close="closeDrawer">
			<validated-checkbox
				v-for="(addon, index) in addonGroup.addons"
				:key="index"
				:label="checkboxLabel(addon)"
				:value="isSelected(addon)"
				@change="isChecked => onChange(addon, isChecked)"
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
		},
		selectedAddons: {
			type: Array,
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
			const selectedAddonCount = (this.selectedAddons || []).length;
			const totalAvailableAddons = this.addonGroup && this.addonGroup.addons.length;

			return `${this.addonGroup.name} (${selectedAddonCount}/${totalAvailableAddons})`;
		},
	},
	methods: {
		openDrawer() {
			this.pendingAddons = [...(this.selectedAddons || [])];
			this.isOpen = true;
		},
		closeDrawer() {
			this.isOpen = false;
		},
		checkboxLabel(addon) {
			return `${addon.name} (${addon.displayPrice})`;
		},
		isSelected(addon) {
			return this.pendingAddons.some(pendingAddon => pendingAddon === addon);
		},
		onChange(addon, isChecked) {
			if (isChecked) {
				this.pendingAddons.push(addon);
			} else {
				this.pendingAddons = this.pendingAddons.filter(pendingAddon => pendingAddon !== addon);
			}
		},
		submit() {
			this.$emit('submit', this.pendingAddons);
			this.closeDrawer();
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
