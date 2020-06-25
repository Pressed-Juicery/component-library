<template>
	<div :class="$style.root">
		<div :class="$style.title">In the Store?</div>
		<div :class="$style.subtitle">Show our associate your code!</div>

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

		<button :class="$style.reloadButton" @click="$emit('reload-balance')">Reload Balance</button>

		<div @click="$emit('close')">
			<arrow-down :class="$style.icon" />
		</div>
	</div>
</template>

<script>
import ArrowDown from './icons/arrow-down-icon';
import QrCode from './qr-code';
import { formatCurrency } from '../utilities/formatters';

export default {
	components: { ArrowDown, QrCode },

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
	@import "../styles/variables.scss";
	@import "../styles/mixins.scss";
	@import "../styles/buttons.scss";

	.root {
		padding: 0 $spacing-08 $spacing-07;
		background-color: $beige;
	}

	.title {
		@include text-heading-5();

		margin-bottom: $spacing-02;
		text-align: center;
	}

	.subtitle {
		margin-bottom: $spacing-07;
		text-align: center;
	}

	.grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-column-gap: $spacing-06;
		margin-bottom: $spacing-08;
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
		@extend .button--secondary;
		@extend .button--pill;

		display: block;
		margin: 0 auto $spacing-08;
		padding: 0 $spacing-10;
		font-size: 14px;
	}

	.icon {
		display: block;
		margin: 0 auto;
		width: $spacing-04;
		cursor: pointer;
	}
</style>
