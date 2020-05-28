<template>
	<div :class="[$style.button, { [$style.isActive]: !showPlusIcon || showInput }]">
		<svg v-if="showPlusIcon" @click="setQuantity" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
			<g fill="none" fill-rule="evenodd" stroke="#D1D1D1">
				<circle cx="20" cy="20" r="19.5"/>
				<path stroke-linecap="round" stroke-width="2" d="M16 20h8m-4-4v8"/>
			</g>
		</svg>
		<div :class="[$style.inputContainer, { [$style.showInput] : showInput }]">
			<input v-if="showInput" @keydown.enter="submitInput" @focus="editing = true" @blur="editing = false" type="number" :ref="`bulk-input-${id}`" v-model="value"/>
			<select v-if="!showPlusIcon && !showInput" :class="$style.select" v-model="value">
				<option v-for="(option, i) in options" :value="option" :key="i">{{ option }}</option>
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
				'10+',
			],
		},
	},

	created() {
		this.value = this.quantity || null;
	},

	data() {
		return {
			value: null,
			editing: false,
		};
	},

	computed: {
		showInput() {
			return (this.value > 9 || this.value === '10+') || this.editing
		},

		showPlusIcon(){
			return !this.quantity && !this.value && !this.editing;
		},
	},

	methods: {
		setQuantity() {
			this.value = 1;
		},

		submitInput() {
			this.editing = false;
			this.$refs[`bulk-input-${this.id}`].blur();
			this.$emit('change', parseInt(this.value));
		},
	},

	watch: {
		value(val) {
			if (val === '10+'){
				this.value = 10;
				this.$nextTick(() => this.$refs[`bulk-input-${this.id}`].focus());
			}

			if(!this.editing){
				this.$emit('change', parseInt(this.value));
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

	.inputContainer {
		width: 100%;
		position: relative;
	}

	.inputContainer.showInput:before,
	.inputContainer.showInput:after {
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
