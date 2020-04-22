<template>
	<span>
		<american-express-icon v-if="type.toLowerCase() === 'american express'" />
		<discover-icon v-else-if="type.toLowerCase() === 'discover'" />
		<master-card-icon v-else-if="type.toLowerCase() === 'mastercard'" />
		<visa-icon v-else-if="type.toLowerCase() === 'visa'" />
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
};
</script>
