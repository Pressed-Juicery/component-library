<!-- eslint-disable max-lines -->
<template>
	<div :class="[$style.root, { [$style.isOpen]: isOpen }]">
		<overlay :is-active="isOpen" @close="close" />

		<div :class="$style.drawer" @click="open">
			<pressed-points-circle :class="$style.logo"/>

			<div :class="$style.header">
				<div :class="$style.title">In the Store?</div>
				<div v-if="!isOpen" :class="$style.message">Tap here for your QR Code</div>
				<div :class="$style.message">Show our associate your code!</div>
			</div>

			<transition name="slider" @enter="enter" @leave="leave">
				<div v-show="isOpen" :class="$style.contentWrapper">
					<div v-if="isVip" :class="$style.vipBadge">VIP</div>
					<wallet-drawer-content :wallet="wallet" @reload="$emit('reload')"/>
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
import WalletDrawerContent from './wallet-drawer-content';

export default {
	components: { ArrowDownIcon, Overlay, PressedPointsCircle, WalletDrawerContent },

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
		isVip() {
			return this.wallet.tier && this.wallet.tier.toLowerCase() === 'vip';
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
		position: relative; // required to enforce z-index
		width: 100%;
		z-index: 200;
		border-radius: $spacing-05 $spacing-05 0 0;
		background-color: $beige;
		box-shadow: 0 -2px 15px rgba(0, 0, 0, 0.2);
		pointer-events: auto;
		padding: 0 $spacing-08;
	}

	.header {
		text-align: center;
	}

	.title {
		@include text-heading-5();
		margin-bottom: $spacing-02;
	}

	.vipBadge {
		@include button-pill();
		display: block;
		margin: $spacing-05 auto 0;
		width: $spacing-12;
	}

	.contentWrapper {
		overflow: hidden;
		transition: 0.5s ease-out;
		height: 0;
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
</style>
