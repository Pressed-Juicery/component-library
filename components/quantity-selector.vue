<template>
	<div :class="[$style.root, { [$style.isActive]: value, [$style.isFocused]: hasFocus }]">
		<div v-if="shouldShowInput" :class="$style.inputWrapper">
			<input
				:class="$style.input"
				type="number"
				:value="value"
				ref="input"
				@keydown.enter="submitInput($event)"
				@focus="hasFocus = true"
				@blur="submitInput($event)"
			/>
		</div>

		<div v-else :class="$style.inputWrapper">
			<select :class="$style.select" v-model="value" ref="select">
				<option v-for="(option, index) in options" :value="option" :key="index">
					{{ canUseInput && index === options.length - 1 ? `${option}+` : option }}
				</option>
			</select>

			<div v-if="value" :class="$style.selectOverlay">
				<div @click="() => $refs.select.focus()">{{value}}</div>
				<arrow-down-icon :class="$style.arrowIcon" />
			</div>

			<div v-else :class="$style.defaultButton"><plus-icon /></div>
		</div>
	</div>
</template>

<script>
import ArrowDownIcon from './icons/arrow-down-icon';
import PlusIcon from './icons/plus-icon';

export default {
	components: { ArrowDownIcon, PlusIcon },
	props: {
		quantity: Number,
		canUseInput: {
			type: Boolean,
			default: true,
		},
		options: {
			type: Array,
			default: () => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], // eslint-disable-line no-magic-numbers
		},
	},

	data() {
		return {
			hasFocus: false,
			value: this.quantity,
		};
	},

	computed: {
		lastOption() {
			return this.options[this.options.length - 1];
		},

		shouldShowInput() {
			return this.canUseInput && this.value >= this.lastOption;
		},
	},

	methods: {
		submitInput(event) {
			this.value = Number(event.target.value);
			this.hasFocus = false;

			event.target.blur();
		},
	},

	watch: {
		value() {
			if (Number(this.value) >= this.lastOption) {
				this.$nextTick(() => this.$refs.input.focus());
			}

			this.$emit('change', this.value);
		},

		quantity() {
			this.value = this.quantity;
		},
	},
};
</script>

<style module lang="scss">
	@import '../styles/mixins';
	@import '../styles/variables';

	$button-height: $spacing-08;

	.root {
		display: flex;
		height: $button-height;
		width: $button-height;
		border: 1px solid $gray-30;
		border-radius: 999em;
		cursor: pointer;
	}

	.isActive {
		min-width: 88px;
	}

	.isFocused {
		border: $border-focused;
	}

	.inputWrapper {
		width: 100%;
		position: relative;
	}

	.input, .select {
		-moz-appearance: textfield;
		-webkit-appearance: none;
		appearance: none;
		text-overflow: '';
		outline: none;
		border: 0;
		background: none;
		height: $button-height;
		width: 100%;
	}

	.input::-webkit-outer-spin-button,
	.input::-webkit-inner-spin-button {
		-webkit-appearance: none
	}

	.input {
		text-align: center;
		cursor: default;
	}

	.selectOverlay {
		line-height: $button-height;
		text-align: center;
	}

	.select {
		opacity: 0;
		position: absolute;
		cursor: pointer;
	}

	.arrowIcon {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		right: $spacing-04;
		width: $spacing-04;
		pointer-events: none;
	}

	.defaultButton {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: $button-height;
		height: $button-height;
		pointer-events: none;
	}
</style>
