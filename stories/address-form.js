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
			</div>
		`,

		data() { return { address: {} } },
	};
}
