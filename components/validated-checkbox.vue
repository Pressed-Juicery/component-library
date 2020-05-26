<template>
	<span :class="$style.root" @click="onClick()">
		<input :class="$style.input"
		       type="checkbox"
		       :id="id"
		       v-bind="$attrs"
		       v-model="isChecked"
		       ref="input"
		       @blur="validate()" />
		<span :class="$style.overlay">
			<checkmark-white-icon v-if="isChecked" :class="$style.icon" />
		</span>

		<span v-if="error" :class="$style.error" :for="id">{{ error }}</span>
	</span>
</template>

<script>
import CheckmarkWhiteIcon from './icons/checkmark-white-icon';

import { validate } from '../utilities/validate';

export default {
	components: { CheckmarkWhiteIcon },

	model: {
		prop: 'isChecked',
		event: 'change',
	},

	props: {
		id: String,
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
		errorMessage(value) { this.error = value },
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

	.root {
		position: relative;
		vertical-align: middle;
	}

	.input {
		width: $spacing-06;
		height: $spacing-06;
		opacity: 0;
	}

	.overlay {
		position: absolute;
		top: 0;
		left: 0;
		height: $spacing-06;
		width: $spacing-06;
		border: $border;
		border-radius: $border-radius;
		cursor: pointer;
	}

	.icon {
		display: none;
	}

	.input:checked + .overlay {
		border-color: $gray-90;
		background-color: $gray-90;

		.icon {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			display: inline-block;
		}
	}

	.error {
		@include text-error();
	}
</style>

