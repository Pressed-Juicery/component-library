<template>
	<div :class="$style.root">
		<div :class="$style.column" @click="updateValue(quantity > 0 ? (quantity - 1) : 0)">
			<minus-icon />
		</div>

		<div :class="$style.column">
			<input
				:class="$style.input"
				type="number"
				ref="input"
				v-model="inputQuantity"
				@blur="onBlur"
			/>
		</div>

		<div :class="$style.column" @click="updateValue(quantity + 1)">
			<plus-icon-black />
		</div>
	</div>
</template>

<script>
import MinusIcon from './icons/minus-icon';
import PlusIconBlack from './icons/plus-icon-black';
import { debounce } from '../utilities/debounce';

const DEBOUNCE_TIMEOUT = 300;

export default {
	components: { MinusIcon, PlusIconBlack },

	props: {
		value: {
			type: Number,
			default: 0,
		},
	},

	data() {
		return {
			quantity: 0,
			debouncedEmit: debounce(value => this.$emit('input', value), DEBOUNCE_TIMEOUT),
		};
	},

	computed: {
		inputQuantity: {
			get() {
				return this.quantity;
			},
			set(value) {
				const isBlank = !value && value !== 0;
				const sanitizedValue = Math.abs(Math.floor(value));
				const newValue = isBlank ? null : sanitizedValue;

				// Prevent the display value from differing from the model value.
				// This happens when the model value before and after the input change are the same
				// since Vue thinks a rerender is not required.
				if (newValue !== this.$refs.input.value) this.$refs.input.value = newValue;

				this.updateValue(newValue);
			},
		},
	},

	watch: {
		value: {
			immediate: true,
			handler(value) {
				this.quantity = value;
			},
		},
	},

	methods: {
		updateValue(value) {
			this.quantity = value;
			this.debouncedEmit(value);
		},
		onBlur() {
			if (!this.quantity && this.quantity !== 0) this.updateValue(0);
		},
	},
};
</script>

<style lang='scss' module>
	@import "../styles/variables";

	$quantity-selector-max-width: $spacing-08 + $spacing-12;
	$quantity-selector-border: 1px solid $goldenrod-light;

	.root {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		border-radius: 999em;
		border: $quantity-selector-border;
		max-width: $quantity-selector-max-width;
		background-color: $white;
	}

	.column {
		display: flex;
		align-items: center;
		justify-content: center;

		&:first-child {
			border-right: $quantity-selector-border;
		}

		&:last-child {
			border-left: $quantity-selector-border;
		}
	}

	.input {
		border: none;
		text-align: center;

		&::-webkit-outer-spin-button,
		&::-webkit-inner-spin-button {
			-webkit-appearance: none;
			margin: 0;
		}

		&[type=number] {
			-moz-appearance: textfield;
		}
	}
</style>
