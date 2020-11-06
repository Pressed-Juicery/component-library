<template>
	<div>
		<div :class="$style.wallet">
			<qr-code :class="$style.qrCode" :code="wallet.cardNumber" />

			<div :class="$style.walletData">
				<div :class="$style.label">Balance</div>
				<div :class="$style.value">{{ balance }}</div>

				<div :class="$style.label">Points</div>
				<div :class="$style.value">{{ wallet.points }}</div>

				<div :class="$style.label">Account #</div>
				<div :class="$style.value">{{ wallet.cardNumber }}</div>
			</div>
		</div>

		<button :class="$style.reloadButton" @click="$emit('reload')" >
			Reload Balance
		</button>
	</div>
</template>

<script>
import QrCode from './qr-code';
import { formatCurrency } from '../utilities/formatters';

export default {
	components: { QrCode },

	props: {
		wallet: {
			required: true,
			type: Object,
		},
	},

	computed: {
		balance() {
			return formatCurrency(this.wallet.funds || 0);
		},
	},
};
</script>

<style module lang="scss">
	@import "../styles/mixins";

	.wallet {
		display: flex;
		justify-content: center;
		max-width: 340px;
		margin: $spacing-07 auto $spacing-08;
	}

	.qrCode {
		width: 50%;
	}

	.walletData {
		width: 50%;
		margin-left: $spacing-06;
	}

	.label {
		@include text-cta-small();

		margin-bottom: $spacing-02;
	}

	.value {
		@include text-heading-5();

		&:not(:last-child) {
			margin-bottom: $spacing-05;
		}
	}

	.reloadButton {
		@include button-pill-secondary();

		display: block;
		margin: 0 auto $spacing-06;
		padding: 0 $spacing-10;
		font-size: 14px;

		&:focus {
			outline: none;
		}
	}

	@media (max-width: 350px) {
		.reloadButton {
			padding: 0 $spacing-06;
		}
	}
</style>
