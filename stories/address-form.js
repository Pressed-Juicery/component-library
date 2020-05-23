import AddressForm from '../components/address-form';

export default {
	component: AddressForm,
	title: 'AddressForm',
};

export function Overview() {
	return {
		components: { AddressForm },
		template: '<address-form />',
	};
}

export function NewAddress() {
	return {
		components: { AddressForm },

		template: `
			<div>
				<address-form :formId="formName" @submit="newAddress => address = newAddress" />
				<button type="submit" :form="formName">Save</button>

				<div v-if="address">
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
			</div>
		`,

		data() { return { formName: 'newAddressForm', address: null } },
	};
}

// eslint-disable-next-line max-lines-per-function
export function EditAddress() {
	return {
		components: { AddressForm },

		template: `
			<div>
				<address-form :formId="formName" :address="address" />
				<button type="submit" :form="formName">Save</button>

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
				formName: 'editAddressForm',
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
				<address-form :formId="formName"
				              :showDeliveryInstructions="true"
				              @submit="newAddress => address = newAddress" />
				<button type="submit" :form="formName">Save</button>

				<div v-if="address && address.deliveryInstructions">
					Delivery Instructions: {{ address.deliveryInstructions }}
				</div>
			</div>
		`,

		data() { return { formName: 'deliveryInstructionsForm', address: null } },
	};
}

// eslint-disable-next-line max-lines-per-function
export function EditDeliveryInstructions() {
	return {
		components: { AddressForm },

		template: `
			<div>
				<address-form :formId="formName"
				              :address="address"
				              :showDeliveryInstructions="true" />
				<button type="submit" :form="formName">Save</button>

				<div v-if="address.deliveryInstructions">Delivery Instructions: {{ address.deliveryInstructions }}</div>
			</div>
		`,

		data() {
			return {
				formName: 'editDeliveryInstructionsForm',
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
