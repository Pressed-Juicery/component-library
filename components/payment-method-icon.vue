<template>
	<span>
		<american-express-icon v-if="vendor === 'american express'" />
		<discover-icon v-else-if="vendor === 'discover'" />
		<master-card-icon v-else-if="vendor === 'mastercard'" />
		<visa-icon v-else-if="vendor === 'visa'" />
		<paypal-icon v-else-if="vendor === 'paypal'" />
		<venmo-icon v-else-if="vendor === 'venmo'" />
		<apple-pay-icon v-else-if="vendor === 'apple pay'" />
		<google-pay-icon v-else-if="vendor === 'google pay'" />
		<unknown-payment-method-icon v-else />
	</span>
</template>

<script>
import AmericanExpressIcon from './icons/american-express-icon';
import ApplePayIcon from './icons/apple-pay-icon';
import DiscoverIcon from './icons/discover-icon';
import GooglePayIcon from './icons/google-pay-icon';
import MasterCardIcon from './icons/master-card-icon';
import PaypalIcon from './icons/paypal-icon';
import UnknownPaymentMethodIcon from './icons/unknown-payment-method-icon';
import VenmoIcon from './icons/venmo-icon';
import VisaIcon from './icons/visa-icon';

export default {
	components: {
		AmericanExpressIcon,
		ApplePayIcon,
		DiscoverIcon,
		GooglePayIcon,
		MasterCardIcon,
		PaypalIcon,
		UnknownPaymentMethodIcon,
		VenmoIcon,
		VisaIcon,
	},

	props: {
		type: String,
	},

	computed: {
		vendor() {
			return this.type.toLowerCase();
		},
	},
};
</script>
