<template>
	<collapsible-drawer
		:class="[$style.root, {[$style.isOpen]: isOpen}]"
		:isOpen="isOpen"
		@close="close"
	>
		<template #custom-header>
			<pressed-points-circle :class="$style.logo" />
			<div :class="$style.title">In the Store?</div>
			<div :class="$style.message">Show our associate your code!</div>
		</template>

		<div>
			<wallet-drawer-content :wallet="wallet" @reload="$emit('reload')" />
			<div :class="$style.toggleWrapper" @click="close">
				<arrow-down-icon :class="$style.toggleIcon" color="#262626" />
			</div>
		</div>
	</collapsible-drawer>
</template>

<script>
import ArrowDownIcon from './icons/arrow-down-icon';
import CollapsibleDrawer from './collapsible-drawer';
import PressedPointsCircle from './icons/pressed-points-circle';
import WalletDrawerContent from './wallet-drawer-content';

export default {
	components: {
		ArrowDownIcon,
		CollapsibleDrawer,
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

	methods: {
		close() {
			this.$emit('close');
		},
	},
};
</script>

<style module lang="scss">
	@import "../styles/mixins";

	$logoOffset: 22px;

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

	.title {
		@include text-heading-5();
		margin-bottom: $spacing-02;
		text-align: center;
	}

	.message {
		text-align: center;
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
