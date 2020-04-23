import AddressRadioButtonCard from '../components/address-radio-button-card';

export default {
	title: 'AddressRadioButtonCard',
	component: AddressRadioButtonCard,
};

const defaultAddress = {
	id: 135,
	address1: '1 Meadow Lane',
	city: 'Portland',
	province: 'OR',
	zip: '27705',
	phone: '5593454567',
};

const addressWithSecondaryAddress = {
	id: 345,
	address1: '42 Lombard',
	address2: 'Apt. 42',
	city: 'San Francisco',
	province: 'CA',
	zip: '93723',
	phone: '5592343234',
};

const addressWithNoPhone = {
	id: 789,
	address1: '1 Duke University Drive',
	city: 'Durham',
	province: 'NC',
	zip: '27709',
};

const addressWithDashedPhone = {
	id: 123,
	address1: '1 Amsterdam',
	city: 'New York',
	province: 'NY',
	zip: '27705',
	phone: '205-234-3456',
};

const longAddress = {
	id: 150,
	address1: '1 Meadow Lane!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',
	city: 'Portland',
	province: 'OR',
	zip: '27705',
	phone: '5593454567',
};

export function Default() {
	return {
		components: { AddressRadioButtonCard },
		template: '<address-radio-button-card title="Title" :address="defaultAddress" v-model="selectedAddress" />',

		data() { return { defaultAddress, selectedAddress: addressWithNoPhone } },
	};
}

export function withSecondaryAddress() {
	return {
		components: { AddressRadioButtonCard },
		template: `
			<address-radio-button-card title="Title"
			                           :address="addressWithSecondaryAddress"
			                           v-model="selectedAddress" />
        `,

		data() { return { addressWithSecondaryAddress, selectedAddress: defaultAddress } },
	};
}

export function withNoPhone() {
	return {
		components: { AddressRadioButtonCard },
		template: '<address-radio-button-card title="Title" :address="addressWithNoPhone" v-model="selectedAddress" />',

		data() { return { addressWithNoPhone, selectedAddress: defaultAddress } },
	};
}

export function withDashedPhone() {
	return {
		components: { AddressRadioButtonCard },
		template: `
			<address-radio-button-card title="Title"
			                           :address="addressWithDashedPhone"
			                           v-model="selectedAddress" />
		`,

		data() { return { addressWithDashedPhone, selectedAddress: defaultAddress } },
	};
}

export function withNoTitle() {
	return {
		components: { AddressRadioButtonCard },
		template: '<address-radio-button-card :address="defaultAddress" v-model="selectedAddress" />',

		data() { return { defaultAddress, selectedAddress: addressWithNoPhone } },
	};
}

export function Checked() {
	return {
		components: { AddressRadioButtonCard },
		template: '<address-radio-button-card title="Title" :address="defaultAddress" v-model="selectedAddress" />',

		data() { return { defaultAddress, selectedAddress: defaultAddress } },
	};
}

export function withLongAddress() {
	return {
		components: { AddressRadioButtonCard },
		template: '<address-radio-button-card title="Title" :address="longAddress" v-model="selectedAddress" />',

		data() { return { longAddress, selectedAddress: addressWithNoPhone } },
	};
}

export function withMultipleSelections() {
	return {
		components: { AddressRadioButtonCard },
		template: `
			<div>
				<address-radio-button-card v-for="address in addresses"
				                           :key="address.id"
				                           title="Title"
				                           :address="address"
				                           v-model="selectedAddress" />
			</div>
		`,

		data() {
			return {
				addresses: [defaultAddress, addressWithSecondaryAddress, addressWithNoPhone, addressWithDashedPhone],
				selectedAddress: defaultAddress,
			};
		},
	};
}
