import CheckoutAuthentication from '../../../components/checkout-authentication';

export default {
	title: 'Components / Basic / CheckoutAuthentication',
	component: CheckoutAuthentication,
};

export function Overview() {
	return {
		components: { CheckoutAuthentication },
		template: `
			<div>
				<checkout-authentication @sign-in="credentials => user = credentials"
				                         @add-guest="guestInfo => guest = guestInfo" />
				<div v-if="user">User: {{ user }}</div>
				<div v-if="guest">Guest: {{ guest }}</div>
			</div>
		`,

		data() { return { user: null, guest: null } },
	};
}

export function PrepopulatedGuest() {
	return {
		components: { CheckoutAuthentication },
		template: `
			<div>
				<checkout-authentication :guest="guest"
				                         @sign-in="credentials => user = credentials"
				                         @add-guest="guestInfo => guest = guestInfo" />
				<div v-if="user">User: {{ user }}</div>
				<div v-if="guest">Guest: {{ guest }}</div>
			</div>
		`,

		data() {
			return {
				user: null,
				guest: { name: 'Test Guest', phone: '1234567890', email: 'testguest@example.com' },
			};
		},
	};
}
