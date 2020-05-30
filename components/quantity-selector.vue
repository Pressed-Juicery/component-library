<template>
	<div :class="[$style.button, { [$style.isActive]: state !== 'inactive' }]">
		<div v-if="state === 'input'" :class="$style.inputContainer">
			<input
				:class="$style.input"
				type="number"
				ref="input"
				@keydown.enter="submitInput($event)"
				@blur="submitInput($event)"
			/>
		</div>

		<div v-else-if="state === 'select'" :class="$style.inputContainer">
			<arrow-down-icon :class="$style.downArrow" />
			<select :class="$style.select" v-model="value">
				<option v-for="(option, i) in options" :value="option" :key="i">
					<span v-if="canUseInput && i === (options.length - 1)">{{ option }}+</span>
					<span v-else>{{ option }}</span>
				</option>
			</select>
		</div>

		<span v-else :class="$style.addButton" @click="value = 1"><circle-plus-icon /></span>
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
			default: () => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], // eslint-disable-line no-magic-numbers
		},
	},

	data() {
		return {
			value: this.quantity,
		};
	},

	computed: {
		state() {
			const lastOption = this.options[this.options.length - 1];
			const shouldShowInput = this.canUseInput && this.value >= lastOption;
			const canShowSelect = this.value;

			if (shouldShowInput) return 'input';
			if (canShowSelect) return 'select';

			return 'inactive';
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

	.downArrow {
		position: absolute;
		top: 15px;
		right: 25px;
		height: 6px;
		width: 10px;
		pointer-events: none;
	}
</style>
