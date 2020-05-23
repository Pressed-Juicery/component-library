<template>
	<div class="address-form">
		<div class="address-form__grid">
			<validated-input label="First Name" v-model="model.firstName" :rules="firstNameRules" />
			<validated-input label="Last Name" v-model="model.lastName" :rules="lastNameRules" />
		</div>

		<validated-input label="Street Address" v-model="model.streetAddress" :rules="addressRules" />
		<validated-input label="Suite/Apt" v-model="model.extendedAddress" />

		<validated-input label="City" v-model="model.locality" :rules="localityRules"/>

		<div class="address-form__grid">
			<validated-select label="State" v-model="model.region" :options="regions" :rules="regionRules" />
			<validated-input label="Zip Code" v-model="model.postal" :rules="postalRules" />
		</div>

		<validated-input class="address-form__phone"
		                 type="phone"
		                 label="Phone Number"
		                 v-model="model.phone"
		                 :rules="phoneRules" />

		<Label v-if="showDeliveryInstructions">
			<span class="address-form__delivery-instructions-label">Delivery Instructions</span>
			<textarea v-model="model.deliveryInstructions"
			          rows="4"
			          placeholder="i.e. gate code or if it should be left at your door, etc." />
		</Label>
	</div>
</template>

<script>
import { hasExactLength, isNotEmpty, isNumber, isValidPhoneNumber } from '../utilities/validators';

import ButtonBar from './button-bar';
import ButtonBarButton from './button-bar-button';
import ValidatedInput from './validated-input';
import ValidatedSelect from './validated-select';

import { regions } from '../constants/regions';

export default {
	components: { ButtonBar, ButtonBarButton, ValidatedInput, ValidatedSelect },


	props: {
		address: { required: true },
		showDeliveryInstructions: Boolean,
	},

	// eslint-disable-next-line max-lines-per-function
	data() {
		return {
			regions,

			firstNameRules: [{
				validator: isNotEmpty,
				message: 'Please enter your first name.',
			}],
			lastNameRules: [{
				validator: isNotEmpty,
				message: 'Please enter your last name.',
			}],
			addressRules: [{
				validator: isNotEmpty,
				message: 'Please enter an address.',
			}],
			localityRules: [{
				validator: isNotEmpty,
				message: 'Please enter a city.',
			}],
			regionRules: [{
				validator: isNotEmpty,
				message: 'Please select a state.',
			}],
			postalRules: [{
				validator: isNotEmpty,
				message: 'Please enter a valid 5 digit zip code.',
			},
			{
				validator: isNumber,
				message: 'Please enter a valid 5 digit zip code.',
			},
			{
				validator: hasExactLength,
				message: 'Please enter a valid 5 digit zip code.',
				options: { length: 5 },
			}],
			phoneRules: [{
				validator: isNotEmpty,
				message: 'Please enter a phone number.',
			}, {
				validator: isValidPhoneNumber,
				message: 'Please enter a valid ten-digit phone number.',
			}],
			customTitleRules: [{
				validator: isNotEmpty,
				message: 'Please enter a title.',
			}],
		};
	},
};
</script>

<style scoped lang="scss">
	@import '../styles/mixins';
	@import '../styles/variables';

	.address-form__grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-gap: $spacing-05;
	}

	.address-form__phone {
		margin-bottom: $spacing-08;
	}

	.address-form__button-bar {
		margin-bottom: $spacing-06;
		text-align: center;
	}

	.address-form__button-bar-button {
		height: auto;
		padding: $spacing-05;
	}

	.address-form__delivery-instructions-label {
		@include text-bolder();
	}
</style>
