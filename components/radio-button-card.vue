<template>
	<label class="radio-button-card">
		<card>
			<span class="radio-button-card__content">
				<span class="radio-button-card__left-content"><slot name="main-content" /></span>
				<span class="radio-button-card__top-right-content"><slot name="top-right-content" /></span>
				<radio-button class="radio-button-card__radio-button" :item="item" v-model="selectedItem" />
			</span>
		</card>
	</label>
</template>

<script>
import Card from './card';
import RadioButton from './radio-button';

export default {
	components: { Card, RadioButton },

	props: {
		value: {
			type: Object,
			required: true,
		},
		item: {
			type: Object,
			required: true,
		},
	},

	computed: {
		selectedItem: {
			get() {
				return this.value;
			},
			set() { this.$emit('input', this.item) },
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

.radio-button-card__left-content {
	flex: 1;
	margin-right: $spacing-06;
}

.radio-button-card__top-right-content {
	margin-bottom: $spacing-08;
}

.radio-button-card__radio-button {
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	right: 0;
}
</style>
