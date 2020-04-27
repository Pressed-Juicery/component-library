<template>
	<span>
		<american-express-icon v-if="vendor === 'american express'" />
		<discover-icon v-else-if="vendor === 'discover'" />
		<master-card-icon v-else-if="vendor === 'mastercard'" />
		<visa-icon v-else-if="vendor === 'visa'" />
		<unknown-payment-method-icon v-else />
	</span>
</template>

<script>
import AmericanExpressIcon from './icons/american-express-icon';
import DiscoverIcon from './icons/discover-icon';
import MasterCardIcon from './icons/master-card-icon';
import UnknownPaymentMethodIcon from './icons/unknown-payment-method-icon';
import VisaIcon from './icons/visa-icon';

export default {
	components: { AmericanExpressIcon, DiscoverIcon, MasterCardIcon, UnknownPaymentMethodIcon, VisaIcon },

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
