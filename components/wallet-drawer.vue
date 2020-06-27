<template>
	<div :class="[$style.root, { [$style.isOpen]: isOpen }]">
		<div :class="$style.overlay" @click="close" />

		<div :class="$style.drawer" @click="open">
			<pressed-points-circle :class="$style.logo"/>

			<div :class="$style.content">
				<div :class="$style.title">In the Store?</div>
				<div :class="$style.message" v-if="!isOpen">Tap here for your QR Code</div>
				<div :class="$style.message" v-else>Show our associate your code!</div>

				<transition name="slider"
							v-on:before-enter="beforeEnter"
							v-on:enter="enter"
							v-on:before-leave="beforeLeave"
							v-on:leave="leave"
				>
					<div v-show="isOpen" :class="$style.slidableContent">
						<div :class="$style.mainContent">
							<qr-code :class="$style.qrCode" :code="wallet.cardNumber" background="#f6f4ec" />
							<div :class="$style.walletData">
								<div :class="$style.label">Balance</div>
								<div :class="$style.value">{{ balance }}</div>
								<div :class="$style.label">Points</div>
								<div :class="$style.value">{{ wallet.points }}</div>
								<div :class="$style.label">Account #</div>
								<div :class="$style.value">{{ wallet.cardNumber }}</div>
							</div>
						</div>

						<button :class="[$style.reloadButton, 'button', 'button--secondary', 'button--pill']"
								@click="$emit('reload')"
						>
							Reload Balance
						</button>
					</div>
				</transition>

				<div :class="$style.toggleWrapper" @click.stop="toggle">
					<arrow-down :class="$style.toggleIcon" color="#262626" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import ArrowDown from './icons/arrow-down-icon';
import PressedPointsCircle from './icons/pressed-points-circle';
import QrCode from './qr-code';
import { formatCurrency } from '../utilities/formatters';

export default {
	components: { ArrowDown, PressedPointsCircle, QrCode },

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
	@import "../styles/variables";
	@import "../styles/mixins";

	$logoOffset: 22px;

	.root,
	.overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
	}

	.overlay {
		z-index: 1;
		background-color: $gray-90;
		opacity: 0;
		pointer-events: none;
		transition: .5s ease opacity;
	}

	.logo {
		display: block;
		height: 66px;
		width: 66px;
		margin: 0 auto (-$spacing-04);
		position: relative;
		top: (-$logoOffset);
	}

	.drawer {
		position: absolute;
		left: 0;
		bottom: 0;
		width: 100%;
		z-index: 1;
		max-height: 82%;
		border-radius: $spacing-05 $spacing-05 0 0;
		background-color: $beige;
		box-shadow: 0 1px 15px -8px rgba(0, 0, 0, 0.5);
		pointer-events: auto;
	}

	.content {
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

	.slidableContent {
		overflow: hidden;
		transition: 0.5s ease-out;
		margin-top: $spacing-07;
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
		line-height: 1px;
		cursor: pointer;
		pointer-events: auto;
		padding: $spacing-05 0 $spacing-07;
	}

	.toggleIcon {
		width: $spacing-04;
	}

	.isOpen {
		.overlay {
			opacity: 0.2;
			pointer-events: auto;
		}

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
