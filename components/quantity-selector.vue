<template>
	<div :class="[$style.button, { [$style.isActive]: state }]">
		<span v-if="!state" :class="$style.addButton" @click="value = 1"><circle-plus-icon /></span>
		<div :class="[$style.inputContainer, { [$style.isInputActive] : state === 'input' }]">
			<input v-if="state === 'input'" :class="$style.input"
				type="number"
				ref="input"
				@keydown.enter="submitInput($event)"
				@blur="submitInput($event)" />
			<arrow-down-icon :class="$style.downArrow" />
			<select v-if="state === 'select'" :class="$style.select" v-model="value">
				<option v-for="(option, i) in options" :value="option" :key="i">
					<span v-if="canUseInput && i === (options.length - 1)">{{ option }}+</span>
					<span v-else>{{ option }}</span>
				</option>
			</select>
		</div>
	</div>
</template>

<script>
import CirclePlusIcon from './icons/circle-plus-icon';
import ArrowDownIcon from './icons/arrow-down-icon';

export default {
	components: { CirclePlusIcon, ArrowDownIcon },
	props: {
		quantity: Number,
		canUseInput: {
			type: Boolean,
			default: true,
		},
		options: {
			type: Array,
			// eslint-disable-next-line no-magic-numbers
			default: () => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
		},
	},

	created() {
		this.value = this.quantity || null;
	},

	data() {
		return {
			value: null,
		};
	},

	computed: {
		// eslint-disable-next-line complexity
		state() {
			const lastOption = this.options[this.options.length - 1];
			const shouldShowInput = this.canUseInput && this.value >= lastOption;
			const shouldShowSelect = (this.value && this.value !== lastOption);

			if (shouldShowInput) return 'input';

			if ((this.value && !this.canUseInput) || shouldShowSelect) {
				return 'select';
			}

			return '';
		},
	},

	methods: {
		submitInput(event) {
			const value = parseInt(event.target.value, 10);

			this.value = value;
			this.$refs.input.blur();
		},
	},

	watch: {
		value(val) {
			if (this.canUseInput) {
				if (this.state === 'input' && val === this.options[this.options.length - 1]) {
					this.$nextTick(() => {
						this.$refs.input.value = val;
						this.$refs.input.focus();
					});
				}
			}

			this.$emit('change', this.value);
		},
	},
};
</script>

<style module lang="scss">
	@import '../styles/mixins';

	$selectorGray: #D1D1D1;
	$arrowGray: #c6c6c6;

	.input, .select {
		-moz-appearance: textfield;
		-webkit-appearance: none;
		appearance: none;
		text-indent: 1px;
		text-overflow: '';
		background-color: transparent;
		outline: none;
		border: 0;
		background-image: none;
		background: none;
	}

	.select {
		cursor: pointer;
		width: 100%;
		padding-left: 36px;
		padding-right: 0;
	}

	.input {
		padding-left: 33px;
	}

	.input::-webkit-outer-spin-button,
	.input::-webkit-inner-spin-button {
		-webkit-appearance: none
	}

	.button {
		height: 40px;
		cursor: pointer;
		overflow: hidden;
	}

	.button.isActive {
		width: 90px;
		border: 1px solid $selectorGray;
		border-radius: $spacing-10;
		cursor: default;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.addButton {
		width: $spacing-08;
		height: $spacing-08;
	}

	.inputContainer {
		width: 100%;
		position: relative;
	}

	.inputContainer.isInputActive .downArrow {
		display: none;
	}

	.downArrow {
		position: absolute;
		top: 15px;
		right: 25px;
		height: 6px;
		width: 10px;
		pointer-events: none;
	}
</style>
