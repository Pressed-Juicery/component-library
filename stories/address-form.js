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
				<p v-if="address.name">Name: {{ address.name }}</p>
				<address-form v-model="address" />
			</div>
		`,

		data() { return { address: {} } },
	};
}
