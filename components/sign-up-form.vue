<template>
	<validated-form>
		<div :class="$style.row">
			<validated-input :class="$style.inputHalf" label="First Name"/>
			<validated-input :class="$style.inputHalf" label="Last Name"/>
		</div>
			<validated-input label="Email"/>
			<validated-input label="Password"/>
			<validated-input label="Birthday (optional)"/>
			<validated-input label="Phone Number"/>
		<div>
			<radio-button-card value="points" :selectedValue="selectedCard" @change="handleCardSelect">
				<div :class="$style.cardTitle">Just Points & Rewards</div>
				<div :class="$style.cardBodyText">As a Pressed Points Insider, you collect points on every order to be able to redeem for free items.</div>
			</radio-button-card>
			<radio-button-card value="vip" :selectedValue="selectedCard" @change="handleCardSelect">
				<div :class="$style.cardTitle">Get Discounts!</div>
				<div :class="$style.cardBodyText">Become a VIP member by committing to a minimum $10 monthly spend and get discounted pricing everyday!</div>
			</radio-button-card>
		</div>
		<div :class="$style.disclaimer">
			By signing up you are agreeing to the <a :class="$style.disclaimerLink" href="#">Terms & Conditions</a> and the <a :class="$style.disclaimerLink" href="#">Membership Program</a>.
		</div>
		<button :class="$style.submit">Confirm</button>
	</validated-form>
</template>

<script>
import RadioButtonCard from './radio-button-card';
import ValidatedForm from './validated-form';
import ValidatedInput from './validated-input';

export default {
	components: {
		RadioButtonCard,
		ValidatedForm,
		ValidatedInput
	},

	data() {
		return {
			selectedCard: ''
		};
	},

	methods: {
		handleCardSelect(val) {
			this.selectedCard = val;
		}
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
