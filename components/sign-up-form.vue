<template>
	<validated-form>
		<div :class="$style.row">
			<validated-input
				:class="$style.inputHalf"
				:rules="rules.firstName"
				v-model="user.firstName"
				label="First Name"/>
			<validated-input
				:class="$style.inputHalf"
				:rules="rules.lastName"
				v-model="user.lastName"
				label="Last Name"/>
		</div>
		<validated-input :rules="rules.email" v-model="user.email" label="Email"/>
		<validated-input :rules="rules.password" v-model="user.password" label="Password"/>
		<validated-input :rules="rules.birthday" v-model="user.birthday" label="Birthday (optional)"/>
		<validated-input :rules="rules.phone" v-model="user.phone" label="Phone Number"/>
		<div>
			<radio-button-card value="points" :selectedValue="selectedCard" @change="handleCardSelect">
				<div :class="$style.cardTitle">Just Points & Rewards</div>
				<div :class="$style.cardBodyText">
					As a Pressed Points Insider, you collect points on every order to be able to redeem for free items.
				</div>
			</radio-button-card>
			<radio-button-card value="vip" :selectedValue="selectedCard" @change="handleCardSelect">
				<div :class="$style.cardTitle">Get Discounts!</div>
				<div :class="$style.cardBodyText">
					Become a VIP member by committing to a minimum $10 monthly spend and
					get discounted pricing everyday!
				</div>
			</radio-button-card>
		</div>
		<div :class="$style.disclaimer">
			By signing up you are agreeing to the <a :class="$style.disclaimerLink" href="#">Terms & Conditions</a>
			and the <a :class="$style.disclaimerLink" href="#">Membership Program</a>.
		</div>
		<button :class="$style.submit">Confirm</button>
	</validated-form>
</template>

<script>
import { hasExactLength, isNotEmpty, isNumber, isValidPhoneNumber } from '../utilities/validators';
import RadioButtonCard from './radio-button-card';
import ValidatedForm from './validated-form';
import ValidatedInput from './validated-input';

export default {
	components: {
		RadioButtonCard,
		ValidatedForm,
		ValidatedInput,
	},

	data() {
		return {
			selectedCard: '',
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
					message: 'Please enter your first name.',
				}],
				email: [{
					validator: isNotEmpty,
					message: 'Please enter your first name.',
				}],
				password: [{
					validator: isNotEmpty,
					message: 'Please enter your first name.',
				}],
				birthday: [{
					validator: isNotEmpty,
					message: 'Please enter your first name.',
				}],
				phone: [{
					validator: isNotEmpty,
					message: 'Please enter your first name.',
				}],
			},
		};
	},

	methods: {
		handleCardSelect(val) {
			this.selectedCard = val;
		},
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

.cardTitle {
	@include text-body;
}

.cardBodyText {
	@include text-body-small;
}

.disclaimer {
	@include text-body-small;
	margin-bottom: $spacing-06;
}

.disclaimerLink {
	text-decoration: underline;
}

.submit {
	width: 100%;
}

</style>
