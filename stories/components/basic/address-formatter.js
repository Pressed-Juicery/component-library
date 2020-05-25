import AddressFormatter from '../../../components/address-formatter';

export default {
	title: 'Components / Basic / AddressFormatter',
	component: AddressFormatter,
};

export function Overview() {
	return {
		components: { AddressFormatter },
		template: '<address-formatter :address="address" />',

		data() {
			return {
				address: {
					streetAddress: 'Street Address',
					locality: 'Locality',
					region: 'OR',
					postal: '97705',
				},
			};
		},
	};
}

export function Named() {
	return {
		components: { AddressFormatter },
		template: '<address-formatter :address="address" />',

		data() {
			return {
				address: {
					name: 'Name',
					streetAddress: 'Street Address',
					locality: 'Locality',
					region: 'OR',
					postal: '97705',
				},
			};
		},
	};
}

export function ExtendedAddress() {
	return {
		components: { AddressFormatter },
		template: '<address-formatter :address="address" />',

		data() {
			return {
				address: {
					streetAddress: 'Street Address',
					extendedAddress: 'Apt. 42',
					locality: 'Locality',
					region: 'OR',
					postal: '97705',
				},
			};
		},
	};
}

export function Phone() {
	return {
		components: { AddressFormatter },
		template: '<address-formatter :address="address" />',

		data() {
			return {
				address: {
					streetAddress: 'Street Address',
					locality: 'Locality',
					region: 'OR',
					postal: '97705',
					phone: '559-123-1234',
				},
			};
		},
	};
}

export function All() {
	return {
		components: { AddressFormatter },
		template: '<address-formatter :address="address" />',

		data() {
			return {
				address: {
					name: 'Name',
					streetAddress: 'Street Address',
					extendedAddress: 'Apt. 42',
					locality: 'Locality',
					region: 'OR',
					postal: '97705',
					phone: '5591231234',
				},
			};
		},
	};
}
