<template>
	<div class="radio-button-card">
		<div class="radio-button-card__left-content">
			<div class="radio-button-card__title"><slot name="title" /></div>
			<div class="radio-button-card__content"><slot name="content" /></div>
			<div class="radio-button-card__details"><slot name="details" /></div>
		</div>

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
				get: function() {
					return this.value;
				},

				set: function() {
					this.$emit("input", this.id);
				}
			},
		},
	}
</script>

<style scoped lang="scss">
	@import '../styles/mixins';
	@import '../styles/variables';

	$card-padding: $spacing-05;
	$card-padding-mobile: $spacing-03;
	$font-size-card: $font-size-04;
	$font-size-card-mobile: $font-size-default;

	.radio-button-card {
		@include card;

		position: relative;
		display: flex;
		justify-content: space-between;
		max-width: 550px;
		margin-bottom: $spacing-06;
		padding: $card-padding;
	}

	/*.radio-button-card p {*/
	/*	line-height: 1;*/
	/*}*/

	.radio-button-card__left-content {
		flex: 6 2;
		margin-right: $spacing-05;
	}

	.radio-button-card__title {
		//@extend .text-body;

		margin-bottom: $spacing-03;
		font-size: $font-size-card;
		font-weight: $font-weight-bold;
	}

	.radio-button-card__extraInformation > * {
		//@extend .text-body;

		font-size: $font-size-card;
		font-weight: $font-weight-bold;
	}

	.radio-button-card__content {
		//@extend .text-body;

		//line-height: 1;
		font-size: $font-size-card;
		//font-weight: $font-weight-normal;
	}

	.radio-button-card__details > * {
		//@extend .text-body;

		//font-size: $font-size-body;
		margin-top: $spacing-03;
		//font-weight: $font-weight-normal;
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

	.radio-button-card__input:checked + label {
		background-color: $gray-50;
	}

	@media (max-width: 400px) {
		.radio-button-card {
			padding: $card-padding-mobile;
		}

		.radio-button-card__title {
			font-size: $font-size-card-mobile;
		}

		.radio-button-card__label {
			right: $card-padding-mobile;
		}

		.radio-button-card__extraInformation > * {
			font-size: $font-size-card-mobile;
		}

		.radio-button-card__content {
			font-size: $font-size-card-mobile;
		}

		.radio-button-card__details > * {
			font-size: $font-size-02;
		}
	}
</style>
