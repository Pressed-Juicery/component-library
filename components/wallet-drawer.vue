<template>
	<div>

		<div :class="$style.grid">
			<qr-code :code="wallet.cardNumber" />
			<div>
				<div :class="$style.label">Current Balance</div>
				<div :class="$style.value">{{ formatCurrency(wallet.funds) }}</div>
				<div :class="$style.label">Points Accrued</div>
				<div :class="$style.value">{{ wallet.points }}</div>
				<div :class="$style.label">Account #</div>
				<div :class="$style.value"></div>
			</div>
		</div>
	</div>
</template>

<script>
import QrCode from './qr-code';
import { formatCurrency } from '../utilities/formatters';

export default {
	components: { QrCode },

	props: {
		wallet: {
			type: Object,
			required: true,
		},
	},

	methods: {
		formatCurrency(number) {
			return formatCurrency(number);
		},
	},
}
</script>

<style module lang="scss">

</style>
