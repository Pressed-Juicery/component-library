import StoreAddress from '../../../components/store-address';

export default {
	component: StoreAddress,
	title: 'Components / Basic / StoreAddress',
};

export function Overview() {
	return {
		components: { StoreAddress },
		template: '<store-address :store="store" />',

		data() {
			return {
				store: {
					address: {
						name: 'The Store',
						streetAddress: 'The Street Address',
						locality: 'Locality',
						region: 'OR',
						postal: '27705',
						phone: '225-345-4567',
					},
				},
			};
		},
	};
}

export function Hours() {
	return {
		components: { StoreAddress },
		template: '<store-address :store="store" />',

		data() {
			return {
				store: {
					address: {
						name: 'The Store',
						streetAddress: 'The Street Address',
						locality: 'Locality',
						region: 'OR',
						postal: '27705',
						phone: '225-345-4567',
					},
					storeHours: [
						'Mon-Fri 8am-9pm',
						'Sat-Sun 11am-8pm',
					],
				},
			};
		},
	};
}

export function VariedHours() {
	return {
		components: { StoreAddress },
		template: '<store-address :store="store" />',

		data() {
			return {
				store: {
					address: {
						name: 'The Store',
						streetAddress: 'The Street Address',
						locality: 'Locality',
						region: 'OR',
						postal: '27705',
						phone: '225-345-4567',
					},
					storeHours: [
						'Mon 7am-9pm',
						'Tues 8am-9pm',
						'Wed 8am-10pm',
						'Thu 8am-9pm',
						'Fri 8am-8pm',
						'Sat 7am-7pm',
					],
				},
			};
		},
	};
}
