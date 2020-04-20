<template>
	<div class="radio-button-card">
		<div class="radio-button-card__extraInformation"><slot name="extraInformation" /></div>

		<input class="radio-button-card__input"
		       type="radio"
		       :value="id"
		       v-model="radioButtonValue"
		       :checked="id === value"
		       :id="id" />
		<label class="radio-button-card__label" :for="id" />
	</div>
</template>

<script>
export default {
	props: {
		value: {
			type: String,
			required: true,
		},
		id: {
			type: String,
			required: true,
		},
	},

	computed: {
		radioButtonValue: {
			get: function () {
				return this.value;
			},

			set: function () {
				this.$emit('input', this.id);
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
	max-width: 550px;
	margin-bottom: $spacing-06;
	padding: $card-padding;
}

.radio-button-card__left-content {
	flex: 6 2;
	margin-right: $spacing-05;
}

}

.radio-button-card__input {
	display: none;
	width: 0;
}

.radio-button-card__label {
	@include card-radio-button;

	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	right: $card-padding;
	display: inline-block;
}

.radio-button-card__input:checked + .radio-button-card__label {
	background-color: $gray-50;
}

@media (max-width: 400px) {
	.radio-button-card {
		padding: $card-padding-mobile;
	}

	.radio-button-card__label {
		right: $card-padding-mobile;
	}
}
</style>
