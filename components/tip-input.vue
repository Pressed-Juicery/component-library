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
					:buttons="customInputMethod"
					:selected="selectedInputMethod"
					@change="changeInputMethod"
				/>
				<validated-input
					type="number"
					inputmode="decimal"
					:class="$style.input"
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
			customInputMethod: [{ heading: '$' }, { heading: '%' }],
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
			if (this.selectedInputMethod.heading === '%') {
				return this.roundCurrency(this.subtotal * (this.customInputValue / 100));
			}

			return this.roundCurrency(this.customInputValue);
		},
		selectedPercentage() {
			return parseInt(this.selectedButton.heading, 10) / 100;
		},
	},
	methods: {
		changeButton(value) {
			this.selectedButton = value;
			this.customInputValue = 0;

			if (this.selectedButton.heading === 'Other') this.emitValue(0);
			else this.emitValue(this.subtotal * this.selectedPercentage);
		},
		changeInputMethod(value) {
			this.selectedInputMethod = value;
			this.emitValue(this.tipValue);
		},
		emitValue(value) {
			this.$emit('change', value);
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
		this.selectedInputMethod = this.customInputMethod[0];
	},
	mounted() {
		this.emitValue(this.subtotal * this.selectedPercentage);
	},
};
</script>

<style lang="scss" module>
	@import '../styles/variables';
	@import '../styles/mixins';

	.message {
		@include text-body-small();
		color: $color-text-message;
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
