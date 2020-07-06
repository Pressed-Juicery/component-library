<template>
	<div>
		<div :class="$style.wrapper">
			<div>
				<label for="month">Month</label>
				<select
						id="month"
						v-model="month"
						@change="onChange">
					<option></option>
					<option>1 | January</option>
					<option>2 | February</option>
					<option>3 | March</option>
					<option>4 | April</option>
					<option>5 | May</option>
					<option>6 | June</option>
					<option>7 | July</option>
					<option>8 | August</option>
					<option>9 | September</option>
					<option>10 | October</option>
					<option>11 | November</option>
					<option>12 | December</option>
				</select>
			</div>

			<div>
				<label for="day">Day</label>
				<select
						id="day"
						v-model="day"
						@change="onChange">
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
			if (!this.month) return 31;
			const month = this.getSelectedMonthNumber();
			const daysPerMonth = [null, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

			return daysPerMonth[month];
		},
		birthday() {
			const month = this.getSelectedMonthNumber();

			return `${month || ''}/${this.day || ''}`;
		},
	},
	methods: {
		getSelectedMonthNumber() {
			return this.month && this.month.split(' | ')[0];
		},
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
@import '../styles/variables.scss';

.wrapper {
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-column-gap: $spacing-06;
}

.error {
	color: $red-60;
}
</style>
