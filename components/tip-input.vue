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
			:buttons="buttons"
			:selected="selectedButton"
			@change="handleButtonChange"
		></button-bar>

		<div v-if="isOtherSelected">
			<div :class="$style.tipTitle">Enter Custom Tip</div>
			<div :class="$style.tipWrapper">
				<button-bar
					:small="true"
					:buttons="customInputOptions"
					:selected="customInputSelected"
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
			type: Number,
			required: true,
		},
	},
	data() {
		return {
			selectedButton: null,
			customInputSelected: null,
			customInputOptions: [{ heading: '$' }, { heading: '%' }],
			customInputValue: 0,
			labels: ['15%', '20%', '25%', 'Other'],
		};
	},
	computed: {
		buttons() {
			return this.labels.map(label => {
				if (label === 'Other') return { heading: label };

				return {
					heading: label,
					subheading: `(${formatCurrency(this.subtotal * (parseInt(label, 10) / 100))})`,
				};
			});
		},
		isOtherSelected() {
			return this.selectedButton.heading === 'Other';
		},
		tipValue() {
			if (this.customInputSelected.heading === '%') return this.subtotal * (this.customInputValue / 100);

			return this.customInputValue;
		},
	},
	methods: {
		handleButtonChange(value) {
			this.selectedButton = value;
			this.customInputValue = 0;

			if (this.selectedButton.heading === 'Other') this.$emit('change', 0);
			else this.emitSelectedTip();
		},
		handleValueChange(value) {
			this.customInputSelected = value;
			this.emitCustomTip();
		},
		emitCustomTip() {
			this.$emit('change', this.tipValue);
		},
		emitSelectedTip() {
			this.$emit('change', this.subtotal * (parseInt(this.selectedButton.heading, 10) / 100));
		},
	},
	filters: {
		currency(value) {
			return formatCurrency(value);
		},
	},
	created() {
		this.selectedButton = this.buttons[0];
		this.customInputSelected = this.customInputOptions[0];
	},
	mounted() {
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
