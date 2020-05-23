import Address from '../../../components/address';

export default {
	title: 'Components / Basic / Address',
	component: Address,
};

export function Overview() {
	return {
		components: { Address },
		template: '<Address :address="address" />',

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
		components: { Address },
		template: '<Address :address="address" />',

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
		components: { Address },
		template: '<Address :address="address" />',

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
		components: { Address },
		template: '<Address :address="address" />',

		data() {
			return {
				address: {
					streetAddress: 'Street Address',
					locality: 'Locality',
					region: 'OR',
					postal: '97705',
					phone: '559-345-4567',
				},
			};
		},
	};
}

export function All() {
	return {
		components: { Address },
		template: '<Address :address="address" />',

		data() {
			return {
				address: {
					name: 'Name',
					streetAddress: 'Street Address',
					extendedAddress: 'Apt. 42',
					locality: 'Locality',
					region: 'OR',
					postal: '97705',
					phone: '559-345-4567',
				},
			};
		},
	};
}
