import AddressRadioButtonCard from '../components/address-radio-button-card';

export default {
	title: 'AddressRadioButtonCard',
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

const cardTemplate = `
	<address-radio-button-card :title="cardData.title"
	                           :address="cardData.address"
	                           v-model="cardData.selectedAddress" />
`;

export function Default() {
	return {
		components: { AddressRadioButtonCard },
		template: cardTemplate,

		props: {
			cardData: {
				default() {
					return {
						address: defaultAddress,
						title: 'Home',
						selectedAddress: addressWithNoPhone,
					};
				},
			},
		},
	};
}

export function withSecondaryAddress() {
	return {
		components: { AddressRadioButtonCard },
		template: cardTemplate,

		props: {
			cardData: {
				default() {
					return {
						address: addressWithSecondaryAddress,
						title: 'Home',
						selectedAddress: defaultAddress,
					};
				},
			},
		},
	};
}

export function withNoPhone() {
	return {
		components: { AddressRadioButtonCard },
		template: cardTemplate,

		props: {
			cardData: {
				default() {
					return {
						address: addressWithNoPhone,
						title: 'Home',
						selectedAddress: defaultAddress,
					};
				},
			},
		},
	};
}

export function withDashedPhone() {
	return {
		components: { AddressRadioButtonCard },
		template: cardTemplate,

		props: {
			cardData: {
				default() {
					return {
						address: addressWithDashedPhone,
						title: 'Home',
						selectedAddress: defaultAddress,
					};
				},
			},
		},
	};
}

export function withNoTitle() {
	return {
		components: { AddressRadioButtonCard },
		template: cardTemplate,

		props: {
			cardData: {
				default() {
					return {
						address: defaultAddress,
						selectedAddress: addressWithNoPhone,
					};
				},
			},
		},
	};
}

export function Checked() {
	return {
		components: { AddressRadioButtonCard },
		template: cardTemplate,

		props: {
			cardData: {
				default() {
					return {
						address: defaultAddress,
						title: 'Home',
						selectedAddress: defaultAddress,
					};
				},
			},
		},
	};
}
