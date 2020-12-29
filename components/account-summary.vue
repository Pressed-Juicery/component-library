<template>
	<div>
		<div :class="$style.welcomeMessage">Welcome, {{ user.firstName }}</div>
		<div :class="$style.infoGroup">
			<div :class="$style.infoLeft">
				<div :class="$style.infoValue">{{ user.wallet.points }}</div>
				<div :class="$style.title">Pressed Points</div>
			</div>
			<div :class="$style.infoCenter">
				<div :class="$style.infoValue">{{ user.wallet.funds | currency }}</div>
				<div :class="$style.title">Pressed Cash</div>
			</div>
			<div :class="$style.infoRight">
				<img :class="$style.icon" :src="tierIcon[user.wallet.tier]" alt="">
				<div :class="$style.tier">{{ user.wallet.tier | tier }}</div>
			</div>
		</div>
	</div>
</template>

<script>
import { formatCurrency } from '../utilities/formatters.js';

export default {
	props: {
		user: {
			type: Object,
			required: true,
		},
	},
	data() {
		return {
			tierIcon: {
				ELITE: 'https://d3e4ixgvd0ibii.cloudfront.net/shopify/icons/elite-member.svg',
				VIP: 'https://d3e4ixgvd0ibii.cloudfront.net/shopify/icons/vip-member.svg',
				INSIDER: 'https://d3e4ixgvd0ibii.cloudfront.net/shopify/icons/insider-member.svg',
			},
		};
	},
	filters: {
		currency(funds) {
			return formatCurrency(funds);
		},
		tier(userTier) {
			const tiers = {
				VIP: "VIP",
				ELITE: "Elite",
				INSIDER: "Insider",
			}

			return tiers[userTier]
		}
	}
};
</script>

<style lang='scss' module>
	@import "../styles/variables.scss";
	@import "../styles/mixins.scss";

	.infoGroup,
	.infoRight {
		display: grid;
	}

	.infoGroup {
		grid-template-columns: 1fr 1fr $spacing-11;
		border-top: $border-light;
		border-bottom: $border-light;
		margin-top: $spacing-05;
	}

	.infoLeft,
	.infoCenter,
	.infoRight {
		padding: $spacing-05;
	}

	.infoLeft,
	.infoCenter {
		border-right: $border-light;
	}

	.infoRight {
		place-items: center;
	}

	.infoValue {
		@include text-heading-5();
		margin-bottom: $spacing-02;
	}

	.welcomeMessage {
		@include text-heading-4();
	}

	.title {
		@include text-body-small();
		@include text-subtle();
	}
</style>
