<template>
	<div :class="$style.root">
		<div :class="$style.title">In the Store?</div>
		<div :class="$style.swipeUpMessage" v-if="!isOpen">Swipe up for your QR Code</div>
		<div :class="$style.showCodeMessage" v-else>Show our associate your code!</div>

		<transition name="slider" v-on:before-enter="beforeEnter" v-on:enter="enter"
		            v-on:before-leave="beforeLeave" v-on:leave="leave">
			<div v-show="isOpen" :class="$style.slidableContent">
				<div :class="$style.mainContent">
					<qr-code :class="$style.qrCode" :code="wallet.cardNumber" />
					<div :class="$style.walletData">
						<div :class="$style.label">Current Balance</div>
						<div :class="$style.value">{{ formatCurrency(wallet.funds) }}</div>
						<div :class="$style.label">Points Accrued</div>
						<div :class="$style.value">{{ wallet.points }}</div>
						<div :class="$style.label">Account #</div>
						<div :class="$style.value">{{ wallet.cardNumber }}</div>
					</div>
				</div>

				<button :class="$style.reloadButton" @click="$emit('reload-balance')">Reload Balance</button>
			</div>
		</transition>

		<div @click="$emit('toggle')">
			<arrow-down :class="[{ [$style.rotate]: !isOpen }, $style.icon]" color="#262626"/>
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
		isOpen: {
			type: Boolean,
			required: true,
		},
	},

	methods: {
		formatCurrency(number) {
			return formatCurrency(number);
		},

		beforeEnter: function(el) {
			el.style.height = '0';
		},

		enter: function(el) {
			el.style.height = el.scrollHeight + 'px';
		},

		beforeLeave: function(el) {
			el.style.height = el.scrollHeight + 'px';
		},

		leave: function(el) {
			el.style.height = '0';
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
	}

	.title {
		@include text-heading-5();

		margin-bottom: $spacing-02;
		text-align: center;
	}

	.swipeUpMessage {
		margin-bottom: $spacing-05;
		text-align: center;
	}

	.showCodeMessage {
		margin-bottom: $spacing-07;
		text-align: center;
	}

	.slidableContent {
		overflow: hidden;
		transition: 0.5s ease-out;
	}

	.mainContent {
		display: flex;
		justify-content: center;
		max-width: 340px;
		margin: 0 auto $spacing-08;
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

	.rotate {
		transform: rotate(180deg);
	}

	@media (max-width: 350px) {
		.reloadButton {
			padding: 0 $spacing-08;
		}
	}
</style>