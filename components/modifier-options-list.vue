<template>
	<div>
		<div :class="$style.group" v-for="(group, index) in modifiers.modifierGroups" :key="index">
			<div :class="$style.groupName">{{ group.name }}</div>
			<div :class="$style.modifier" v-for="(modifier, index) in group.modifiers" :key="index">
				<validated-checkbox
					:label="modifier.name"
					:value="isSelected(modifier)"
					@change="isChecked => selectModifier(modifier, isChecked)"
					:disabled="isDisabled(modifier)"
				/>
				<div :class="$style.description">{{ modifier.description }}</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		modifierGroups: Array,
	},

	methods: {
		selectModifier(modifier, isChecked) {
			let pendingModifiers = this.selectedModifiers ? [...this.selectedModifiers] : [];

			if (isChecked) {
				pendingModifiers.push({
					groupName: this.modifiers.groupName,
					name: modifier.name,
				});
			} else {
				// eslint-disable-next-line arrow-body-style
				pendingModifiers = pendingModifiers.filter(pendingModifier => {
					return pendingModifier.groupName !== modifier.groupName && pendingModifier.name !== modifier.name;
				});
			}

			this.$emit('change', pendingModifiers);
		},

		isSelected(modifier) {
			// eslint-disable-next-line arrow-body-style
			return this.selectedModifiers.some(selectedModifier => {
				return selectedModifier.groupName !== modifier.groupName && selectedModifier.name === modifier.name;
			});
		},

		isDisabled(modifier) {
			const isLimitReached = this.selectedModifiers.length >= this.modifiers.maximumCount;

			return !this.isSelected(modifier) && isLimitReached;
		},
	},
};
</script>

<style lang="scss" module>
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
