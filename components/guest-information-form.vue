<template>
	<validated-form @submit="$emit('submit', guest)">
		<div :class="$style.title">Checkout as Guest</div>

		<validated-input
			type="text"
			autocomplete="name"
			:class="$style.row"
			label="Name"
			v-model="guest.name"
			:rules="nameRules"
		/>
		<validated-input
			type="tel"
			autocomplete="tel"
			:class="$style.row"
			label="Phone Number"
			v-model="guest.phone"
			:rules="phoneRules"
		/>
		<validated-input
			type="email"
			autocomplete="email"
			:class="$style.lastRow"
			label="Email"
			v-model="guest.email"
			:rules="emailRules"
		/>

		<button :class="$style.submitButton" type="submit">{{ buttonText }}</button>
	</validated-form>
</template>

<script>
import { isEmail, isNotEmpty, isValidPhoneNumber } from '../utilities/validators';

import ValidatedForm from './validated-form';
import ValidatedInput from './validated-input';

export default {
	components: { ValidatedForm, ValidatedInput },

	props: {
		buttonText: {
			type: String,
			required: true,
		},

		guest: {
			type: Object,
			default: function () { return {} },
		},
	},

	data() {
		return {
			nameRules: [{
				validator: isNotEmpty,
				message: 'Please enter your name.',
			}],
			emailRules: [{
				validator: isNotEmpty,
				message: 'Please enter a valid email address.',
			}, {
				validator: isEmail,
				message: 'Please enter a valid email address.',
			}],
			phoneRules: [{
				validator: isNotEmpty,
				message: 'Please enter a valid ten-digit phone number.',
			}, {
				validator: isValidPhoneNumber,
				message: 'Please enter a valid ten-digit phone number.',
			}],
		};
	},
};
</script>

<style module lang="scss">
	@import '../styles/mixins';
	@import '../styles/variables';

	.title {
		@include text-heading-5();
		margin: $spacing-07 0;
	}

	.row {
		margin-bottom: $spacing-05;
	}

	.lastRow {
		margin-bottom: $spacing-08;
	}

	.submitButton {
		@include button();
		display: block;
		width: 100%;
		max-width: 384px;
		margin: 0 auto;

		&:focus {
			outline: none;
		}
	}
</style>
