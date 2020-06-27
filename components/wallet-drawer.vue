<template>
	<persistent-drawer :isOpen="isOpen" :has-logo="true" @close="isOpen = false">
		<div :class="$style.root">
			<div :class="$style.title">In the Store?</div>
			<div :class="$style.swipeUpMessage" v-if="!isOpen">Swipe up for your QR Code</div>
			<div :class="$style.showCodeMessage" v-else>Show our associate your code!</div>

			<transition name="slider" v-on:before-enter="beforeEnter" v-on:enter="enter"
						v-on:before-leave="beforeLeave" v-on:leave="leave">
				<div v-show="isOpen" :class="$style.slidableContent">
					<div :class="$style.mainContent">
						<qr-code :class="$style.qrCode" :code="wallet.cardNumber" background="#f6f4ec" />
						<div :class="$style.walletData">
							<div :class="$style.label">Balance</div>
							<div :class="$style.value">{{ formatCurrency(wallet.funds) }}</div>
							<div :class="$style.label">Points</div>
							<div :class="$style.value">{{ wallet.points }}</div>
							<div :class="$style.label">Account #</div>
							<div :class="$style.value">{{ wallet.cardNumber }}</div>
						</div>
					</div>

					<button :class="$style.reloadButton" @click="$emit('reload-balance')">Reload Balance</button>
				</div>
			</transition>

			<div :class="$style.toggle" @click="isOpen = !isOpen">
				<arrow-down :class="{ [$style.rotate]: !isOpen }" color="#262626" />
			</div>
		</div>
	</persistent-drawer>
</template>

<script>
import ArrowDown from './icons/arrow-down-icon';
import PersistentDrawer from './persistent-drawer';
import QrCode from './qr-code';
import { formatCurrency } from '../utilities/formatters';

export default {
	components: { ArrowDown, PersistentDrawer, QrCode },

	props: {
		wallet: {
			type: Object,
			required: true,
		},
	},

	data() {
		return {
			isOpen: false,
		};
	},

	methods: {
		formatCurrency(number) {
			return formatCurrency(number);
		},

		beforeEnter: function (target) {
			const elem = target;

			elem.style.height = '0';
		},

		enter: function (target) {
			const elem = target;

			elem.style.height = `${elem.scrollHeight}px`;
		},

		beforeLeave: function (target) {
			const elem = target;

			elem.style.height = `${elem.scrollHeight}px`;
		},

		leave: function (target) {
			const elem = target;

			elem.style.height = '0';
		},
	},
};
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

		&:focus {
			outline: none;
		}
	}

	.toggle {
		display: block;
		margin: 0 auto;
		width: $spacing-04;
		line-height: 1px;
		cursor: pointer;
		pointer-events: auto;
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
