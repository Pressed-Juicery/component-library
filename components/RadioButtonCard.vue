<template>
	<label class="radio-button-card">
		<span class="radio-button-card__left-content"><slot name="main-content" /></span>
		<span class="radio-button-card__top-right-content"><slot name="top-right-content" /></span>

		<input class="radio-button-card__input"
		       type="radio"
		       :value="item"
		       v-model="radioButtonValue" />
		<span class="radio-button-card__radio-button" />
	</label>
</template>

<script>
export default {
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
		radioButtonValue: {
			get: function () {
				return this.value;
			},

			set: function () {
				this.$emit('input', this.item);
			},
		},
	},
};
</script>

<style scoped lang="scss">
@import '../styles/mixins';
@import '../styles/variables';

$card-padding: $spacing-05;
$card-padding-mobile: $spacing-03;

.radio-button-card {
	@include card;

	position: relative;
	display: flex;
	justify-content: space-between;
	margin-bottom: $spacing-06;
	padding: $card-padding;
}

.radio-button-card__left-content {
	flex: 6 2;
	margin-right: $spacing-05;
}

.radio-button-card__top-right-content {
	margin-bottom: $spacing-08;
}

.radio-button-card__input {
	display: none;
}

.radio-button-card__radio-button {
	@include card-radio-button;

	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	right: $card-padding;
	display: inline-block;
}

.radio-button-card__input:checked + .radio-button-card__radio-button {
	background-color: $gray-50;
}

@media (max-width: 400px) {
	.radio-button-card {
		padding: $card-padding-mobile;
	}

	.radio-button-card__radio-button {
		right: $card-padding-mobile;
	}
}
</style>
