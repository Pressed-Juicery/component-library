import AddressForm from '../components/address-form';

export default {
	component: AddressForm,
	title: 'AddressForm',
};

export function Overview() {
	return {
		components: { AddressForm },

		template: `
			<div>
				<address-form v-model="address" />
				<div v-if="address.firstName">First Name: {{ address.firstName }}</div>
				<div v-if="address.lastName">Last Name: {{ address.lastName }}</div>
				<div v-if="address.streetAddress">Street Address: {{ address.streetAddress }}</div>
				<div v-if="address.extendedAddress">Extended Address: {{ address.extendedAddress }}</div>
				<div v-if="address.locality">Locality: {{ address.locality }}</div>
				<div v-if="address.region">Region: {{ address.region }}</div>
				<div v-if="address.postal">Postal: {{ address.postal }}</div>
				<div v-if="address.phone">Phone: {{ address.phone }}</div>
				<div v-if="address.title">Title: {{ address.title }}</div>
			</div>
		`,

		data() { return { address: {}} },
	};
}

// eslint-disable-next-line max-lines-per-function
export function EditAddress() {
	return {
		components: { AddressForm },

		template: `
			<div>
				<address-form v-model="address" />
				<div v-if="address.firstName">First Name: {{ address.firstName }}</div>
				<div v-if="address.lastName">Last Name: {{ address.lastName }}</div>
				<div v-if="address.streetAddress">Street Address: {{ address.streetAddress }}</div>
				<div v-if="address.extendedAddress">Extended Address: {{ address.extendedAddress }}</div>
				<div v-if="address.locality">Locality: {{ address.locality }}</div>
				<div v-if="address.region">Region: {{ address.region }}</div>
				<div v-if="address.postal">Postal: {{ address.postal }}</div>
				<div v-if="address.phone">Phone: {{ address.phone }}</div>
				<div v-if="address.title">Title: {{ address.title }}</div>
			</div>
		`,

		data() {
			return {
				address: {
					firstName: 'Arthur',
					lastName: 'Dent',
					streetAddress: '42 High Street',
					locality: 'Cambridge',
					region: 'MA',
					postal: '93742',
					phone: '559-242-4242',
					title: 'Work',
				},
			};
		},
	};
}

export function DeliveryInstructions() {
	return {
		components: { AddressForm },

		template: `
			<div>
				<address-form v-model="address" :showDeliveryInstructions="true" />
				<div v-if="address.deliveryInstructions">Delivery Instructions: {{ address.deliveryInstructions }}</div>
			</div>
		`,

		data() { return { address: {}} },
	};
}

export function EditDeliveryInstructions() {
	return {
		components: { AddressForm },

		template: `
			<div>
				<address-form v-model="address" :showDeliveryInstructions="true" />
				<div v-if="address.deliveryInstructions">Delivery Instructions: {{ address.deliveryInstructions }}</div>
			</div>
		`,

		data() {
			return {
				address: {
					firstName: 'Arthur',
					lastName: 'Dent',
					streetAddress: '42 High Street',
					locality: 'Cambridge',
					region: 'MA',
					postal: '93742',
					phone: '559-242-4242',
					title: 'Work',
					deliveryInstructions: 'Please leave the package in front of the door.',
				},
			};
		},
	};
}
