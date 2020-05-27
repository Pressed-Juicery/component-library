<template>
	<div>
		<div :class="$style.wrapper">
			<span :class="[$style.checkbox, { [$style.isChecked]: isChecked }]" @click="onClick()">
				<check-mark-white-icon :class="$style.icon" />
			</span>

			<label :class="$style.label" :for="id">{{ label }}</label>
		</div>

		<div :class="$style.error">{{ error }}</div>

		<input
			:class="$style.input"
			type="checkbox"
			:id="id"
			v-bind="$attrs"
			v-model="isChecked"
			ref="input"
			@blur="validate()"
		/>
	</div>
</template>

<script>
import CheckMarkWhiteIcon from './icons/check-mark-white-icon';

import { getRandom } from '../utilities/get-random';
import { validate } from '../utilities/validate';

export default {
	components: { CheckMarkWhiteIcon },

	model: {
		prop: 'value',
		event: 'change',
	},

	props: {
		label: {
			type: String,
			required: true,
		},
		value: {
			type: Boolean,
			default: false,
		},
		rules: {
			type: Array,
			default: () => [],
		},
	},

	data() {
		return {
			id: getRandom(),
			isLazy: true,
			error: null,
		};
	},

	computed: {
		isChecked: {
			get() { return this.value },
			set(value) { this.$emit('change', value) },
		},
	},

	watch: {
		isChecked() { this.lazilyValidate() },
		rules() { this.lazilyValidate() },
	},

	methods: {
		onClick() {
			if (this.id || !this.$refs.input.labels.length) {
				this.isChecked = !this.isChecked;
			}
		},

		lazilyValidate() {
			if (!this.isLazy) this.validate();
		},

		validate() {
			this.isLazy = false;

			return validate(this.value, this.rules)
				.then(error => {
					this.error = error;

					return error;
				});
		},

		isValid() {
			return this.validate().then(hasError => !hasError);
		},
	},
};
</script>

<style module lang="scss">
	@import '../styles/mixins';
	@import '../styles/variables';

	.wrapper {
		display: flex;
		align-items: center;
	}

	.label {
		@include text-bold();
		margin-left: $spacing-03;
	}

	.input {
		display: none;
	}

	.checkbox {
		display: block;
		height: $spacing-06;
		width: $spacing-06;
		border: $border-light;
		border-radius: $border-radius;
		cursor: pointer;
		position: relative;
	}

	.icon {
		display: none;
	}

	.isChecked {
		border-color: $color-primary;
		background-color: $color-primary;

		.icon {
			display: block;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}
	}

	.error {
		@include text-error();
		margin-bottom: $spacing-06;
	}
</style>

