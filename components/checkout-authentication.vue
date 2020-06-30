<template>
	<div>
		<pane-header :class="$style.paneHeader" @back="back" @close="$emit('close-sidebar')" />

		<div v-if="pane === 'menu'">
			<div :class="$style.menuTitle">How would you like to checkout?</div>

			<div
				:class="$style.menuItem"
				v-for="item in items"
				:key="item.location"
				@click="goTo(item.location)"
			>
				<span>{{ item.label }}</span>
				<arrow-down-icon :class="$style.arrow" />
			</div>
		</div>

		<sign-in
				v-else-if="pane === 'sign-in'"
				buttonText="Sign In & Check Out"
				@submit="credentials => $emit('sign-in', credentials)"
		/>

		<guest-information-form
			v-else-if="pane === 'guest-form'"
			buttonText="Continue"
			:guest="guest"
			@submit="guest => $emit('add-guest', guest)"
		/>
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
		back() {
			if (this.pane === 'menu') this.$emit('close-checkout-authentication');
			else this.pane = 'menu';
		},

		goTo(location) {
			if (location === 'sign-up') return void(this.$emit('sign-up'));

			this.pane = location;
		},
	},
};
</script>

<style module lang="scss">
	@import "../styles/mixins";
	@import "../styles/variables";

	.paneHeader {
		margin: 0 $spacing-07;
	}

	.menuTitle {
		@include text-heading-5();

		padding: $spacing-07;
		border-bottom: $border-light;
	}

	.menuItem {
		@include text-bold();

		display: flex;
		justify-content: space-between;
		align-items: center;
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
