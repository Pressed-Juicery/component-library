<template>
	<validated-form :id="id" @submit="$emit('submit', address)">
		<div :class="$style.grid">
			<validated-input type="text" label="First Name" v-model="address.firstName" :rules="firstNameRules" />
			<validated-input type="text" label="Last Name"  v-model="address.lastName" :rules="lastNameRules" />
		</div>

		<validated-input label="Street Address" type="text" v-model="address.streetAddress" :rules="addressRules" />
		<validated-input type="text" label="Suite/Apt"  v-model="address.extendedAddress" />

		<validated-input type="text" label="City" v-model="address.locality" :rules="localityRules" />

		<div :class="$style.grid">
			<validated-select label="State" v-model="address.region" :options="regions" :rules="regionRules" />
			<validated-input type="number" label="ZIP Code" v-model="address.postal" :rules="postalRules" />
		</div>

		<validated-input
			type="tel"
			label="Phone Number"
			v-model="address.phone"
			:rules="phoneRules"
		/>

		<div v-if="showSaveCheckbox">
			<validated-checkbox
				:value="address.shouldSaveAddress"
				v-model="address.shouldSaveAddress"
				label="Save address for future orders"
			/>
		</div>

		<div v-if="showDeliveryInstructions" :class="$style.deliveryInstructions">
			<label :class="$style.deliveryInstructionsLabel" :for="textareaId">Delivery Instructions</label>
			<textarea
				:id="textareaId"
				v-model="address.deliveryInstructions"
				rows="4"
				placeholder="e.g. &quot;ring bell and leave at door&quot;, gate code, etc."
			/>
		</div>
	</validated-form>
</template>

<script>
import { hasExactLength, isNotEmpty, isNumber, isValidPhoneNumber } from '../utilities/validators';

import ValidatedCheckbox from './validated-checkbox';
import ValidatedForm from './validated-form';
import ValidatedInput from './validated-input';
import ValidatedSelect from './validated-select';

import { getRandom } from '../utilities/get-random';
import { regions } from '../constants/regions';

export default {
	components: { ValidatedCheckbox, ValidatedForm, ValidatedInput, ValidatedSelect },

	props: {
		id: String,
		showSaveCheckbox: Boolean,
		address: {
			type: Object,
			default() {
				return {
					shouldSaveAddress: this.showSaveCheckbox,
				};
			},
		},
		showDeliveryInstructions: Boolean,
	},

	// eslint-disable-next-line max-lines-per-function
	data() {
		return {
			regions,
			textareaId: getRandom(),

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
		};
	},
};
</script>

<style module lang="scss">
	@import '../styles/mixins';
	@import '../styles/variables';

	.grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-gap: $spacing-05;
	}

	.deliveryInstructions {
		margin-bottom: $spacing-06;
	}

	.deliveryInstructionsLabel {
		@include text-bolder();
	}
</style>
