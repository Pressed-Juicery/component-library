import AddressRadioButtonCard from '../components/address-radio-button-card';

export default {
	title: 'AddressRadioButtonCard',
	component: AddressRadioButtonCard,
};

const firstAddress = {
	streetAddress: '1 Meadow Lane',
	locality: 'Portland',
	region: 'OR',
	postal: '27705',
};

const secondAddress = {
	streetAddress: '1 Duke University Drive',
	locality: 'Durham',
	region: 'NC',
	postal: '27709',
};

const thirdAddress = {
	streetAddress: '1 Amsterdam',
	locality: 'New York',
	region: 'NY',
	postal: '27705',
};

export function Overview() {
	return {
		components: { AddressRadioButtonCard },
		template: '<address-radio-button-card title="Title" :address="firstAddress" v-model="selectedAddress" />',

		data() { return { firstAddress, selectedAddress: null } },
	};
}

export function ExtendedAddress() {
	return {
		components: { AddressRadioButtonCard },
		template: `
			<address-radio-button-card title="Title"
			                           :address="addressWithExtendedAddress"
			                           v-model="selectedAddress" />
        `,

		data() {
			return {
				addressWithExtendedAddress: { ...firstAddress, extendedAddress: 'Apt. 42' },
				selectedAddress: null,
			};
		},
	};
}

export function Phone() {
	return {
		components: { AddressRadioButtonCard },
		template: '<address-radio-button-card title="Title" :address="addressWithPhone" v-model="selectedAddress" />',

		data() {
			return {
				addressWithPhone: { ...secondAddress, phone: '5593454567' },
				selectedAddress: null,
			};
		},
	};
}

export function NoTitle() {
	return {
		components: { AddressRadioButtonCard },
		template: '<address-radio-button-card :address="firstAddress" v-model="selectedAddress" />',

		data() { return { firstAddress, selectedAddress: null } },
	};
}

export function Checked() {
	return {
		components: { AddressRadioButtonCard },
		template: '<address-radio-button-card title="Title" :address="firstAddress" v-model="selectedAddress" />',

		data() { return { firstAddress, selectedAddress: firstAddress } },
	};
}

export function LongAddress() {
	return {
		components: { AddressRadioButtonCard },
		template: '<address-radio-button-card title="Title" :address="longAddress" v-model="selectedAddress" />',

		data() {
			return {
				longAddress: {
					...firstAddress,
					streetAddress: '1 Meadow Lane!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',
				},
				selectedAddress: null,
			};
		},
	};
}

export function RadioGroup() {
	return {
		components: { AddressRadioButtonCard },
		template: `
			<div>
				<address-radio-button-card v-for="(address, index) in addresses"
				                           :key="index"
				                           title="Title"
				                           :address="address"
				                           v-model="selectedAddress" />
			</div>
		`,

		data() {
			return {
				addresses: [firstAddress, secondAddress, thirdAddress],
				selectedAddress: firstAddress,
			};
		},
	};
}
