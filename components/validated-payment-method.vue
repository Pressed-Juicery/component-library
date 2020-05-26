<template>
	<div class="validated-payment-method">
		<div class="validated-payment-method__row">
			<label class="validated-payment-method__label" for="payment-method-number">Credit Card</label>
			<div id="payment-method-number" class="validated-payment-method__input"></div>

			<label v-if="fields.number.isTouched && !fields.number.isValid"
			       class="validated-payment-method__error"
			       for="payment-method-number">
				Please enter a valid credit card number.
			</label>
		</div>

		<div class="validated-payment-method__row validated-payment-method__grid">
			<div>
				<label class="validated-payment-method__label" for="expiration-date">Expiration Date</label>
				<div id="expiration-date" class="validated-payment-method__input"></div>

				<label for="expiration-date"
				       v-if="fields.expirationDate.isTouched && !fields.expirationDate.isValid"
				       class="validated-payment-method__error">
					Please enter a valid expiration date (MM/YY).
				</label>
			</div>

			<div>
				<label class="validated-payment-method__label" for="cvv">Security Code</label>
				<div id="cvv" class="validated-payment-method__input"></div>

				<label v-if="fields.cvv.isTouched && !fields.cvv.isValid"
				       class="validated-payment-method__error"
				       for="cvv">
					Please enter a valid CVV.
				</label>
			</div>

			<div>
				<label class="validated-payment-method__label"  for="postal-code">ZIP Code</label>
				<div id="postal-code" class="validated-payment-method__input"></div>

				<label v-if="fields.postalCode.isTouched && !fields.postalCode.isValid"
				       class="validated-payment-method__error"
				       for="postal-code" >
					Please enter a valid 5-digit ZIP code.
				</label>
			</div>
		</div>

		<div v-if="cannotLoadForm" class="error">
			<p>We are currently unable to complete your membership. Please try again at a later time.</p>
			<p>If you have any questions or concerns, please contact customer service at
				<a href="tel:+1-888-445-8423">888.44.JUICE (888.445.8423)</a>
			</p>
		</div>
	</div>
</template>

<script>
import { hostedFieldsService } from '../services/hosted-fields.service';

export default {
	props: {
		braintreeTokenizationKey: {
			type: String,
			required: true,
		},
	},

	// eslint-disable-next-line max-lines-per-function
	data() {
		return {
			cannotLoadForm: false,
			hostedFields: null,
			fields: {
				number: {
					selector: '#payment-method-number',
					isTouched: false,
					isValid: false,
				},
				cvv: {
					selector: '#cvv',
					isTouched: false,
					isValid: false,
				},
				expirationDate: {
					selector: '#expiration-date',
					placeholder: 'MM/YY',
					isTouched: false,
					isValid: false,
				},
				postalCode: {
					selector: '#postal-code',
					isTouched: false,
					isValid: false,
					minlength: 5,
					maxlength: 5,
				},
			},
		};
	},

	created() {
		this.initializeHostedFields();
	},

	methods: {
		initializeHostedFields() {
			const styles = {
				input: {
					'font-size': '18px',
				},
			};

			hostedFieldsService.create(this.braintreeTokenizationKey, this.fields, styles)
				.then(hostedFields => {
					this.hostedFields = hostedFields;

					hostedFields.on('notEmpty', event => {
						this.fields[event.emittedBy].isTouched = true;
					});

					hostedFields.on('validityChange', event => {
						this.fields[event.emittedBy].isValid = event.fields[event.emittedBy].isValid;
					});
				})
				.catch(() => void (this.cannotLoadForm = true));
		},

		isValid() {
			return this.getNonce()
				.then(() => true)
				.catch(() => false);
		},

		getNonce() {
			const promise = this.hostedFields
				? this.hostedFields.getNonce()
				: Promise.reject(new Error('No hosted fields.'));

			return promise
				.then(nonce => {
					this.$emit('change', nonce);
				})
				.catch(error => {
					Object.keys(this.fields).forEach(field => {
						this.fields[field].isTouched = true;
					});

					this.$emit('change', null);

					return Promise.reject(error);
				});
		},
	},
};
</script>

<style scoped lang="scss">
	@import '../styles/mixins';
	@import '../styles/variables';

	.validated-payment-method__row {
		margin-bottom: $spacing-06;
	}

	.validated-payment-method__input {
		margin: 0;
		width: 100%;
		height: $spacing-08;
		padding: $spacing-03;
		border: $border-width solid $border-color-light;
		border-radius: $border-radius;
	}

	.validated-payment-method__grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-gap: $spacing-05;
	}

	.validated-payment-method__label {
		@include text-bolder();
	}

	.validated-payment-method__error {
		@include text-error();
	}

	@media (max-width: $max-width-small) {
		.validated-payment-method__grid {
			grid-template-columns: 1fr;
		}
	}
</style>
