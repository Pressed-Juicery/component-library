<template>
	<div>
		<div :class="$style.wrapper">
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
					<option v-for="day in days" :key="day">{{ day }}</option>
				</select>
			</div>
		</div>

		<div v-if="error" :class="$style.error">{{ this.error }}</div>
	</div>
</template>

<script>
import { isDayOfMonth } from '../utilities/validators';
import { validate } from '../utilities/validate';
export default {
	name: 'ValidatedBirthdayInput',
	data: () => {
		return {
			month: null,
			day: null,
			error: null,
			rules: [{
				validator: isDayOfMonth,
				message: 'Please enter a valid birthday.',
			}],
		};
	},
	computed: {
		days() {
			if (!this.month) return 31; // eslint-disable-line no-magic-numbers
			// eslint-disable-next-line no-magic-numbers
			const daysPerMonth = [null, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

			return daysPerMonth[this.month];
		},
		birthday() {
			return `${this.month || ''}/${this.day || ''}`;
		},
	},
	methods: {
		onChange() {
			this.validate().then(() => {
				const birthday = this.birthday === '/' ? null : this.birthday;

				this.$emit('input', birthday);
			});
		},
		validate() {
			return validate(this.birthday, this.rules)
				.then(error => {
					this.error = error;

					return error;
				});
		},
		isValid() {
			return this.validate().then(hasError => !hasError);
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

	.error {
		color: $red-60;
	}
</style>
