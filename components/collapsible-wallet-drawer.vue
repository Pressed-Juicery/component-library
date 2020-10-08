<template>
	<drawer
		:class="{ [$style.isOpen]: isOpen }"
		:isOpen="isOpen"
		drawer-style="background:var(--beige);overflow:visible"
		@close="close"
	>
		<pressed-points-circle :class="$style.logo" />
		<div :class="$style.header">
			<div :class="$style.title">In the Store?</div>
			<div>Show our associate your code!</div>
			<div v-if="isVip" :class="$style.vipBadge">VIP</div>
		</div>

		<wallet-drawer-content :wallet="wallet" @reload="$emit('reload')" />
		<div :class="$style.toggleWrapper" @click="close">
			<arrow-down-icon :class="$style.toggleIcon" color="#262626" />
		</div>
	</drawer>
</template>

<script>
import ArrowDownIcon from './icons/arrow-down-icon';
import Drawer from './drawer';
import PressedPointsCircle from './icons/pressed-points-circle';
import WalletDrawerContent from './wallet-drawer-content';

export default {
	components: {
		ArrowDownIcon,
		Drawer,
		PressedPointsCircle,
		WalletDrawerContent,
	},

	props: {
		wallet: {
			type: Object,
			required: true,
		},
		isOpen: {
			type: Boolean,
			default: true,
		},
	},

	computed: {
		isVip() {
			return this.wallet.tier && this.wallet.tier.toLowerCase() === 'vip';
		},
	},

	methods: {
		close() {
			this.$emit('close');
		},
	},
};
</script>

<style module lang="scss">
	@import "../styles/mixins";
	@import "../styles/variables";

	$logoOffset: 22px;

	:root {
		--beige: #{$beige};
	}

	.logo {
		position: relative;
		display: block;
		top: (-$logoOffset);
		height: 66px;
		width: 66px;
		margin: 0 auto (-$logoOffset + $spacing-05);
		opacity: 0;
		transition: opacity .5s ease;
	}

	.header {
		text-align: center;
	}

	.title {
		@include text-heading-5();
		margin-bottom: $spacing-02;
	}

	.vipBadge {
		@include button;
		@include _button--pill;
		margin-top: $spacing-05;
		width: $spacing-12;
		cursor: default;
		outline: none;
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
		.logo {
			opacity: 1;
		}
	}
</style>
