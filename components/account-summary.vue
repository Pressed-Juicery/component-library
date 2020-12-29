<template>
	<div :class="$style.root">
		<div :class="$style.welcomeMessage">Welcome, {{ user.firstName }}</div>
		<div :class="$style.warningMessage"></div>
		<div :class="$style.infoGroup">
			<div :class="$style.infoLeft">
				<div :class="$style.infoValue">{{ user.wallet.points }}</div>
				<div :class="$style.title">Pressed Points</div>
			</div>
			<div :class="$style.infoCenter">
				<div :class="$style.infoValue">{{ user.wallet.funds }}</div>
				<div :class="$style.title">Pressed Cash</div>
			</div>
			<div :class="$style.infoRight">
				<img :class="$style.icon" :src="tierIcon[user.wallet.tier]" alt="">
				<div :class="$style.tier">{{ user.wallet.tier }}</div>
			</div>
		</div>
	</div>
</template>

<script>
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
};
</script>

<style lang='scss' module>
	@import "../styles/variables.scss";
	@import "../styles/mixins.scss";

	.root {

	}

	.infoGroup,
	.infoRight {
		display: grid;
	}

	.infoGroup {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		border-top: $border-light;
		border-bottom: $border-light;
	}

	.infoLeft,
	.infoCenter,
	.infoRight {
		padding: $spacing-06;
	}

	.infoLeft,
	.infoCenter {
		border-right: $border-light;
	}

	.infoRight {
		place-items: center;
	}

	.infoValue,
	.welcomeMessage {
		@include text-heading-5();
		margin-bottom: $spacing-02;
	}

	.title {
		@include text-body-small();
		@include text-subtle();
	}

	.icon {
		margin-bottom: $spacing-02;
	}

	.tier {
		text-transform: lowercase;

		&::first-letter {
			text-transform: capitalize;
		}
	}
</style>
