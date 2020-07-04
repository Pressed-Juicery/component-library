<template>
	<validated-form :id="id" @submit="$emit('submit', user)">
		<div :class="$style.row">
			<validated-input
				label="First Name"
				:class="$style.inputHalf"
				:rules="rules.firstName"
				v-model="user.firstName"
			/>
			<validated-input
				label="Last Name"
				:class="$style.inputHalf"
				:rules="rules.lastName"
				v-model="user.lastName"
			/>
		</div>
		<validated-input type="email" label="Email" :rules="rules.email" v-model="user.email" />
		<validated-input type="password" label="Password" :rules="rules.password" v-model="user.password" />
		<validated-input type="date" label="Birthday (optional)" :rules="rules.birthday" v-model="user.birthday" />
		<validated-input type="phone" label="Phone Number" :rules="rules.phone" v-model="user.phone" />
	</validated-form>
</template>

<script>
import { isEmail, isNotEmpty, isValidPhoneNumber } from '../utilities/validators';
import ValidatedForm from './validated-form';
import ValidatedInput from './validated-input';

export default {
	components: {
		ValidatedForm,
		ValidatedInput,
	},
	props: {
		id: {
			type: String,
		},
	},
	// eslint-disable-next-line max-lines-per-function
	data() {
		return {
			user: {
				firstName: '',
				lastName: '',
				email: '',
				password: '',
				birthday: '',
				phone: '',
			},

			rules: {
				firstName: [{
					validator: isNotEmpty,
					message: 'Please enter your first name.',
				}],
				lastName: [{
					validator: isNotEmpty,
					message: 'Please enter your last name.',
				}],
				email: [{
					validator: isNotEmpty,
					message: 'Please enter a valid Email address.',
				}, {
					validator: isEmail,
					message: 'Please enter a valid Email address.',
				}],
				password: [{
					validator: isNotEmpty,
					message: 'Please enter a valid password.',
				}],
				phone: [{
					validator: isNotEmpty,
					message: 'Please enter a valid phone number.',
				}, {
					validator: isValidPhoneNumber,
					message: 'Please enter a valid phone number.',
				}],
			},
		};
	},
};
</script>

<style module lang="scss">
	@import '../styles/mixins';

	.row {
		display: flex;
	}

	.inputHalf {
		flex: 1 1 0;
	}

	.inputHalf:first-of-type {
		margin-right: $spacing-05;
	}

	.inputHalf:nth-of-type(2) {
		margin-left: $spacing-05;
	}
</style>
