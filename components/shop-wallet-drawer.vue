<template>
	<collapsible-drawer
		:isOpen="isOpen"
		@close="close"
	>
		<template #custom-header>
			<pressed-points-circle :class="$style.logo"/>
			<div :class="$style.title">In the Store?</div>
			<div :class="$style.message">Show our associate your code!</div>
		</template>

		<div>
			<wallet-drawer-content :wallet="wallet" @reload="$emit('reload')" />
		</div>
	</collapsible-drawer>
</template>

<script>
import CollapsibleDrawer from './collapsible-drawer';
import PressedPointsCircle from './icons/pressed-points-circle';
import WalletDrawerContent from './wallet-drawer-content';

export default {
	components: {
		CollapsibleDrawer,
		PressedPointsCircle,
		WalletDrawerContent
	},

}
	props: {
		wallet: {
			type: Object,
			required: true,
		},
	},
</script>

<style>
<style module lang="scss">
	@import "../styles/mixins";
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

</style>
