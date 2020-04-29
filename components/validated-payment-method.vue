<template>
	<div class="validated-payment-method">
		<div>
			<label for="card-number">Credit Card</label>
			<div id="card-number" class="validated-payment-method__input"></div>

			<label for="card-number" v-if="fields.number.isTouched && !fields.number.isValid" class="error">
				Please enter a valid credit card number.
			</label>
		</div>

		<div class="validated-payment-method__grid">
			<div>
				<label for="expiration-date">Expiration Date</label>
				<div id="expiration-date" class="validated-payment-method__input"></div>

				<label for="expiration-date"
				       v-if="fields.expirationDate.isTouched && !fields.expirationDate.isValid"
				       class="error">
					Please enter a valid expiration date (MM/YY).
				</label>
			</div>

			<div>
				<label for="cvv">Security Code</label>
				<div id="cvv" class="validated-payment-method__input"></div>

				<label for="cvv" v-if="fields.cvv.isTouched && !fields.cvv.isValid" class="error">
					Please enter a valid CVV.
				</label>
			</div>

			<div>
				<label for="postal-code">ZIP Code</label>
				<div id="postal-code" class="validated-payment-method__input"></div>

				<label for="postal-code" v-if="fields.postalCode.isTouched && !fields.postalCode.isValid" class="error">
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
		authorization: {
			type: String,
			required: true,
		},
	},

	data() {
		return {
			cannotLoadForm: false,
			hostedFields: null,
			fields: {
				number: {
					selector: '#card-number',
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
					type: 'text',
					isTouched: false,
					isValid: false,
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
					'font-size': '16px',
				},
			};

			hostedFieldsService.create(this.authorization, this.fields, styles)
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
					this.$emit('change', null);

					return Promise.reject(error);
				});
		},
	},
};
</script>

<style scoped lang="scss">
	@import '../styles/variables';

	.validated-payment-method__input {
		margin: 0;
		width: 100%;
		height: $spacing-09;
		border-radius: $border-radius;
		border: $border-width solid $gray-50;
		padding: $spacing-04;
	}

	.validated-payment-method__grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-gap: $spacing-05;
		margin-top: $spacing-05;
	}
</style>
