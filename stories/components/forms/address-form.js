import AddressForm from '../../../components/address-form';

export default {
	title: 'Components / Forms / AddressForm',
	component: AddressForm,
};

export function Overview() {
	return {
		components: { AddressForm },
		// template: '<address-form :show-save-checkbox="true"></address-form>',
	};
}

export function NewAddress() {
	return {
		components: { AddressForm },

		template: `
			<div>
				<address-form :id="formName" :show-save-checkbox="true" @submit="newAddress => address = newAddress">
					<div>
						<label>HELLO</label>
						<input slot="address" placeholder="yolo" />
					</div>
				</address-form>
				<button type="submit" :form="formName">Save</button>

				<div v-if="address">
					<div>First Name: {{ address.firstName }}</div>
					<div>Last Name: {{ address.lastName }}</div>
					<div>Street Address: {{ address.streetAddress }}</div>
					<div>Extended Address: {{ address.extendedAddress }}</div>
					<div>Locality: {{ address.locality }}</div>
					<div>Region: {{ address.region }}</div>
					<div>Postal: {{ address.postal }}</div>
					<div>Phone: {{ address.phone }}</div>
					<div>Save Address: {{ address.shouldSaveAddress }}</div>
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
				<address-form :id="formName" :address="address" />
				<button type="submit" :form="formName">Save</button>

				<div>First Name: {{ address.firstName }}</div>
				<div>Last Name: {{ address.lastName }}</div>
				<div>Street Address: {{ address.streetAddress }}</div>
				<div>Extended Address: {{ address.extendedAddress }}</div>
				<div>Locality: {{ address.locality }}</div>
				<div>Region: {{ address.region }}</div>
				<div>Postal: {{ address.postal }}</div>
				<div>Phone: {{ address.phone }}</div>
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
				<address-form :id="formName"
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
				<address-form :id="formName"
				              :address="address"
				              :showDeliveryInstructions="true" />
				<button type="submit" :form="formName">Save</button>

				<div>Delivery Instructions: {{ address.deliveryInstructions }}</div>
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
					deliveryInstructions: 'Please leave the package in front of the door.',
				},
			};
		},
	};
}
