<template>
	<div :class="[$style.button, { [$style.isActive]: state }]">
		<svg v-if="!state" :class="$style.addButton" @click="setQuantity" xmlns="http://www.w3.org/2000/svg">
			<g fill="none" fill-rule="evenodd" stroke="#D1D1D1">
				<circle cx="20" cy="20" r="19.5"/>
				<path stroke-linecap="round" stroke-width="2" d="M16 20h8m-4-4v8"/>
			</g>
		</svg>
		<div :class="[$style.inputContainer, { [$style.isInputActive] : state === 'input' }]">
			<input v-if="state === 'input'"
				type="number"
				:ref="`bulk-input-${id}`"
				@keydown.enter="submitInput($event)"
				@blur="submitInput($event)" />
			<select v-if="state === 'select'" :class="$style.select" v-model="value">
				<option v-for="(option, i) in options" :value="option" :key="i">
					<span v-if="i === (options.length - 1)">{{ option }}+</span>
					<span v-else>{{ option }}</span>
				</option>
			</select>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		id: Number,
		quantity: Number,
		options: {
			type: Array,
			/* eslint-disable no-magic-numbers */
			default: () => [
				0,
				1,
				2,
				3,
				4,
				5,
				6,
				7,
				8,
				9,
				10,
			],
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

		state() {
			if (this.value === this.options[this.options.length-1] || this.value > 9) {
				return 'input';
			}
			else if (this.value && this.value !== this.options[this.options.length-1]) {
				return 'select';
			}
			else {
				return '';
			}
		},
	},

	methods: {
		setQuantity() {
			this.value = 1;
		},

		submitInput(event) {
			const value = parseInt(event.target.value, 10);
			this.value = value;
			this.$refs[`bulk-input-${this.id}`].blur();
			this.$emit('change', this.value);
		},
	},

	watch: {
		value(val) {
			if (this.state === 'input' && val === 10) {
				this.$nextTick(() => {
					this.$refs[`bulk-input-${this.id}`].value = val;
					this.$refs[`bulk-input-${this.id}`].focus()
				});
			}
		},
	},
};
</script>

<style module lang="scss">
	@import '../styles/mixins';

	$selectorGray: #D1D1D1;
	$arrowGray: #c6c6c6;

	input, select {
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

	select {
		width: 100%;
		padding-left: 38px;
		padding-right: 0;
	}

	input {
		-moz-appearance: none;
		-webkit-appearance: none;
		appearance: none;
		padding-left: 33px;
	}

	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
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

	.inputContainer.isInputActive:before,
	.inputContainer.isInputActive:after {
		display: none;
	}

	.inputContainer:before {
		content: '';
		position: absolute;
		top: 13px;
		right: 30px;
		height: 10px;
		width: 3px;
		transform: rotate(-45deg);
		background-color: $arrowGray;
		pointer-events: none;
	}

	.inputContainer:after {
		content: '';
		position: absolute;
		top: 13px;
		right: 25px;
		height: 10px;
		width: 3px;
		transform: rotate(45deg);
		background-color: $arrowGray;
		pointer-events: none;
	}

</style>
