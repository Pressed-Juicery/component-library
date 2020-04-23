import AddressRadioButtonCard from '../components/address-radio-button-card';

export default {
	title: 'AddressRadioButtonCard',
	component: AddressRadioButtonCard,
};

const firstAddress = {
	address1: '1 Meadow Lane',
	city: 'Portland',
	province: 'OR',
	zip: '27705',
};

const secondAddress = {
	address1: '1 Duke University Drive',
	city: 'Durham',
	province: 'NC',
	zip: '27709',
};

const thirdAddress = {
	address1: '1 Amsterdam',
	city: 'New York',
	province: 'NY',
	zip: '27705',
};

export function Overview() {
	return {
		components: { AddressRadioButtonCard },
		template: '<address-radio-button-card title="Title" :address="firstAddress" v-model="selectedAddress" />',

		data() { return { firstAddress, selectedAddress: null } },
	};
}

export function SecondaryAddress() {
	return {
		components: { AddressRadioButtonCard },
		template: `
			<address-radio-button-card title="Title"
			                           :address="addressWithSecondaryAddress"
			                           v-model="selectedAddress" />
        `,

		data() {
			return {
				addressWithSecondaryAddress: { ...firstAddress, address2: 'Apt. 42' },
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

export function DashedPhone() {
	return {
		components: { AddressRadioButtonCard },
		template: `
			<address-radio-button-card title="Title"
			                           :address="addressWithDashedPhone"
			                           v-model="selectedAddress" />
		`,

		data() {
			return {
				addressWithDashedPhone: { ...thirdAddress, phone: '205-234-3456' },
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
				longAddress: { ...firstAddress, address1: '1 Meadow Lane!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!' },
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
				<address-radio-button-card v-for="address in addresses"
				                           :key="address.address1"
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
