<template>
	<label class="radio-button-card">
		<card>
			<span class="radio-button-card__content">
				<span class="radio-button-card__primary-content"><slot /></span>
				<span class="radio-button-card__secondary-content"><slot name="secondary" /></span>
				<radio-button class="radio-button-card__radio-button" :value="value" v-model="model" />
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

<style scoped lang="scss">
@import '../styles/variables';

.radio-button-card {
	display: block;
	margin-bottom: $spacing-06;
	cursor: pointer;
}

.radio-button-card__content {
	display: flex;
	position: relative;
}

.radio-button-card__primary-content {
	flex: 1;
	margin-right: $spacing-06;
}

.radio-button-card__secondary-content {
	margin-bottom: $spacing-08;
}

.radio-button-card__radio-button {
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	right: 0;
}
</style>
