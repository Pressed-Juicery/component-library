<template>
	<div :class="$style.root">
		<label v-if="label" :class="$style.label" :for="id">{{ label }}</label>

		<div :class="$style.inputWrapper">
			<input
				:class="$style.passwordInput"
				:id="id"
				:type="passwordInputType"
				v-bind="$attrs"
				v-model="model"
				autocorrect="off"
				autocapitalize="none"
			>
			<eye-active v-if="shouldShowPassword" :class="$style.eye" @click.native="shouldShowPassword = false" />
			<eye-inactive v-else :class="$style.eye" @click.native="shouldShowPassword = true" />
		</div>

		<label v-if="errorMessage" :class="$style.error" :for="id">{{ errorMessage }}</label>

		<div :class="$style.requirement" v-for="(requirement, index) in requirements" :key="index">
			<checkmark v-if="requirement.isValid(model)" />
			<red-x v-else />

			<div :class="$style.requirementText">{{ requirement.text }}</div>
		</div>
	</div>
</template>

<script>
import Checkmark from './icons/checkmark';
import EyeActive from './icons/eye-active';
import EyeInactive from './icons/eye-inactive';
import RedX from './icons/red-x';
import { getRandom } from '../utilities/get-random';
import { hasMinimumLength, hasNumber, hasUppercase, hasLowercase, hasSpecialCharacter } from '../utilities/validators';

export default {
	components: { Checkmark, EyeActive, EyeInactive, RedX },

	props: {
		label: String,
		errorMessage: String,
		value: null,
	},

	data() {
		return {
			id: getRandom(),
			shouldShowPassword: false,
			requirements: [
				{
					isValid: value => hasMinimumLength(value, { length: 8 }),
					text: 'At least 8 characters',
				},
				{
					isValid: hasNumber,
					text: 'At least one number',
				},
				{
					isValid: hasUppercase,
					text: 'At least one capital letter',
				},
				{
					isValid: hasLowercase,
					text: 'At least one lowercase letter',
				},
				{
					isValid: hasSpecialCharacter,
					text: 'At least one special character such as exclamation point or comma',
				},
			],
		};
	},

	computed: {
		model: {
			get() { return this.value || '' },

			set(value) { this.$emit('input', value) },
		},

		passwordInputType() {
			return this.shouldShowPassword ? 'text' : 'password';
		},
	},

	methods: {
		isValid() {
			return this.requirements.every(requirement => requirement.isValid(this.model));
		},
	},
}
</script>

<style module lang="scss">
	@import '../styles/mixins';
	@import '../styles/variables';

	.root {
		margin-bottom: $spacing-06;
	}

	.label {
		@include label();
	}

	.inputWrapper {
		position: relative;
		margin-bottom: $spacing-04;
	}

	.inputWrapper .passwordInput {
		margin-bottom: 0;
	}

	.eye {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		right: $spacing-04;
		width: $spacing-06;
		cursor: pointer;
	}

	.requirement {
		display: flex;
		align-items: center;
		margin-bottom: $spacing-02;
	}

	.requirementText {
		margin-left: $spacing-05;
	}

	.error {
		@include text-error();

		display: block;
		margin-bottom: $spacing-03;
	}
</style>
