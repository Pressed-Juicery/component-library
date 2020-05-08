<template>
	<div class="address-form">
		<div class="address-form__grid">
			<validated-input label="First Name" v-model="model.firstName" :rules="firstNameRules" />
			<validated-input label="Last Name" v-model="model.lastName" :rules="lastNameRules"/>
		</div>

		<validated-input class="address-form__input"
		                 label="Street Address"
		                 v-model="model.streetAddress"
		                 :rules="addressRules" />
		<validated-input class="address-form__input" label="Suite/Apt" v-model="model.extendedAddress" />

		<validated-input class="address-form__input" label="City" v-model="model.locality" :rules="localityRules"/>

		<div class="address-form__grid">
			<validated-select label="State" v-model="model.region" :options="regions" :rules="regionRules" />
			<validated-input label="Zip Code" v-model="model.postal" :rules="postalRules" />
		</div>

		<validated-input class="address-form__phone"
		                 type="phone"
		                 label="Phone Number"
		                 v-model="model.phone"
		                 :rules="phoneRules" />

		<button-bar class="address-form__button-bar">
			<button-bar-button class="address-form__button-bar-button"
			                   value="Home"
			                   :selectedButton="selectedButton"
			                   @select-button="selectButton">
				<div>Home</div>
			</button-bar-button>
			<button-bar-button class="address-form__button-bar-button"
			                   value="Work"
			                   :selectedButton="selectedButton"
			                   @select-button="selectButton">
				<div>Work</div>
			</button-bar-button>
			<button-bar-button class="address-form__button-bar-button"
			                   value="Other"
			                   :selectedButton="selectedButton"
			                   @select-button="selectButton">
				<div>Other</div>
			</button-bar-button>
		</button-bar>

		<validated-input v-if="hasCustomTitle"
		                 class="address-form__input"
		                 label="Title"
		                 v-model="model.title"
		                 :rules="customTitleRules"/>

		<Label v-if="showDeliveryInstructions">
			<span class="address-form__delivery-instructions-label">Delivery Instructions</span>
			<textarea v-model="model.deliveryInstructions"
			          rows="4"
			          placeholder="i.e. gate code or if it should be left at your door, etc." />
		</Label>
	</div>
</template>

<script>
import { isNotEmpty, isNumber, hasExactLength, isValidPhoneNumber } from '../utilities/validators';

import ButtonBar from './button-bar';
import ButtonBarButton from './button-bar-button';
import ValidatedInput from './validated-input';
import ValidatedSelect from './validated-select';

export default {
	components: { ButtonBar, ButtonBarButton, ValidatedInput, ValidatedSelect },

	model: {
		prop: 'address',
		event: 'change',
	},

	props: {
		address: { required: true },
		showDeliveryInstructions: Boolean,
	},

	data() {
		return {
			hasCustomTitle: false,
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
			regions: [
				{ name:'Alabama', value: 'AL' },
				{ name:'Alaska', value: 'AK'},
				{ name:'American Samoa', value: 'AS'},
				{ name:'Arizona', value: 'AZ'},
				{ name:'Arkansas', value: 'AR'},
				{ name:'California', value: 'CA'},
				{ name:'Colorado', value: 'CO'},
				{ name:'Connecticut', value: 'CT'},
				{ name:'Delaware', value: 'DE'},
				{ name:'District of Columbia', value: 'DC'},
				{ name:'Federated States of Micronesia', value: 'FM'},
				{ name:'Florida', value: 'FL'},
				{ name:'Georgia', value: 'GA'},
				{ name:'Guam', value: 'GU'},
				{ name:'Hawaii', value: 'HI'},
				{ name:'Idaho', value: 'ID'},
				{ name:'Illinois', value: 'IL'},
				{ name:'Indiana', value: 'IN'},
				{ name:'Iowa', value: 'IA'},
				{ name:'Kansas', value: 'KS'},
				{ name:'Kentucky', value: 'KY'},
				{ name:'Louisiana', value: 'LA'},
				{ name:'Maine', value: 'ME'},
				{ name:'Marshall Islands', value: 'MH'},
				{ name:'Maryland', value: 'MD'},
				{ name:'Massachusetts', value: 'MA'},
				{ name:'Michigan', value: 'MI'},
				{ name:'Minnesota', value: 'MN'},
				{ name:'Mississippi', value: 'MS'},
				{ name:'Missouri', value: 'MO'},
				{ name:'Montana', value: 'MT'},
				{ name:'Nebraska', value: 'NE'},
				{ name:'Nevada', value: 'NV'},
				{ name:'New Hampshire', value: 'NH'},
				{ name:'New Jersey', value: 'NJ'},
				{ name:'New Mexico', value: 'NM'},
				{ name:'New York', value: 'NY'},
				{ name:'North Carolina', value: 'NC'},
				{ name:'North Dakota', value: 'ND'},
				{ name:'Northern Mariana Islands', value: 'MP'},
				{ name:'Ohio', value: 'OH'},
				{ name:'Oklahoma', value: 'OK'},
				{ name:'Oregon', value: 'OR'},
				{ name:'Palau', value: 'PW'},
				{ name:'Pennsylvania', value: 'PA'},
				{ name:'Puerto Rico', value: 'PR'},
				{ name:'Rhode Island', value: 'RI'},
				{ name:'South Carolina', value: 'SC'},
				{ name:'South Dakota', value: 'SD'},
				{ name:'Tennessee', value: 'TN'},
				{ name:'Texas', value: 'TX'},
				{ name:'Utah', value: 'UT'},
				{ name:'Vermont', value: 'VT'},
				{ name:'Virgin Islands', value: 'VI'},
				{ name:'Virginia', value: 'VA'},
				{ name:'Washington', value: 'WA'},
				{ name:'West Virginia', value: 'WV'},
				{ name:'Wisconsin', value: 'WI'},
				{ name:'Wyoming', value: 'WY'}
			],
		};
	},

	computed: {
		model: {
			get() { return this.address },
			set(value) { this.$emit('change', value) },
		},

		selectedButton() {
			if (!this.address.title && !this.hasCustomTitle) return 'Home';
			if (this.address.title !== 'Home' && this.address.title !== 'Work') return 'Other';

			return this.address.title;
		},
	},

	methods: {
		selectButton(value) {
			if (this.selectedButton === value) return;

			this.model = { ...this.model, title: value === 'Other' ? '' : value };

			this.hasCustomTitle = value === 'Other';
		},
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
		margin-bottom: $spacing-05;
	}

	.address-form__input {
		margin-bottom: $spacing-05;
	}

	.address-form__phone {
		margin-bottom: $spacing-06;
	}

	.address-form__button-bar {
		width: 100%;
		margin-bottom: $spacing-05;
	}

	.address-form__button-bar-button {
		height: auto;
		padding: $spacing-03;
	}

	.address-form__delivery-instructions-label {
		@include text-body-medium();
		@include text-bolder();
	}
</style>
