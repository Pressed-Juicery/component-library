<template>
	<div>
		<div v-if="user">
			<div :class="$style.cta">Welcome<span v-if="user.firstName">, {{ user.firstName }}</span></div>
			<div :class="$style.infoGroup" v-if="user.wallet">
				<div :class="$style.infoLeft">
					<div :class="$style.infoValue">{{ user.wallet.points }}</div>
					<div :class="$style.title">Pressed Points</div>
				</div>
				<div :class="$style.infoCenter">
					<div :class="$style.infoValue">{{ user.wallet.funds | currency }}</div>
					<div :class="$style.title">Pressed Cash</div>
				</div>
				<div :class="$style.infoRight">
					<img :class="$style.icon" :src="iconSrc" alt="">
					<div :class="$style.tier">{{ user.wallet.tier | tier }}</div>
				</div>
			</div>
		</div>
		<div v-else>
			<div :class="$style.cta">Live the #PressedLife</div>
			<div :class="$style.message">
				Sign in to your Pressed Juicery account to see pressed points, pressed cash, orders, and more!
			</div>
			<a :class="$style.ctaLink" @click="$emit('sign-in')" tabindex="0">Sign In</a>
			<a :class="$style.ctaLink" @click="$emit('create-account')" tabindex="0">Create Account</a>
		</div>
	</div>
</template>

<script>
import { formatCurrency } from '../utilities/formatters.js';

export default {
	props: {
		user: {
			type: Object,
		},
	},
	computed: {
		iconSrc() {
			const tier = this.user && this.user.wallet && this.user.wallet.tier && this.user.wallet.tier.toUpperCase();
			const iconUrlsByTier = {
				MEMBER: 'https://d3e4ixgvd0ibii.cloudfront.net/shopify/icons/insider-member.svg',
				INSIDER: 'https://d3e4ixgvd0ibii.cloudfront.net/shopify/icons/insider-member.svg',
				ELITE: 'https://d3e4ixgvd0ibii.cloudfront.net/shopify/icons/elite-member.svg',
				VIP: 'https://d3e4ixgvd0ibii.cloudfront.net/shopify/icons/vip-member.svg',
			};

			return iconUrlsByTier[tier] || iconUrlsByTier.MEMBER;
		},
	},
	filters: {
		currency(funds) {
			return formatCurrency(funds);
		},
		tier(userTier = '') {
			const tiers = {
				VIP: 'VIP',
				ELITE: 'Elite',
				INSIDER: 'Insider',
			};

			return tiers[userTier.toUpperCase()] || 'Member';
		},
	},
};
</script>

<style lang='scss' module>
	@import "../styles/variables.scss";
	@import "../styles/mixins.scss";

	.infoGroup,
	.infoRight,
	.infoCenter,
	.infoLeft {
		display: grid;
	}

	.infoGroup {
		grid-template-columns: 1fr 1fr $spacing-11;
		border-top: $border-light;
		border-bottom: $border-light;
	}

	.infoCenter,
	.infoRight,
	.infoLeft {
		padding: $spacing-05 0;
	}

	.infoLeft,
	.infoCenter {
		border-right: $border-light;
	}

	.infoCenter {
		justify-content: center;
	}

	.infoRight {
		place-items: center;
	}

	.infoValue,
	.icon,
	.message {
		margin-bottom: $spacing-03;
	}

	.infoValue {
		@include text-heading-5();
	}

	.cta {
		@include text-heading-4();
		margin-bottom: $spacing-05;
	}

	.title {
		@include text-body-small();
		@include text-subtle();
	}

	.tier {
		@include text-bold();
	}

	.ctaLink {
		@include text-uppercase();
		@include text-bolder();
		text-decoration: underline;
		margin-right: $spacing-05;
	}
</style>
