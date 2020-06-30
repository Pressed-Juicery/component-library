<template>
	<div>
		<div v-if="pane === 'menu'">
			<pane-header @back="$emit('close-checkout-authentication')" @close="$emit('close-sidebar')" />
			<div :class="$style.menuTitle">How would you like to checkout?</div>

			<div :class="$style.menuItem"
			     v-for="item in items"
			     :key="item.location"
			     @click="goTo(item.location)">
				<span>{{ item.label }}</span>
				<arrow-down-icon :class="$style.arrow" />
			</div>
		</div>

		<div v-else-if="pane === 'sign-in'">
			<pane-header @back="pane = 'menu'" @close="$emit('close-sidebar')" />
			<sign-in buttonText="Sign In & Check Out" @submit="credentials => $emit('sign-in', credentials)" />
		</div>

		<div v-else-if="pane === 'guest-form'">
			<pane-header @back="pane = 'menu'" @close="$emit('close-sidebar')" />
			<guest-information-form buttonText="Continue"
			                        :guest="guest"
			                        @submit="guest => $emit('add-guest', guest)" />
		</div>
	</div>
</template>

<script>
import ArrowDownIcon from './icons/arrow-down-icon';
import GuestInformationForm from './guest-information-form';
import PaneHeader from './pane-header';
import SignIn from './sign-in';

export default {
	components: { ArrowDownIcon, GuestInformationForm, PaneHeader, SignIn },

	props: {
		guest: Object,
	},

	data() {
		return {
			pane: 'menu',
			items: [
				{ label: 'Sign in to Pressed Points', location: 'sign-in' },
				{ label: 'Join now', location: 'sign-up' },
				{ label: 'Continue as guest', location: 'guest-form' },
			],
		};
	},

	methods: {
		goTo(location) {
			if (location === 'sign-up') return this.$emit('sign-up');

			this.pane = location;

			return location;
		},
	},
};
</script>

<style module lang="scss">
	@import "../styles/mixins";
	@import "../styles/variables";

	.menuTitle {
		@include text-heading-5();

		margin: 0 (-$spacing-07);
		padding: $spacing-07;
		border-bottom: $border-light;
	}

	.menuItem {
		@include text-bold();

		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 0 (-$spacing-07);
		padding: $spacing-07;
		border-bottom: $border-light;
		cursor: pointer;
	}

	.arrow {
		height: 10px;
		width: 10px;
		transform: rotate(-90deg);
	}
</style>
