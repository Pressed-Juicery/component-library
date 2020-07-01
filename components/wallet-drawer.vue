<!-- eslint-disable max-lines -->
<template>
	<div :class="[$style.root, { [$style.isOpen]: isOpen }]">
		<overlay :is-active="isOpen" @close="close" />

		<div :class="$style.drawer" @click="open">
			<pressed-points-circle :class="$style.logo"/>

			<div :class="$style.title">In the Store?</div>
			<div :class="$style.message" v-if="!isOpen">Tap here for your QR Code</div>
			<div :class="$style.message" v-else>Show our associate your code!</div>

			<transition name="slider" @enter="enter" @leave="leave">
				<div v-show="isOpen" :class="$style.contentWrapper">
					<div :class="$style.mainContent">
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

					<button :class="$style.reloadButton"
							@click="$emit('reload')"
					>
						Reload Balance
					</button>
				</div>
			</transition>

			<div :class="$style.toggleWrapper" @click.stop="toggle">
				<arrow-down-icon :class="$style.toggleIcon" color="#262626" />
			</div>
		</div>
	</div>
</template>

<script>
import ArrowDownIcon from './icons/arrow-down-icon';
import Overlay from './overlay';
import PressedPointsCircle from './icons/pressed-points-circle';
import QrCode from './qr-code';
import { formatCurrency } from '../utilities/formatters';

export default {
	components: { ArrowDownIcon, Overlay, PressedPointsCircle, QrCode },

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

	computed: {
		balance() {
			return formatCurrency(this.wallet.funds || 0);
		},
	},

	methods: {
		open() { this.isOpen = true },
		close() { this.isOpen = false },
		toggle() { this.isOpen = !this.isOpen },

		enter: function (target) {
			target.style.height = `${target.scrollHeight}px`; // eslint-disable-line no-param-reassign
		},

		leave: function (target) {
			target.style.height = '0'; // eslint-disable-line no-param-reassign
		},
	},
};
</script>

<style module lang="scss">
	@import "../styles/variables";
	@import "../styles/mixins";

	$logoOffset: 22px;

	.logo {
		display: block;
		height: 66px;
		width: 66px;
		position: relative;
		top: (-$logoOffset);
		margin: 0 auto (-$logoOffset + $spacing-05);
	}

	.drawer {
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		z-index: 2;
		border-radius: $spacing-05 $spacing-05 0 0;
		background-color: $beige;
		box-shadow: 0 -2px 15px rgba(0, 0, 0, 0.2);
		pointer-events: auto;
		padding: 0 $spacing-08;
	}

	.title {
		@include text-heading-5();
		margin-bottom: $spacing-02;
		text-align: center;
	}

	.message {
		text-align: center;
	}

	.contentWrapper {
		overflow: hidden;
		transition: 0.5s ease-out;
		height: 0;
	}

	.mainContent {
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

	.toggleWrapper {
		display: block;
		text-align: center;
		line-height: 0;
		cursor: pointer;
		pointer-events: auto;
		padding: $spacing-05 0 $spacing-07;
	}

	.toggleIcon {
		width: $spacing-04;
	}

	.isOpen {
		.toggleIcon {
			transform: rotate(180deg);
		}
	}

	@media (max-width: 350px) {
		.reloadButton {
			padding: 0 $spacing-06;
		}
	}
</style>
