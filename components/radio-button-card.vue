<template>
	<label :class="$style.root">
		<card>
			<span :class="$style.content">
				<span :class="$style.primaryContent"><slot /></span>
				<span v-if="$slots.secondary" :class="$style.secondaryContent"><slot name="secondary" /></span>
				<radio-button :class="$style.radioButton" :value="value" v-model="model" />
			</span>
		</card>
	</label>
</template>

<script>
import Card from './card';
import RadioButton from './radio-button';

export default {
	components: { Card, RadioButton },

	model: {
		prop: 'selectedValue',
		event: 'change',
	},

	props: {
		selectedValue: {
			required: true,
		},
		value: {
			required: true,
		},
	},

	computed: {
		model: {
			get() { return this.selectedValue },
			set(value) { this.$emit('change', value) },
		},
	},
};
</script>

<style module lang="scss">
@import '../styles/variables';

.root {
	display: block;
	margin-bottom: $spacing-06;
	cursor: pointer;
}

.content {
	display: flex;
	position: relative;
}

.primaryContent {
	flex: 1;
	margin-right: $spacing-06;
	word-break: break-word;
}

.secondaryContent {
	margin-bottom: $spacing-08;
}

.radioButton {
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	right: 0;
}
</style>
