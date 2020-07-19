<template>
	<validated-component :class="$style.wrapper" :value="birthday" :rules="rules" :is-eager="isEager">
		<div>
			<label for="month">Month</label>
			<select id="month" v-model="month" @change="onChange">
				<option></option>
				<option value="1">1 | January</option>
				<option value="2">2 | February</option>
				<option value="3">3 | March</option>
				<option value="4">4 | April</option>
				<option value="5">5 | May</option>
				<option value="6">6 | June</option>
				<option value="7">7 | July</option>
				<option value="8">8 | August</option>
				<option value="9">9 | September</option>
				<option value="10">10 | October</option>
				<option value="11">11 | November</option>
				<option value="12">12 | December</option>
			</select>
		</div>

		<div>
			<label for="day">Day</label>
			<select id="day" v-model="day" @change="onChange">
				<option></option>
				<option v-for="day in daysInMonth" :key="day">{{ day }}</option>
			</select>
		</div>
	</validated-component>
</template>

<script>
import ValidatedComponent from './validated-component';
import { isDayOfMonth } from '../utilities/validators';

export default {
	components: { ValidatedComponent },
	data: () => {
		return {
			month: null,
			day: null,
			isEager: false,
			rules: [{
				validator: isDayOfMonth,
				message: 'Please enter a valid birthday.',
			}],
		};
	},
	computed: {
		daysInMonth() {
			if (!this.month) return 31; // eslint-disable-line no-magic-numbers
			// eslint-disable-next-line no-magic-numbers
			const daysPerMonth = [null, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

			return daysPerMonth[this.month];
		},
		birthday() {
			return this.month && this.day ? `${this.month}/${this.day}` : null;
		},
	},
	watch: {
		birthday() {
			this.$emit('input', this.birthday);
		},
		daysInMonth() {
			if (this.day > this.daysInMonth) this.day = this.daysInMonth;
		},
	},
	methods: {
		onChange() {
			this.isEager = this.isEager || Boolean(this.birthday);
		},
	},
};
</script>

<style lang="scss" module>
	@import '../styles/variables';

	.wrapper {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-column-gap: $form-column-gap;
	}
</style>
