<template>
	<div>
		<slot />
		<div :class="$style.message">
			Tipping is optional but appreciated. Tips are nonrefundable and cannot be added after placing an order.
		</div>

		<button-bar
			:class="$style.mainButtons"
			:buttons="buttons"
			:selected="selectedButton"
			@change="changeButton"
		/>

		<div v-if="isOtherSelected">
			<div :class="$style.tipTitle">Enter Custom Tip</div>
			<div :class="$style.tipWrapper">
				<button-bar
					:small="true"
					:buttons="customInputMethods"
					:selected="selectedInputMethod"
					@change="changeInputMethod"
				/>
				<validated-input
					:class="$style.input"
					type="number"
					inputmode="decimal"
					v-model="customInputValue"
					@input="emitValue(tipValue)"
				/>
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
			selectedInputMethod: null,
			customInputMethods: [{ heading: '$' }, { heading: '%' }],
			customInputValue: 0,
			tipPercentages: [15, 20, 25], // eslint-disable-line no-magic-numbers
			otherButton: { heading: 'Other' },
		};
	},
	computed: {
		buttons() {
			const buttons = this.tipPercentages.map(percent => {
				const tipAmount = this.getTipAmount(percent);

				return {
					heading: `${percent}%`,
					subheading: `(${formatCurrency(tipAmount)})`,
					tipAmount,
				};
			});

			buttons.push(this.otherButton);

			return buttons;
		},
		isOtherSelected() {
			return this.selectedButton === this.otherButton;
		},
		tipValue() {
			if (this.selectedInputMethod.heading === '%') {
				return this.roundCurrency(this.subtotal * (this.customInputValue / 100));
			}

			return this.roundCurrency(this.customInputValue);
		},
	},
	methods: {
		changeButton(selectedButton) {
			this.selectedButton = selectedButton;
			this.customInputValue = 0;

			if (this.selectedButton === this.otherButton) this.$emit('change', 0);
			else this.$emit('change', this.selectedButton.tipAmount);
		},
		changeInputMethod(selectedInputMethod) {
			this.selectedInputMethod = selectedInputMethod;
			this.$emit('change', this.tipValue);
		},
		getTipAmount(percentage) {
			return this.subtotal * (percentage / 100);
		},
		roundCurrency(value) {
			return Math.round(value * 100) / 100;
		},
	},
	filters: {
		currency(value) {
			return formatCurrency(value);
		},
	},
	created() {
		this.selectedButton = this.buttons[0];
		this.selectedInputMethod = this.customInputMethods[0];
		this.emitValue(this.selectedButton.tipAmount);
	},
};
</script>

<style lang="scss" module>
	@import '../styles/variables';
	@import '../styles/mixins';

	.message {
		@include text-body-small();
		color: $yellow;
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
