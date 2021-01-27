<template>
	<validated-component
		:id="id"
		:label="label"
		:label-helper="labelHelper"
		:help-text="helpText"
		:error-message="errorMessage"
		:value="model"
		:rules="rules"
		:isEager="isEager"
		ref="validatedComponent"
	>
		<input v-if="isAddressAutocompleteInput" id="address-autocomplete" v-bind="$attrs" v-model="model" @blur="isEager = true">

		<input v-else-if="!isPasswordInput" :id="id" v-bind="$attrs" v-model="model" @blur="isEager = true">

		<div v-else :class="$style.inputWrapper">
			<input :id="id"
				:type="passwordInputType"
				v-bind="$attrs"
				v-model="model"
				@blur="isEager = true"
				autocorrect="off"
				autocapitalize="none"
			>
			<eye-active v-if="shouldShowPassword" :class="$style.eye" @click.native="shouldShowPassword = false" />
			<eye-inactive v-else :class="$style.eye" @click.native="shouldShowPassword = true" />
		</div>
	</validated-component>
</template>

<script>
import EyeActive from './icons/eye-active';
import EyeInactive from './icons/eye-inactive';
import ValidatedComponent from './validated-component';
import { getRandom } from '../utilities/get-random';

export default {
	components: { EyeActive, EyeInactive, ValidatedComponent },
	props: {
		label: String,
		labelHelper: String,
		helpText: String,
		errorMessage: String,
		rules: Array,
		value: null,
		isAddressAutocompleteInput: {
			type: Boolean,
			default: false,
		},
	},

	data() {
		return {
			id: getRandom(),
			isEager: false,
			shouldShowPassword: false,
		};
	},

	computed: {
		model: {
			get() { return this.value },
			set(value) { this.$emit('input', value) },
		},

		isPasswordInput() {
			const type = this.$attrs.type;

			return type && type.toLowerCase() === 'password';
		},

		passwordInputType() {
			return this.shouldShowPassword ? 'text' : 'password';
		},
	},

	methods: {
		isValid() {
			return this.$refs.validatedComponent.isValid();
		},
	},
};
</script>

<style module lang="scss">
	@import '../styles/variables';

	.inputWrapper {
		position: relative;
	}

	.eye {
		position: absolute;
		width: $spacing-06;
		top: 10px;
		right: $spacing-04;
		cursor: pointer;
	}
</style>
