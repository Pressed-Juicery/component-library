<template>
	<div :class="[$style.button, { [$style.isActive]: state }]">
		<svg v-if="!state" :class="$style.addButton" @click="value = 1" xmlns="http://www.w3.org/2000/svg">
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
			<svg :class="$style.downArrow" viewBox="0 0 10 6" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
					<!-- Generator: Sketch 64 (93537) - https://sketch.com -->
					<title>carrot - right</title>
					<desc>Created with Sketch.</desc>
					<g id="Symbols" stroke="none" stroke-width="1"
					fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
							<g id="Quantity-Filled"
							transform="translate(-50.000000, -19.000000)" stroke="#C6C6C6" stroke-width="2">
									<g id="carrot---right" transform="translate(51.000000, 17.000000)">
											<path d="M6,5 L2,9 M6,5 L2,1"
											id="Combined-Shape"
											transform="translate(4.000000, 5.000000)
											rotate(-270.000000) translate(-4.000000, -5.000000)">
											</path>
									</g>
							</g>
					</g>
			</svg>
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
export default {
	props: {
		id: Number,
		quantity: Number,
		canUseInput: {
			type: Boolean,
			default: true,
		},
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
		/* eslint-disable complexity */
		state() {
			const lastOption = this.options[this.options.length - 1];
			const shouldShowInput = (this.value === lastOption || this.value > this.options[this.options.length - 2]);
			const shouldShowSelect = (this.value && this.value !== lastOption);

			if (this.canUseInput && shouldShowInput) {
				return 'input';
			}

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
			this.$refs[`bulk-input-${this.id}`].blur();
			this.$emit('change', this.value);
		},
	},

	watch: {
		value(val) {
			if (this.canUseInput) {
				if (this.state === 'input' && val === this.options[this.options.length - 1]) {
					this.$nextTick(() => {
						this.$refs[`bulk-input-${this.id}`].value = val;
						this.$refs[`bulk-input-${this.id}`].focus();
					});
				}
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
		cursor: pointer;
		width: 100%;
		padding-left: 36px;
		padding-right: 0;
	}

	input {
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

	.inputContainer.isInputActive .downArrow {
		display: none;
	}

	.downArrow {
		position: absolute;
		top: 15px;
		right: 30px;
		height: 6px;
		width: 10px;
		pointer-events: none;
	}

</style>
