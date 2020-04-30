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
				<address-form :address="address" v-model="address" />
				<p v-if="address.name">Name: {{ address.name }}</p>
			</div>
		`,

		data() { return { address: {} } },
	};
}
