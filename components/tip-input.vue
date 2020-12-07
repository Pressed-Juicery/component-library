<template>
	<div>
		<div :class="$style.title">
			<slot />
		</div>
		<div :class="$style.message">
			Tipping is optional but appreciated.
			Tips cannot be added after placing an order.
		</div>
		<button-bar
			:class="$style.mainButtons"
			:buttonLabels="buttonLabels"
			:selectedLabel="selectedLabel"
			@change="handleButtonChange"
		></button-bar>

		<div v-if="isOtherSelected">
			<div :class="$style.tipTitle">Enter Custom Tip</div>
			<div :class="$style.tipWrapper">
				<button-bar
					:small="true"
					:buttonLabels="['$', '%']"
					:selectedLabel="selectedValue"
					@change="handleValueChange"
				></button-bar>
				<validated-input
					type="number"
					inputmode="decimal"
					:class="$style.input"
					v-model="customInputValue"
					@input="emitCustomTip"
				></validated-input>
				<div>{{ tipValue | currency }}</div>
			</div>
		</div>
	</div>
</template>

<script>
import ButtonBar from './button-bar';
import ValidatedInput from './validated-input';
import { formatCurrency } from '../utilities/formatters';

export default {
	components: { ButtonBar, ValidatedInput },
	props: {
		subtotal: {
			required: true,
			type: Number,
		},
	},
	data() {
		return {
			selectedLabel: '15%',
			selectedValue: '$',
			customInputValue: 0,
			labels: ['15%', '20%', '25%', 'Other', 'No Tip'],
		};
	},
	computed: {
		buttonLabels() {
			return this.labels.map(label => {
				if (isNaN(parseInt(label, 10))) { // eslint-disable-line no-restricted-globals
					return label;
				}

				return {
					heading: label,
					subheading: `(${formatCurrency(this.subtotal * (parseInt(label, 10) / 100))})`,
				};
			});
		},
		isOtherSelected() {
			return this.selectedLabel === 'Other';
		},
		tipValue() {
			if (this.selectedValue === '%') return this.subtotal * (this.customInputValue / 100);

			return this.customInputValue;
		},
	},
	methods: {
		handleButtonChange(value) {
			this.selectedLabel = value;
			this.customInputValue = 0;

			// eslint-disable-next-line no-restricted-globals
			if (isNaN(parseInt(this.selectedLabel, 10))) this.$emit('change', 0);
			else this.emitSelectedTip();
		},
		handleValueChange(value) {
			this.selectedValue = value;
			this.emitCustomTip();
		},
		emitCustomTip() {
			this.$emit('change', this.tipValue);
		},
		emitSelectedTip() {
			this.$emit('change', this.subtotal * (parseInt(this.selectedLabel, 10) / 100));
		},
	},
	filters: {
		currency(value) {
			return formatCurrency(value);
		},
	},
	created() {
		this.emitSelectedTip();
	},
};
</script>

<style lang="scss" module>
	@import '../styles/variables';
	@import '../styles/mixins';

	.title {
		@include text-bolder();
	}

	.message {
		@include text-body-small();
		color: #c8900f;
		margin-bottom: $spacing-05;
	}

	.mainButtons {
		margin-bottom: $spacing-05;
	}

	.tipTitle {
		margin-bottom: $spacing-05;
	}

	.tipWrapper {
		display: grid;
		align-items: center;
		grid-template-columns: 112px 133px auto;
		grid-column-gap: $spacing-05;
	}

	.input {
		margin: 0;
	}
</style>
