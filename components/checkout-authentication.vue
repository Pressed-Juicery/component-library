<template>
	<div>
		<div :class="$style.orderPreference" v-if="drawerPane === 'order-preference'">
			<div :class="$style.titleRow">
				<div>How would you like to order?</div>
				<div :class="$style.close" @click="$emit('close')">x</div>
			</div>

			<div :class="$style.selection" @click="drawerPane = 'signin'">Sign in to Pressed Points</div>
			<div :class="$style.selection" @click="$emit('signup')">Join now</div>
			<div :class="$style.selection" @click="drawerPane = 'guest-info'">Continue as guest</div>
		</div>

		<back-arrow-drawer v-if="drawerPane === 'signin'">
			<template v-slot:main-content>
				<signin buttonText="Sign In & Check Out" @sign-in="credentials => $emit('sign-in', credentials)" />
			</template>
		</back-arrow-drawer>

		<back-arrow-drawer v-if="drawerPane === 'guest-info'">
			<template v-slot:header-item>
				<div :class="$style.signup" @click="$emit('signup')">Sign Up</div>
			</template>

			<template v-slot:main-content>
				<guest-information-form buttonText="Continue as Guest" @add-guest="guest => $emit('add-guest', guest)" />
			</template>
		</back-arrow-drawer>
	</div>
</template>

<script>
import BackArrowDrawer from './back-arrow-drawer';
import GuestInformationForm from './guest-information-form';
import Signin from './signin';

export default{
	components: { BackArrowDrawer, GuestInformationForm, Signin },

	data() {
		return {
			drawerPane: 'order-preference',
		};
	},
};
</script>

<style module lang="scss">
	@import "../styles/buttons";
	@import "../styles/mixins";
	@import "../styles/variables";

	.orderPreference {
		margin-top: $spacing-03;
	}

	.titleRow {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: $spacing-08;
	}

	.selection {
		@include text-heading-5();

		margin-bottom: $spacing-07;
	}
</style>
